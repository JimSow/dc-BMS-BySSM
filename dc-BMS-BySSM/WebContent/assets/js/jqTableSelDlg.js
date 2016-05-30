/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 基于bootstrap table和jquery ui的树形选择弹窗
 */
(function ($) {
    var methods = {
        init: function (options) {
            var tableSetting = $.extend({}, $.fn.jqTableSelDlg.defVal.tableSetting, options.tableSetting);
            var dlgSetting=$.extend({}, $.fn.jqTableSelDlg.defVal.dlgSetting, options.dlgSetting);
            var optVals = $.extend({}, $.fn.jqTableSelDlg.defVal, options);   
            dlgSetting=$.extend({},dlgSetting,{ width: optVals.dlgWidth,height: optVals.dlgHeight});
            tableSetting.toolbar = optVals.dlgSel + " " + tableSetting.toolbar;
            optVals.tableSetting = tableSetting;
            return this.each(function () {
                var $this = $(this);
                var data = $this.data($.fn.jqTableSelDlg.constVal.dataName);
                var rsFillSel = optVals.rsFillSel;
                var selTrigger = optVals.selTrigger;
                // If the plugin hasn't been initialized yet
                if (!data) {
                    $(optVals.dlgSel + " " + optVals.dlgTableContent).bootstrapTable(tableSetting);
                    $(optVals.dlgSel + " .tool-bar form input").bind("keydown", function (e) {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            e.stopPropagation();
                            $(optVals.dlgSel + " .tool-bar form").find(optVals.toolbarSearchBtn).trigger("click");
                        }
                    });
                     $(optVals.dlgSel + " .tool-bar form").find(optVals.toolbarSearchBtn).bind("click",function(e){
                         $(optVals.dlgSel + " " + optVals.dlgTableContent).bootstrapTable("refresh",{silent: true});
                     });
                     $(optVals.dlgSel).data("optVals",optVals);
                     $(optVals.dlgSel).dialog(dlgSetting);
                   /*  $(optVals.dlgSel).dialog({
                        modal: true,
                        width: optVals.dlgWidth,
                        height: optVals.dlgHeight,
                        autoOpen: false,
                   
                        buttons: [
                            {
                                text: "确定",
                                click: function () {
                                	optVals.okClick(this,optVals);
                                }
                            },
                             {
                                text: "取消",
                                click: function () {
                                    $(this).dialog("close");
                                }
                            }
                        ]
                    });  		*/

                    $this.data($.fn.jqTableSelDlg.constVal.dataName, optVals);
                    $(this).attr("out-" + $.fn.jqTableSelDlg.constVal.dataName, "out");
                    $(document).on("click", selTrigger, function (e) {
                    	var src=e.target;
                    	var parEle=$(src).closest(selTrigger);
                    	if(!parEle.is("[not-used]")){
                    		$(optVals.dlgSel)[0].event = e;
                            $(optVals.dlgSel + " " + optVals.dlgTableContent).bootstrapTable("refresh",{silent: true});
                            if(optVals.beforeOpenDlg){
                            	//optVals.beforeOpenDlg(e);
	                            	if(optVals.beforeOpenDlg(e)=="false"){
	                                	return false;
	                                }
                            }
                            $(optVals.dlgSel).dialog("open");
                            	
                    	}
                    });
                }
            });
        },
        destroy: function (options) {
            return this.each(function () {
//                var $this = $(this),
//                    data = $this.data(optVals.dataName);
//                // Namespacing FTW
//                $(window).unbind('.tooltip');
//                data.hstabs.remove();
//                $this.removeData('tooltip');
            })
        },
        queryParams: function (param) {
	    	var newParam="";
	    	
	    	if(param.offset!=='undefined' && param.limit!=='undefined'){
	        	var pageSize=param.limit;
	        	var offset=param.offset;
		    	pageSize=parseInt(pageSize, 10);
		    	offset=parseInt(offset, 10);
		    	var pageNo=1;
		    	if(pageSize!==0){
		    		var pageNo=offset/pageSize+1;
		    	}
		    	//pageNumber 请求的页码
		        newParam+="&pageNo="+pageNo;
		        //每页有多少条数据
		        newParam+="&pageSize="+param.limit;
		    }
        	    
    	    if(param.search){//搜索关键词
    	        newParam+="&search="+encodeURIComponent(param.search);
    	    }
    	    if(param.sort){//排序关键字
    	        newParam+="&sort="+encodeURIComponent(param.sort);
    	    }
    	    if(param.order){//排序方法
    	        newParam+="&order="+param.order;
    	    }

            if (this.selFormSel) {
                var selTable = this.selFormSel;
                var formStr = $(this.toolbar).find(selTable).serialize();
                newParam += "&" + formStr;
            }

            if (newParam.indexOf("&") === 0) {
                newParam = newParam.substring(1);
            }

            return newParam;
        }
    };

    $.fn.jqTableSelDlg = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' 方法在$.fn.hstabs中不存在。');
        }
    };
    $.fn.jqTableSelDlg.newCount = 1;
    $.fn.jqTableSelDlg.defVal = {
    	dlgSetting:{
    		modal: true,
            autoOpen: false,
            title:"",
            buttons: [
				{
				    text: "确定",
				    click: function () {
				    	var optvals=$(this).data("optVals");
				    	optvals.okClick(this);
				    }
				},
				 {
				    text: "取消",
				    click: function () {
				        $(this).dialog("close");
				    }
				}
            ]

    	},
        tableSetting: {
            height: 400,
            selFormSel: "form",
            url: "./BootStrapTable.action",
            queryParams: methods.queryParams,
            toolbar: ".tool-bar",
            clickToSelect: "true",
            singleSelect: "true",  
            
        },
       
        dlgSel: "#ask-dlg-id",
        dlgHeight: 700,
        dlgWidth: 800,
        dlgTableContent: ".table-content",
        rsFillSel: ".rs-fill",
        selTrigger: ".table-dlg-sel",
        toolbarSearchBtn:".search-btn",
        okClick:function(that){
        	var optVals=this;
            var event = that.event;
            if (!event) {
               alert("没有找到触发事件");
               return;
                        }
            var selRows = $(optVals.dlgSel + " " + optVals.dlgTableContent).bootstrapTable("getSelections");
            if(selRows.length > 0){
               var model = selRows[0];
               var src = event.target;
               var fillPar = $(src).closest(optVals.rsFillSel);
               MyTools.fillDateToHtml({
                   content: fillPar,
                   data: model,
                   matchAttr:optVals.matchAttr
                     });
                 }
                 $(that).dialog("close");
             },       
       
    };
    $.fn.jqTableSelDlg.constVal = {
        dataName: "table-sel-dlg"
    }
    $.fn.jqTableSelDlg.verInfor = {
        version: "1.0000",
        verdate: "2015-06-01",
        verauthor: "lwt"
    };

})(jQuery);

