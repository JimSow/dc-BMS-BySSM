/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 基于ztree和jquery ui的树形选择弹窗
 */
(function ($) {
    var methods = {
        init: function (options) {
            var ztreeSetting = $.extend({}, $.fn.jqTreeSelDlg.defVal.ztreeSetting, options.ztreeSetting);
            var optVals = $.extend({}, $.fn.jqTreeSelDlg.defVal, options);
            optVals.ztreeSetting = ztreeSetting;
            return this.each(function () {
                var $this = $(this);
                var data = $this.data($.fn.jqTreeSelDlg.constVal.dataName);
                var treeNodeId = optVals.treeNodeId;
                var rsFillSel=optVals.rsFillSel;
                var rsDateModelName=optVals.rsDateModelName;
                var selTrigger=optVals.selTrigger;
                var matchAttr=optVals.matchAttr;
                // If the plugin hasn't been initialized yet
                if (!data) {
                    $(optVals.dlgSel).dialog({
                        modal: true,
                        width: 500,
                        height: 600,
                        autoOpen: false,
                        title: "Dialog Title", 
                        buttons: [
                            {
                                text: "确定",
                                click: function () {
                                    var event=this.event;
                                    if(!event){
                                        alert("没有找到触发事件");
                                        return;
                                    }
                                    var treeObj = $.fn.zTree.getZTreeObj(treeNodeId);
                                    var nodes = treeObj.getSelectedNodes();
                                    if(nodes.length>0){
                                    	var model=nodes[0];
                                    	if(rsDateModelName){
                                    		model=[rsDateModelName];
                                    	}
                                        
                                        if(!model){
                                            alert("没有找到数据模型")
                                        }
                                        var src=event.target;
                                        var fillPar=$(src).closest(rsFillSel);
                                        MyTools.fillDateToHtml({
                                        	matchAttr:matchAttr,
                                            content:fillPar,
                                            data:model
                                        });
                                    }
                                    $(this).dialog("close");
                                }
                            },
                            {
                                text: "取消",
                                click: function () {
                                    $(this).dialog("close");
                                }
                            }
                        ]
                    });
                    
                    $this.data($.fn.jqTreeSelDlg.constVal.dataName, optVals);
                    $(this).attr("out-" + $.fn.jqTreeSelDlg.constVal.dataName, "out");
                    $(selTrigger).bind("click",function(e){
                        $(optVals.dlgSel)[0].event=e;
                        $("#" + treeNodeId).empty();
                        $.fn.zTree.init($("#" + treeNodeId), ztreeSetting, null);
                        $(optVals.dlgSel).dialog("open");
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
        }
    };

    $.fn.jqTreeSelDlg = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' 方法在$.fn.hstabs中不存在。');
        }
    };
    $.fn.jqTreeSelDlg.newCount = 1;
    $.fn.jqTreeSelDlg.defVal = {
        treeNodeId: "tp-tree-content-id",
        ztreeSetting: {
            view: {
                selectedMulti: false
            },
            check: {
                enable: false
            },
            data: {
                simpleData: {
                    enable: false
                }
            },
            edit: {
                enable: false,
                showRenameBtn: false
            },
            async: {
                enable: true,
                url: "./ZTreeNodes.action",
                autoParam: ["id", "name"]
            }
        },
        panelModelDataName: "panel-model",
        rsDateModelName: "model",
        dlgSel: "#ask-dlg-id",
        rsFillSel: ".rs-fill",
        selTrigger:".tree-dlg-sel",
        matchAttr: "data-field"
        
    };
    $.fn.jqTreeSelDlg.constVal = {
        dataName: "tree-panel"
    }
    $.fn.jqTreeSelDlg.verInfor = {
        version: "1.0000",
        verdate: "2015-06-01",
        verauthor: "lwt"
    };

})(jQuery);

