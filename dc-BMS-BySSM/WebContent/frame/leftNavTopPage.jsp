<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body><!--侧边栏顶部的小按钮控件-->
        <div class="sidebar-shortcuts" id="sidebar-shortcuts">
            <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                <button class="btn btn-success">1
                    <i class="ace-icon fa fa-signal">1-</i>
                </button>
                <button class="btn btn-info">2
                    <i class="ace-icon fa fa-pencil">2-</i>
                </button>
                <button class="btn btn-warning">3
                    <i class="ace-icon fa fa-users">3-</i>
                </button>
                <button class="btn btn-danger">4
                    <i class="ace-icon fa fa-cogs">4-</i>
                </button>
            </div>

            <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                <span class="btn btn-success"></span>
                <span class="btn btn-info"></span>
                <span class="btn btn-warning"></span>
                <span class="btn btn-danger"></span>
            </div>
        </div><!-- /.sidebar-shortcuts -->
        <!--各个部件是否是fixed样式的选择框-->
        <div style="display: none;">
            <div class="ace-settings-item">
                <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-navbar" />
                <label class="lbl" for="ace-settings-navbar">固定顶部导航栏</label>
            </div>
            <div class="ace-settings-item">
                <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-sidebar" />
                <label class="lbl" for="ace-settings-sidebar">固定侧边导航栏</label>
            </div>
            <div class="ace-settings-item">
                <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
                <label class="lbl" for="ace-settings-breadcrumbs">固定tabs标签栏</label>
            </div>
        </div>
    </body>
</html>
