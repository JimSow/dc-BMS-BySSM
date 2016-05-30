/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {

    var defOptions = {
        leftCollBtn: "#left-coll-btn",
        headSel: ".lay-out-head",
        middleSel: ".lay-out-middle",
        middleLeftSel: ".middle-left",
        middleLeftHeadSel: ".middle-left-head",
        middleLeftNavSel: ".middle-left-nav",
        middleRightSel: ".middle-right",
        middleRightHeadSel: ".middle-right-head",
        middleRightContentSel: ".middle-right-content",
        footSel: ".lay-out-foot",
        /**/
        mainLayOutClass: "main-lay-out",
        headClass: "lay-out-head",
        middleClass: "lay-out-middle",
        middleLeftClass: "middle-left",
        middleLeftHeadClass: "middle-left-head",
        middleLeftNavClass: "middle-left-nav",
        middleRightClass: "middle-right",
        middleRightHeadClass: "middle-right-head",
        middleRightContentClass: "middle-right-content",
        footClass: "lay-out-foot",
        customWinResize: function (e) {

        }
    };

    var methods = {
        init: function (options) {
            ///
            return this.each(function () {
                var toptions = $.extend({}, defOptions, options);
                this.options = toptions;
                var objThis = this;
                var $this = $(this);


                var middleLeftSel = $this.find(toptions.middleLeftSel);
                // Add novalidate tag if HTML5.
                methods.addLayoutClass($this, toptions);
                $(window).bind("resize", function (e) {
                    methods.resizeLayOut(objThis, toptions);
                    if (toptions.customWinResize) {
                        toptions.customWinResize(e, objThis);
                    }
                });
                $(toptions.leftCollBtn).bind("click", function (e) {
                    if ($(middleLeftSel).is(":hidden")) {
                        methods.leftShow(objThis, toptions);
                    } else {
                        methods.leftHidden(objThis, toptions);
                    }
                });
            });
        },
        addLayoutClass: function (layOut, toptions) {

            var $this = $(this);
            if (layOut) {
                $this = layOut;
            }

            var headSel = $this.find(toptions.headSel);
            var middleSel = $this.find(toptions.middleSel);
            var middleLeftSel = $this.find(toptions.middleLeftSel);
            var middleLeftHeadSel = $this.find(toptions.middleLeftHeadSel);
            var middleLeftNavSel = $this.find(toptions.middleLeftNavSel);
            var middleRightSel = $this.find(toptions.middleRightSel);
            var middleRightHeadSel = $this.find(toptions.middleRightHeadSel);
            var middleRightContentSel = $this.find(toptions.middleRightContentSel);
            var footSel = $this.find(toptions.footSel);


            $this.addClass(toptions.mainLayOutClass);
            $(headSel).addClass(toptions.headClass);
            $(middleSel).addClass(toptions.middleClass);
            $(middleLeftSel).addClass(toptions.middleLeftClass);
            $(middleLeftHeadSel).addClass(toptions.middleLeftHeadClass);
            $(middleLeftNavSel).addClass(toptions.middleLeftNavClass);
            $(middleRightSel).addClass(toptions.middleRightClass);
            $(middleRightHeadSel).addClass(toptions.middleRightHeadClass);
            $(middleRightContentSel).addClass(toptions.middleRightContentClass);
            $(footSel).addClass(toptions.footClass);

        },
        leftHidden: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }
            if (toptions.beforeLeftHidden) {
                toptions.beforeLeftHidden(objThis);
            }
            var middleLeftSel = $this.find(toptions.middleLeftSel);
            $(middleLeftSel).hide("slide",function(e){
                methods.resizeLayOut(objThis,toptions);
            });
//            var leftW = $(middleLeftSel).outerWidth();
//            $(middleLeftSel).css("margin-left", "-" + leftW + "px");
//            $(middleLeftSel).attr("hidden", "true");
//
//            var middleRightSel = $this.find(toptions.middleRightSel);
//            var middleRightHeadSel = $this.find(toptions.middleRightHeadSel);
//            var middleRightContentSel = $this.find(toptions.middleRightContentSel);
//            var prew = $(middleRightSel).outerWidth();
//            $(middleRightSel).outerWidth(prew + leftW);
//            $(middleRightHeadSel).outerWidth(prew + leftW);
//            $(middleRightContentSel).outerWidth(prew + leftW);

            if (toptions.afterLeftHidden) {
                toptions.afterLeftHidden(objThis);
            }
        },
        leftShow: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }
            if (toptions.beforeLeftShow) {
                toptions.beforeLeftShow(objThis);
            }
            var middleLeftSel = $this.find(toptions.middleLeftSel);
            $(middleLeftSel).show("slide", function (e) {
                methods.resizeLayOut(objThis, toptions);
            });
//            var leftW = $(middleLeftSel).outerWidth();
//            $(middleLeftSel).css("margin-left", "0" + "px");
//            $(middleLeftSel).removeAttr("hidden");
//
//            var middleRightSel = $this.find(toptions.middleRightSel);
//            var middleRightHeadSel = $this.find(toptions.middleRightHeadSel);
//            var middleRightContentSel = $this.find(toptions.middleRightContentSel);
//            var prew = $(middleRightSel).outerWidth();
//            $(middleRightSel).outerWidth(prew - leftW);
//            $(middleRightHeadSel).outerWidth(prew - leftW);
//            $(middleRightContentSel).outerWidth(prew - leftW);

            if (toptions.afterLeftShow) {
                toptions.afterLeftShow(objThis);
            }
        },
        headHide: function (layOut, toptions) {
           var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }
            if (toptions.beforeHeadHide) {
                toptions.beforeHeadHide(objThis);
            }

            var headSel = $this.find(toptions.headSel);
            $(headSel).hide("slide", function (e) {
                methods.resizeLayOut($this, toptions);
            });

            if (toptions.afterHeadHide) {
                toptions.afterHeadHide(objThis);
            }
        },
        headShow: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }
            if (toptions.beforeHeadShow) {
                toptions.beforeHeadShow(objThis);
            }
            var headSel = $this.find(toptions.headSel);
            $(headSel).show("slide", function (e) {
                methods.resizeLayOut($this, toptions);
            });

            if (toptions.afterHeadShow) {
                toptions.afterHeadShow(objThis);
            }
        },
        footHide: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }

            if (toptions.beforeFootHide) {
                toptions.beforeFootHide(objThis);
            }
            var footSel = $this.find(toptions.footSel);
            $(footSel).hide("slide", function (e) {
                methods.resizeLayOut($this, toptions);
            });

            if (toptions.afterFootHide) {
                toptions.afterFootHide(objThis);
            }
        },
        footShow: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }
            if (toptions.beforeFootShow) {
                toptions.beforeFootShow(objThis);
            }
            var footSel = $this.find(toptions.footSel);
            $(footSel).show("slide", function (e) {
                methods.resizeLayOut($this, toptions);
            });

            if (toptions.afterFootShow) {
                toptions.afterFootShow(objThis);
            }
        },
        resizeLayOut: function (layOut, toptions) {
            var objThis=this;
            var $this = $(this);
            if (layOut) {
                $this = $(layOut);
                objThis=layOut;
            }

            var parNode = toptions.parNode;
            if (!parNode) {
                parNode = window;
            }
            var headSel = $this.find(toptions.headSel);
            var middleSel = $this.find(toptions.middleSel);
            var middleLeftSel = $this.find(toptions.middleLeftSel);
            var middleLeftHeadSel = $this.find(toptions.middleLeftHeadSel);
            var middleLeftNavSel = $this.find(toptions.middleLeftNavSel);
            var middleRightSel = $this.find(toptions.middleRightSel);
            var middleRightHeadSel = $this.find(toptions.middleRightHeadSel);
            var middleRightContentSel = $this.find(toptions.middleRightContentSel);
            var footSel = $this.find(toptions.footSel);

            if (toptions.beforeResizeMiddleRight) {
                toptions.beforeResizeMiddleRight(objThis);
            }


            var winH = $(parNode).height();
            var winW = $(parNode).width();

            var headH = $(headSel).outerHeight(true);
            var footH = $(footSel).outerHeight(true);

            if ($(headSel).is(":hidden")) {
                headH = 0;
            }
            if ($(footH).is(":hidden")) {
                footH = 0;
            }

            var middleH = winH - headH - footH;
            $(middleSel).height(middleH);

            var midLeftW = $(middleLeftSel).outerWidth(true);
            if ($(middleLeftSel).is(":hidden")) {
                midLeftW = 0;
            }
            var midRightW = winW - midLeftW;
            $(middleRightSel).width(midRightW);

            var midLeftHeadH = $(middleLeftHeadSel).outerHeight(true);
            var midLeftNavH = middleH - midLeftHeadH;
            $(middleLeftNavSel).height(midLeftNavH);

            var midRightHeadH = $(middleRightHeadSel).outerHeight(true);
            var midRightContentH = middleH - midRightHeadH;
            $(middleRightContentSel).height(midRightContentH);

            if (toptions.afterResizeMiddleRight) {
                toptions.afterResizeMiddleRight(objThis);
            }
        }
    };

    $.fn.jqMainLayout = function (method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };

})(jQuery);
