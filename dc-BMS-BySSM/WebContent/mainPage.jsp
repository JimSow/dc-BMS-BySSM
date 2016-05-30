<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>后台管理系统框架页</title>
        <!-- bootstrap & fontawesome ./代表当前目录下-->
        <link rel="stylesheet" href="./assets/css/bootstrap/bootstrap.css" />
        <link rel="stylesheet" href="./assets/css/font-awesome.css" />
        <link rel="stylesheet" href="./assets/css/jquery/jquery-confirm.min.css" />
        <!-- text fonts -->
        <link rel="stylesheet" href="./assets/css/ace/ace-fonts.css" />
        <!-- ace styles -->
        <link rel="stylesheet" href="./assets/css/ace/ace.css" class="ace-main-stylesheet" id="main-ace-style" />
        <link rel="stylesheet" href="./assets/css/hscss.css" />
        <script src="./assets/js/ace/ace-extra.js"></script>
      
    </head>

    <body class="no-skin">
        <jsp:include page="./frame/topNavPage.jsp"/>
        <jsp:include page="./frame/middlePage.jsp"/>
       	<!-- basic scripts -->
        <script src="./assets/js/jquery/jquery.js"></script>
        <script src="./assets/js/jquery/jquery.mobile.custom.js"></script>
        <script src="./assets/js/jquery/jquery-ui.js"></script>
        <script src="./assets/js/bootstrap/bootstrap.js"></script>
        <script src="./assets/js/jquery/jquery-confirm.min.js"></script>
        <script src="./assets/js/ace/elements.scroller.js"></script>
        <script src="./assets/js/ace/ace.js"></script>
        <script src="./assets/js/ace/ace.sidebar.js"></script>
        <script src="./assets/js/ace/ace.sidebar-scroll-1.js"></script>
        <script src="./assets/js/ace/ace.submenu-hover.js"></script>
        <script src="./assets/js/ace/ace.widget-box.js"></script>
        <script src="./assets/js/ace/ace.settings.js"></script>
        <script src="./assets/js/jqNavtabs.js"></script>
        <script src="./assets/js/mainPage-config.js"></script>
        <script src="./assets/js/mainPageJs.js"></script> 
        <script type="text/javascript">
            jQuery(function ($) {
                var settingIds=["ace-settings-navbar","ace-settings-sidebar","ace-settings-breadcrumbs"];
                for(var si=0;si<settingIds.length;si++){
                    var settingId=settingIds[si];
                    var isChecked=$("#"+settingId).attr("checked");
                    if(isChecked!==true){
                        $("#"+settingId).trigger("click");
                    }
                }
            });
        </script>
    </body>
</html>
