/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 基于ztree的坐标为tree右边为节点详情的控件
 */

(function ($) {
    var methods = {
        init: function (options) {
            var ztreeSetting = $.extend({}, $.fn.jqTreePanel.defVal.ztreeSetting, options.ztreeSetting);
            var optVals = $.extend({}, $.fn.jqTreePanel.defVal, options);
            optVals.ztreeSetting = ztreeSetting;
                        
            return this.each(function () {
                var $this = $(this);
                var data = $this.data($.fn.jqTreePanel.constVal.dataName);
                var treeNodeId = optVals.treeNodeId;
                // If the plugin hasn't been initialized yet
                if (!data) {
                	var panelSel=optVals.panelSel;
                	var panelContent=$this.find(panelSel);
                	if($(panelContent).validationEngine){
                		$(panelContent).validationEngine();
                	}
                    $(optVals.dlgSel).dialog({
                        modal: true,
                        width: 300,
                        height: 200,
                        autoOpen: false,
                        buttons: [
                            {
                                text: "确定",
                                click: function () {
                                	
                                    var optvals = this.optvals;
                                    var treeId = this.treeId;
                                    var treeNode = this.treeNode;

                                    var treeContent = $("#" + treeId);
                                    var treePanel = treeContent.closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
                                    //var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);

                                    var parNodeIdName=optvals.parNodeIdName;
                                    var nodeIdName = optvals.nodeIdName;
                                    var panelSel = optvals.panelSel;
                                    var panelModelDataName = optvals.panelModelDataName;
                                    var url = optvals.delDetUrl;
                                    var postData = nodeIdName + "=" + treeNode.id;
                                    if(parNodeIdName){
                                    	postData +="&"+parNodeIdName+"="+treeNode.pId;
                                    }
                                    //
                                    $.ajax({
                                        url: url,
                                        data: postData,
                                        type: "post",
                                        async: false,
                                        dataType: "json",
                                        contentType: "application/x-www-form-urlencoded",
                                        beforeSend: function (XHR) {
                                        },
                                        success: function (rsdata, statuText) {
                                            if (rsdata.status === "ok") {
                                                $(treePanel).data(panelModelDataName, rsdata);
                                                $(panelSel).empty();
                                                var treeObj = $.fn.zTree.getZTreeObj(treeId);
                                                treeObj.removeNode(treeNode);
                                                MyTools.showAlert("alert-success","删除成功！");
                                            } else {
                                                MyTools.showAlert("alert-danger","操作失败："+rsdata.msg);
                                            }
                                        },
                                        error: function (XMLHttpRequest, statuText, ex) {
                                        },
                                        complete: function (XHR, TS) {
                                        }
                                    });
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
                    $.fn.zTree.init($("#" + treeNodeId), ztreeSetting, null);
                    $this.data($.fn.jqTreePanel.constVal.dataName, optVals);
                    $(this).attr("out-" + $.fn.jqTreePanel.constVal.dataName, "out");
                    //$(this).data($.fn.jqTreePanel.constVal.dataName, optVals);
                    var saveBut = $(this).find(optVals.saveButSel);
                    var editBut = $(this).find(optVals.editButSel);
                    $(editBut).attr("disabled","true");
                    if (saveBut.length > 0) {
                        $(saveBut).bind("click", function (e) {//disabled="disabled"
                            methods.saveButFunc(e);
                        });
                    }
                    if (editBut.length > 0) {
                        $(editBut).bind("click", function (e) {
                            var src = e.target;
                            var btn = $(src).closest(".btn");
                            if (!(btn).is("[disabled]")) {
                                methods.editButFunc(e);
                            }
                        });
                    }
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
        addHoverDom: function (treeId, treeNode) {
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0 || treeNode.newFlag === "true")
                return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                    + "' title='新节点' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_" + treeNode.tId);
            if (btn)
                btn.bind("click", function () {
                    var zTree = $.fn.zTree.getZTreeObj(treeId);
                    var newNode = zTree.addNodes(treeNode, {id: (100 + $.fn.jqTreePanel.newCount), pId: treeNode.id, name: "新节点" + ($.fn.jqTreePanel.newCount++), newFlag: "true"});
                    var treeContent = $("#" + treeId);
                    var treePanel = treeContent.closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
                    var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);
                    if (optvals && optvals.afterAddNode) {
                        var aargs = {newNode: newNode, optvals: optvals};
                        optvals.afterAddNode(aargs);
                    }
                    return false;
                });
        },
        removeHoverDom: function (treeId, treeNode) {
            $("#addBtn_" + treeNode.tId).unbind().remove();
        },
        //树节点单击事件响应的函数
        zTreeOnClick: function (event, treeId, treeNode, clickFlag) {   	
            var treeContent = $("#" + treeId);
            var treePanel = treeContent.closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
            var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);
            $(treePanel).data("now-tree-node", treeNode);
            var rsDateModelName = optvals.rsDateModelName;
            var addTmpSel = optvals.addPanelTmp;
            var readTmpSel = optvals.readPanelTmp;
            var panelSel = optvals.panelSel;
            var panelContent = $(treePanel).find(panelSel);
            var panelModelDataName = optvals.panelModelDataName;
            var nodeIdName = optvals.nodeIdName;
            var afterLoadSucess = optvals.afterLoadSucess;
            var url = optvals.selDetUrl;
            $(treePanel).data(panelModelDataName, $.fn.jqTreePanel.constVal.addModel);
            var editBut = $(treePanel).find(optvals.editButSel);
            $(panelContent).empty();        
            if (treeNode.newFlag === "true") {
                var pId = treeNode.pId;
                var code=treeNode.code;
                var addTmpClone = $(addTmpSel).clone(true);
                MyTools.addLastToCloneNode(addTmpClone, "-clone");
                var pidEleSel = optvals.panelParIdSel;
                $(addTmpClone).find(pidEleSel).val(pId);
                $(addTmpClone).find(".treeNode").val(code);
                $(panelContent).append(addTmpClone);
                //$(editBut).attr("disabled", "disabled");
                $(window).trigger("stateadd");//可编辑状态              
            } else {
                var readTmpClone = $(readTmpSel).clone(true);
                MyTools.addLastToCloneNode(readTmpClone, "-clone");
                $(panelContent).append(readTmpClone);
                var loadData = treeNode;
                $(treePanel).data(panelModelDataName, loadData);
                MyTools.fillDateToHtml({content: panelContent, data: loadData[rsDateModelName]});
                //$(editBut).removeAttr("disabled");
                $(window).trigger("stateread");//只读状态
                /* var largs = {
                 url: url,
                 postData: nodeIdName + "=" + treeNode.id,
                 loadSuccess: function (loadData) {
                 $(treePanel).data(panelModelDataName, loadData);
                 
                 MyTools.fillDateToHtml({content: panelContent, data: loadData[rsDateModelName]});
                 if (afterLoadSucess) {
                 afterLoadSucess(optvals, loadData);
                 }
                 }
                 }
                 methods.loadDetInfor(largs);*/
            }
        },
        loadDetInfor: function (args) {
            var url = args.url;
            var postData = args.postData;
            var loadSuccess = args.loadSuccess;
            $.ajax({
                url: url,
                data: postData,
                type: "post",
                async: false,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                beforeSend: function (XHR) {
                },
                success: function (rsdata, statuText) {
                    loadSuccess(rsdata);
                },
                error: function (XMLHttpRequest, statuText, ex) {

                },
                complete: function (XHR, TS) {

                }
            });
        },
        beforeDelNode: function (treeId, treeNode) {
            var treeContent = $("#" + treeId);
            var treePanel = treeContent.closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
            var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);

            var nodeIdName = optvals.nodeIdName;
            var parNodeIdName=optvals.parNodeIdName;
            var panelSel = optvals.panelSel;
            var panelModelDataName = optvals.panelModelDataName;
            var url = optvals.delDetUrl;
            
            //
            if (treeNode.newFlag === "true") {
                $(panelSel).empty();
                return true;
            } else {
                $(optvals.dlgSel)[0].optvals = optvals;
                $(optvals.dlgSel)[0].treeId = treeId;
                $(optvals.dlgSel)[0].treeNode = treeNode;
                $(optvals.dlgSel).dialog("open");
                return false;
            }
        },
        saveButFunc: function (e) {
        	
            var src = e.target;
            var treePanel = $(src).closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
            var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);
            var saveBut = $(treePanel).find(optvals.saveButSel);
            if($(saveBut).attr("disabled")){
            	return;
            }
            var ntreeNode = $(treePanel).data("now-tree-node");
            var treeNodeId = optvals.treeNodeId;
            var rsDateModelName = optvals.rsDateModelName;
            //var nodeIdName = optvals.nodeIdName;
            var panelSel = optvals.panelSel;
            var panelContent = $(treePanel).find(panelSel);
            //验证
            if($(panelContent).validationEngine){
            	var res = $(panelContent).validationEngine('validate');
            	if(res==false){
            		return;
            	}
            }
            //
            var panelModelDataName = optvals.panelModelDataName;
            var model = $(treePanel).data(panelModelDataName);
            var url = "#";
            if (model && model.isNew === true) {
                url = optvals.addDetUrl;
            } else {
                url = optvals.upDetUrl;
            }
            var postData = $(panelContent).serialize();
            if(postData){
            	 //var panelModelDataName = optvals.panelModelDataName;
                $.ajax({
                    url: url,
                    data: postData,
                    type: "post",
                    async: false,
                    dataType: "json",
                    contentType: "application/x-www-form-urlencoded",
                    beforeSend: function (XHR) {
                    },
                    success: function (rsdata, statuText) {
                        if (rsdata.status === "ok") {
                            $(treePanel).data(panelModelDataName, rsdata);
                            $(panelContent).empty();
                            var readTmpSel = optvals.readPanelTmp;
                            var rsNodeName=optvals.rsNodeName;
                            var readTmpClone = $(readTmpSel).clone(true);
                            MyTools.addLastToCloneNode(readTmpClone, "-clone");
                            $(panelContent).append(readTmpClone);
                            MyTools.fillDateToHtml({content: panelContent, data: rsdata[rsDateModelName]});
                            var treeObj = $.fn.zTree.getZTreeObj(treeNodeId);
//                            if(rsNodeName){
//                            	ntreeNode.id = rsdata[rsNodeName].id;
//                                ntreeNode.pId = rsdata[rsNodeName].pId;
//                                ntreeNode.name = rsdata[rsNodeName].name;
//                                ntreeNode[rsDateModelName] = rsdata[rsNodeName][rsDateModelName];
//                            }else{
                            	ntreeNode.id = rsdata.id;
                                ntreeNode.pId = rsdata.pId;
                                ntreeNode.name = rsdata.name;
                                ntreeNode[rsDateModelName] = rsdata[rsDateModelName];
//                            }
                            
                            ntreeNode.newFlag="false";
                            //ntreeNode[rsDateModelName] = rsdata[rsDateModelName];
                            treeObj.updateNode(ntreeNode);
                            var editBut = $(treePanel).find(optvals.editButSel);
                            var saveBut = $(treePanel).find(optvals.saveButSel);
                            $(editBut).removeAttr("disabled");
                            $(saveBut).attr("disabled","true");
                            $("#"+ntreeNode.tId+"_span").trigger("click");
                            MyTools.showAlert("alert-success","保存成功");
                        } else {
                            MyTools.showAlert("alert-danger","保存失败:"+rsdata.msg);
                        }
                    },
                    error: function (XMLHttpRequest, statuText, ex) {
                    },
                    complete: function (XHR, TS) {
                    }
                });
                if (optvals.cusSaveButFunc) {
                    var args = {event: e, optvals: optvals};
                    optvals.cusSaveButFunc(args);
                }
            }
           
        },
        //编辑按钮单击响应的事件
        editButFunc: function (e) {
            var src = e.target;
            var treePanel = $(src).closest("[out-" + $.fn.jqTreePanel.constVal.dataName + "]");
            var optvals = $(treePanel).data($.fn.jqTreePanel.constVal.dataName);
            var rsDateModelName = optvals.rsDateModelName;
            var panelModelDataName = optvals.panelModelDataName;
            var panelData = $(treePanel).data(panelModelDataName);
            if (panelData && panelData.isNew === true) {
                return;
            }
            var saveBut = $(treePanel).find(optvals.saveButSel);
            $(saveBut).removeAttr("disabled");
            var panelSel = optvals.panelSel;
            var panelContent = $(treePanel).find(panelSel);
            $(panelContent).empty();
            var upTmpSel = optvals.upPanelTmp;
            var upTmpClone = $(upTmpSel).clone(true);
            MyTools.addLastToCloneNode(upTmpClone, "-clone");
            $(panelContent).append(upTmpClone);
            $(window).trigger("stateup");
            MyTools.fillDateToHtml({content: panelContent, data: panelData[rsDateModelName]});
            if (optvals.cusEditButFunc) {
                var args = {event: e, optvals: optvals,data: panelData};
                optvals.cusEditButFunc(args);
            }
        }
    };

    $.fn.jqTreePanel = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' 方法在$.fn.hstabs中不存在。');
        }
    };
    $.fn.jqTreePanel.newCount = 1;
    $.fn.jqTreePanel.defVal = {
        treeNodeId: "tp-tree-content-id",
        panelSel: ".tp-panel-form",
        ztreeSetting: {
            view: {
                addHoverDom: methods.addHoverDom,
                removeHoverDom: methods.removeHoverDom,
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
                enable: true,
                showRenameBtn: false
            },
            callback: {
                onClick: methods.zTreeOnClick,
                beforeRemove: methods.beforeDelNode
            },
            async: {
                enable: true,
                url: "./ZTreeNodes.action",
                autoParam: ["id", "name"]
            }
        },
        addPanelTmp: "#panel-tmp .add-panel-tmp",
        upPanelTmp: "#panel-tmp .up-panel-tmp",
        readPanelTmp: "#panel-tmp .read-panel-tmp",
        panelModelDataName: "panel-model",
        saveButSel: ".save-but",
        editButSel: ".edit-but",
        cusSaveButFunc: function (args) {

        },
        cusEditButFunc: function (args) {

        },
        afterAddNode: function (args) {

        },
        loadDetUrl: "",
        panelParIdSel: "[panelParId]",
        nodeIdName: "id",
        parNodeIdName:"",
        selDetUrl: "./ZTreeNodes.action",
        delDetUrl: "#",
        addDetUrl: "#",
        upDetUrl: "#",
        afterLoadSucess: function (optvals, loadData) {

        },
        rsDateModelName: "model",
        dlgSel: "#ask-dlg-id"

    };
    $.fn.jqTreePanel.constVal = {
        dataName: "tree-panel",
        addModel: {
            isNew: true
        }
    }
    $.fn.jqTreePanel.verInfor = {
        version: "1.0000",
        verdate: "2015-06-01",
        verauthor: "lwt"
    };

})(jQuery);
