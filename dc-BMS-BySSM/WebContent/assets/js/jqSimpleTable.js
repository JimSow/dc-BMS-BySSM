/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 可以添加删除行的table
 */
(function ($) {
    var methods = {
        init: function (options) {
            var optVals = $.extend({}, $.fn.jqSimpleTable.defVal, options);
            return this.each(function () {
                var $this = $(this);
                var data = $this.data($.fn.jqSimpleTable.constVal.dataName);
                // If the plugin hasn't been initialized yet
                if (!data) {
                    $this.data($.fn.jqSimpleTable.constVal.dataName, optVals);
                    var tableHead = "<tr class=\"" + optVals.tableRowClass + "\"></tr>";
                    var $tableHead = $(tableHead);
                    var tableTmp = $(optVals.tableTmpSel + " ." + optVals.tableRowClass);
                    var tableTmpClone = $(tableTmp).clone(true);
                    var tds = $(tableTmpClone).find(optVals.rowCellSel);
                    for (var ti = 0; ti < tds.length; ti++) {
                        var td = tds[ti];
                        var th = "<th></th>";
                        var $th = $(th);
                        $th.append($(td).find("span"));
                        if ($(td).is("[" + optVals.titleAttr + "]")) {
                            $th.find("span").html($(td).attr(optVals.titleAttr));
                        }
                        if ($(td).is("[style]")) {
                            $th.attr("style", $(td).attr("style"));
                        }
                        $tableHead.append($th);
                    }
                    $(this).find("table thead").append($tableHead);
                    var that = this;
                    $(optVals.addBtnSel).bind("click", function (e) {
                        var cloneRow = $(tableTmp).clone(true);
                        var isOk=true;
                        if(optVals.beforeAddRow){
                        	isOk=optVals.beforeAddRow(e,that,cloneRow);
                        }
                        if(isOk===true){
	                    	 $(that).find("table tbody").append(cloneRow);
	                         if(optVals.afterAddRow){
	                         	optVals.afterAddRow(e,cloneRow);
	                         }
                        }
                       
                    });
                    $(optVals.delBtnSel).bind("click", function (e) {
                        var chkbox = $(that).find("table tbody").find(optVals.checkBoxSel);
                        $(chkbox).each(function (index, element) {
                            if ($(element)[0].checked === true) {
                                $(element).closest("." + optVals.tableRowClass).remove();
                            }
                        })
                    });
                    $(this).find("table thead").bind("change", optVals.checkBoxSel, function (e) {
                        var src = e.target;
                        var chkbox = $(that).find("table tbody").find(optVals.checkBoxSel);
                        if (src.checked === true) {
                            $(chkbox).each(function (index, element) {
                                $(element)[0].checked = true;
                            });
                        } else {
                            $(chkbox).each(function (index, element) {
                                $(element)[0].checked = false;
                            });
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
        initRows: function (options) {
            var $this = $(this);
            var that = this;
            var optvals = $this.data($.fn.jqSimpleTable.constVal.dataName);
            optvals = $.extend({}, optvals, options);
            var tableTmp = $(optvals.tableTmpSel + " ." + optvals.tableRowClass);
           // var tableTmpClone = $(tableTmp).clone(true);
            $.ajax({
                url: optvals.initUrl,
                type: "post",
                data: optvals.data,
                async: true,
                dataType: "json",
                success: function (rsdata, textStatus) {//数据保存成功后调用的函数
                    if (rsdata) {
                        for (var ri = 0; ri < rsdata.rows.length; ri++) {
                            var rowData = rsdata.rows[ri];
                            var cloneRow = $(tableTmp).clone(true);
                            $(that).find("table tbody").append(cloneRow);
                            MyTools.fillDateToHtml({
                                content: cloneRow,
                                data: rowData
                            }
                            );
                        }
                    }
                },
                error: function (xhr, textStatus, ex) {
                    // alert("inerr:" + textStatus);
                },
                complete: function (xhr, textStatus) {
                    //alert("incomplete:" + textStatus);
                }
            });
        },
        initRowsByList: function (options) {
            var $this = $(this);
            var that = this;
            var optvals = $this.data($.fn.jqSimpleTable.constVal.dataName);
            optvals = $.extend({}, optvals, options);
            var tableTmp = $(optvals.tableTmpSel + " ." + optvals.tableRowClass);
            
            for (var ri = 0; ri < optvals.rows.length; ri++) {
                var rowData = optvals.rows[ri];
                var cloneRow = $(tableTmp).clone(true);
                $(that).find("table tbody").append(cloneRow);
                MyTools.fillDateToHtml({
                    content: cloneRow,
                    data: rowData
                }
                );
            }
        }
    };

    $.fn.jqSimpleTable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' 方法在$.fn.hstabs中不存在。');
        }
    };
    $.fn.jqSimpleTable.newCount = 1;
    $.fn.jqSimpleTable.defVal = {
        tableTmpSel: "#table-tmp",
        tableRowClass: "table-row",
        rowCellSel: "td",
        checkBoxSel: "[chk-status]",
        addBtnSel: "#add-row-btn",
        delBtnSel: "#del-row-btn",
        titleAttr: "data-title",
        initUrl: "./BootStrapTable.action"
    };
    $.fn.jqSimpleTable.constVal = {
        dataName: "simple-table-plug-in"
    }
    $.fn.jqSimpleTable.verInfor = {
        version: "1.0000",
        verdate: "2015-06-01",
        verauthor: "lwt"
    };

})(jQuery);


