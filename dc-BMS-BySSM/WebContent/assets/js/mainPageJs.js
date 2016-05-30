/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (e) {
	var mainPageJs = new MainPageJs();
	MainPageJs.curObj=mainPageJs;
    mainPageJs.init();
//    $.material.init();
    $(window).trigger("resize");
});

function closeTabs(){
	var $tabCloseBtn=$(".tab-close-btn");
	$(".ui-tabs-active").find($tabCloseBtn).trigger("click");
}
function MainPageJs() {
    this.options = {
        mainLayout: "#main-container",
        navListContent: "#sidebar",
        linkItem: ".link-item",
        urlAttrName: "href",
        linkTitleSel: ".menu-text",
        middelRight: ".main-content-inner",
        middelRightHead: "#breadcrumbs",
        contentContainer: ".page-content",
        tabsViewPort: ".hs-tabs-view-port",
        tabCloseBtn: ".tab-close-btn",
        tabIframClass: "tab-iframe",
        viewPortContent:"#hs-tabs-view-port-content",
        sidebar:"#sidebar",
        breadcrumbs:"#breadcrumbs"
    };
    this.myScroll = null;
}
MainPageJs.editObj={};
MainPageJs.tabCount = 2;
MainPageJs.curObj=null;
MainPageJs.prototype = {
    init: function () {
        this.regMainLayoutFun();
        this.toLeftNav();
        this.regNavListFun();
        this.toRightNav();
        this.regRightNavFun();
    },
    regMainLayoutFun: function () {
        var that = this;
        $(window).bind("resize",function(e){
            that.fitFrame();
        });
//        $(this.options.mainLayout).jqMainLayout({
//            afterResizeMiddleRight: function (objThis) {
//                var middleRightHeadSel = $(objThis).find(objThis.options.middleRightHeadSel);
//                var vhw = $(middleRightHeadSel).width();
//                $(middleRightHeadSel).find(that.options.tabsViewPort).width(vhw - 100);
//                that.fitFrame();
//            },
//            customWinResize: function (e) {
//
//            }
//        });
    },
    toLeftNav: function () {
        var that = this;
    },
    toRightNav: function () {
      //  this.myScroll = new IScroll(this.options.tabsViewPort, {scrollX: true, scrollY: false, mouseWheel: true, click: true, useTransform: true});
        var that = this;
        var tabs = $(this.options.middelRight).jqNavtabs({
            iScroll: null,
            //页面被激活之前重新加载一次页面
            beforeActivate: function( event, ui ) {
            	var newPanel=ui.newPanel
            	//var tabId=fiandTabs.attr("href");
            	var ifr=$(newPanel).find("iframe");
            	var ifsrc=ifr.attr('src');
            	if(ifsrc.endWith("List")){
            		ifr.attr('src',ifsrc);
            	}else{
                	var method = ifsrc.substring(ifsrc.lastIndexOf("=")+1);
                	if($.inArray(method,list_methods) != -1){
                		ifr.attr('src',ifsrc);
                	}
            	}
//            	ifr.attr('src',ifsrc); //刷新
            }

            
        });
    },
    regRightNavFun: function () {
        var that = this;
        $(this.options.tabsViewPort).on("click", this.options.tabCloseBtn, function (e) {
        	
        	function close(){
        		$(that.options.middelRight).jqNavtabs("delTab", {
	                tab: tab,
	                afterDel: function () {
	                    if (that.myScroll) {
	                        setTimeout(function () {
	                            that.myScroll.refresh();
	                        }, 1000);

	                    }
	                }
	            });
        	}
        	
            var target = e.target;
            var tab = $(target).closest("li");
         
            //检查是否有表单数据，如果有进行提示
            var ifm = tab.closest(".main-content-inner").find("iframe[name='"+tab.attr("aria-controls")+"']");
            
            var ifm_src = ifm.attr("src");
            var method = ifm_src.substring(ifm_src.lastIndexOf("=")+1);
        	if($.inArray(method,list_job_methods) != -1){
        		$.confirm({
        			title: '',
        			content: '有表单数据可能未保存，是否确认关闭？',
        			confirm: function(){
        				close();
        			},
        			cancel: function(){
        				$(target).prev('a').click();
        			}
        		});
        	}else{
        		close();
        	}
            
        })
    },
    regNavListFun: function () {
        var that = this;
        $(this.options.navListContent).on("click", this.options.linkItem, function (e) {
            e.preventDefault();
            var src = e.target;
            var item = $(src).closest(that.options.linkItem);
            var itemLink = $(item).attr(that.options.urlAttrName);
            var itemTitle = $(item).find(that.options.linkTitleSel).html();
            if (itemLink) {
                var fiandTabs = $(that.options.middelRightHead).find("li a[linkurl='" + itemLink + "']");
                if (fiandTabs.length > 0) {    		
                    fiandTabs.trigger("click");
                } else {
                    $(that.options.middelRight).jqNavtabs("addNewTab", {
                        tabTemp: "<li class=\"withripple\"><a linkurl='" + itemLink + "'></a><span class=\"tab-close-btn mdi-navigation-close ace-icon fa fa-times\"></span></li>",
                        tabTitle: itemTitle,
                        contentContainer: that.options.contentContainer,
                        tabContentHtml: "<div><iframe class='" + that.options.tabIframClass +"' name='"+"tabs-" + MainPageJs.tabCount+ "' src='" + itemLink + "'></iframe></div>",
                        id: "tabs-" + MainPageJs.tabCount,
                        afterAdd: function (ui) {
                           
                        }
                    });
                    MainPageJs.tabCount++;
                    that.fitFrame();
                }
            }
        });
    },
    fitFrame: function () {
        var winHeight=$(window).height();
        var winWidth=$(window).width();
        var viewPortContent=this.options.viewPortContent;
        var breadcrumbs=this.options.breadcrumbs;
        var breadcrumbsW=$(breadcrumbs).width();
        $(viewPortContent).width(breadcrumbsW-50);
       // var winWidth=$("window").widget();
        $("[role=\"tabpanel\"]").outerHeight(winHeight-100);
    },
    addNewTabOnly:function(itemLink,itemTitle){
    	var that=this;
    	var fiandTabs = $(that.options.middelRightHead).find("li a[linkurl='" + itemLink + "']");
        if (fiandTabs.length > 0) {
            fiandTabs.trigger("click");
            var hid=fiandTabs.attr("href");
            var $if=$(hid).find("iframe");
            if($if.length>0){
            	//$if[0].src=itemLink + "&v="+Date.UTC();
            	var iframe=$if[0];
            	iframe.contentWindow.winShow();
            }
        } else {
            $(that.options.middelRight).jqNavtabs("addNewTab", {
                tabTemp: "<li class=\"withripple\"><a linkurl='" + itemLink + "'></a><span class=\"tab-close-btn mdi-navigation-close ace-icon fa fa-times\"></span></li>",
                tabTitle: itemTitle,
                contentContainer: that.options.contentContainer,
                tabContentHtml: "<div><iframe class='" + that.options.tabIframClass +"' name='"+"tabs-" + MainPageJs.tabCount+ "' src='" + itemLink + "&v="+Date.UTC()+"'></iframe></div>",
                id: "tabs-" + MainPageJs.tabCount,
                afterAdd: function (ui) {
                   
                }
            });
            MainPageJs.tabCount++;
            that.fitFrame();
        }
    }

}
 