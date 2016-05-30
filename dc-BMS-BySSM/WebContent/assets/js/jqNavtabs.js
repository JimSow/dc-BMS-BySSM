/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$.widget("myui.jqNavtabs", $.ui.tabs, {
    version: "1.11.4",
    delay: 300,
    options: {
        active: null,
        collapsible: false,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        // callbacks
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
        navBarWidth: 350,
        navViewPort: ".hs-tabs-view-port-content",
        moreTabsBtn: "",
        iScroll:null
    },
    _create: function () {
        var $this = $(this),options = this.options;
        this._super();
    },
    _processTabs: function () {
        this._super();
        var $this = $(this),
                options = this.options;
//        var viewPort = this.element.find(options.navViewPort);
//        viewPort.width(options.navBarWidth);
    },
    fitTabsPostion: function (ui) {
        var newTab = ui.newTab;
        var tabLeft = $(newTab).position().left;
        var tabsNav = $(newTab).parent();
        var tabsNavLeft = $(tabsNav).position().left;
        if ((tabLeft + tabsNavLeft) < 0) {
            $(tabsNav).animate({left: "-=" + (tabsNavLeft + tabLeft) + "px"}, 500);
            //$(tabsNav).position().left = tabsNavLeft - tabLeft;
        } else {
            var tabW = $(newTab).outerWidth();

            var allW = tabLeft + tabW + tabsNavLeft;

            var viewPort = $(newTab).closest(this.options.navViewPort);
            var viewW = viewPort.width();

            if (allW > viewW) {
                var detW = allW - viewW;
                $(tabsNav).animate({left: "-=" + detW + "px"}, 500);
                //$(tabsNav).position().left = tabsNavLeft - detW;
            }
        }
        if (tabsNavLeft > 0) {
            $(tabsNav).animate({left: "=0px"}, 500);
        }

    },
    fitScrollPostion: function (ui) {
        var iScroll=this.options.iScroll;
        if(!iScroll){
            return;
        }
        var newTab = ui.newTab;
        var tabLeft = $(newTab).position().left;
        var tabsNav = $(newTab).parent();
        var tabsNavLeft = iScroll.x;
        if ((tabLeft + tabsNavLeft) < 0) {
            //$(tabsNav).animate({left: "-=" + (tabsNavLeft + tabLeft) + "px"}, 500);
            var detX=tabsNavLeft + tabLeft;
            iScroll.scrollTo(iScroll.x-detX,iScroll.y,500);
        } else {
            var tabW = $(newTab).outerWidth();

            var allW = tabLeft + tabW + tabsNavLeft;

            var viewPort = $(newTab).closest(this.options.navViewPort);
            var viewW = viewPort.width();

            if (allW > viewW) {
                var detW = allW - viewW;
                iScroll.scrollTo(iScroll.x-detW,iScroll.y,500);
                //$(tabsNav).animate({left: "-=" + detW + "px"}, 500);
                //$(tabsNav).position().left = tabsNavLeft - detW;
            }
        }
        if (tabsNavLeft > 0) {
            //$(tabsNav).animate({left: "=0px"}, 500);
            iScroll.scrollTo(0,iScroll.y,500);
        }

    },
    // handles show/hide for selecting tabs
    _toggle: function (event, eventData) {
        var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

        this.running = true;

        function complete() {
            that.running = false;
            that._trigger("activate", event, eventData);
            var iScroll=that.options.iScroll;
            if(iScroll){
                that.fitScrollPostion(eventData);
            }else{
                that.fitTabsPostion(eventData);
            }
            
        }

        function show() {
            eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active");

            if (toShow.length && that.options.show) {
                that._show(toShow, that.options.show, complete);
            } else {
                toShow.show();
                complete();
            }
        }

        // start out by hiding, then showing, then completing
        if (toHide.length && this.options.hide) {
            this._hide(toHide, this.options.hide, function () {
                eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                show();
            });
        } else {
            eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
            toHide.hide();
            show();
        }

        toHide.attr("aria-hidden", "true");
        eventData.oldTab.attr({
            "aria-selected": "false",
            "aria-expanded": "false"
        });
        // If we're switching tabs, remove the old tab from the tab order.
        // If we're opening from collapsed state, remove the previous tab from the tab order.
        // If we're collapsing, then keep the collapsing tab in the tab order.
        if (toShow.length && toHide.length) {
            eventData.oldTab.attr("tabIndex", -1);
        } else if (toShow.length) {
            this.tabs.filter(function () {
                return $(this).attr("tabIndex") === 0;
            })
                    .attr("tabIndex", -1);
        }

        toShow.attr("aria-hidden", "false");
        eventData.newTab.attr({
            "aria-selected": "true",
            "aria-expanded": "true",
            tabIndex: 0
        });
    },
    addNewTab: function (options) {
        var defOptions = {
            tabTemp: "<li><a></a></li>",
            tabTitle: "new tab",
            contentContainer: ".middle-right-content",
            tabContentHtml: "<div></div>",
            id: "",
            afterAdd: function (ui) {

            }
        };
        var toptions = $.extend({}, defOptions, options);
        var label = toptions.tabTitle;
        var id = toptions.id;
        var tabTemp = toptions.tabTemp;
        var li = $(tabTemp);
        var lia = li.find("a");
        lia.attr("href", "#" + id).append(label);
        this.element.find(".ui-tabs-nav").append(li);

        var tabContentHtml = $(toptions.tabContentHtml);
        tabContentHtml.attr("id", id);
        $(toptions.ContentContainer).append(tabContentHtml);

        var conContainer = this.element.find(toptions.contentContainer);
        $(conContainer).append(tabContentHtml);

        this.refresh();
        
        lia.trigger("click");
        if (toptions.afterAdd) {
            var objDate = {
                tab: li,
                tabPanel: tabContentHtml
            }
            toptions.afterAdd(objDate);
        }
    },
    delTab: function (options) {

        var tab = options.tab;
        if (tab) {
            var lia = $(tab).find("a");
            var ahref=lia.attr("href");

            $(ahref).remove();
            $(tab).remove();
            
            this.refresh();
        }

        if (options.afterDel) {
            options.afterDel();
        }
    },
    _refresh: function () {
        var $this = $(this),
                options = this.options;
        this._super();

    }
});