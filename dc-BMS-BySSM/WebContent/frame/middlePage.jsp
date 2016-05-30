<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <!-- /section:basics/navbar.layout -->
        <div class="main-container" id="main-container">
            <script type="text/javascript">
                try {
                    ace.settings.check('main-container', 'fixed')
                } catch (e) {
                }
            </script>
            <!-- #section:basics/sidebar -->
            <div id="sidebar" class="sidebar responsive"> 
                <jsp:include page="leftNavTopPage.jsp"></jsp:include>
                <jsp:include page="leftNavPage.jsp"></jsp:include>
            </div>
            <!-- /section:basics/sidebar -->
            <div class="main-content">
                <div class="main-content-inner">
                    <!-- #section:basics/content.breadcrumbs -->
                    <div class="breadcrumbs" id="breadcrumbs">
                        <script type="text/javascript">
                            try {
                                ace.settings.check('breadcrumbs', 'fixed')
                            } catch (e) {
                            }
                        </script>
                        <div class="hs-tabs-view-port-content" id="hs-tabs-view-port-content">
                        	<ul class="hs-tabs-view-port" id="hs-tabs-view-port">
                        	</ul>                        	
                        </div>
                    </div>    
                    <!-- /section:basics/content.breadcrumbs -->
                    <div class="page-content">
                        <!--<div id="home-page">这是首页</div>-->
                    </div><!-- /.page-content -->
                    <div id="warn-show"></div>
	                <div id="warn-tmp" style="display:none">
		                <div class="user_notice alert" role="alert">
			                <div class="title">
			                	消息
				            	<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>      	
			                </div>	            	
			            	<div class="warn-msg">
			            	</div>
			            </div>
	            	</div>
                </div>
            </div><!-- /.main-content -->
            <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
                <i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
            </a>
        </div><!-- /.main-container -->
         <script src="./assets/js/jquery.js"></script>
     <script src="./assets/js/bootstrap.js"></script>  
     <script src="./assets/js/jquery-ui.js"></script>   
    <script type="text/javascript">
    	$(document).ready(function(e){
    		storageWarning();
    		//setTimeout(storageWarning,3000);
    	});
    	var ajaxdata;
    	function storageWarning(){
    		$.ajax({
                url: "storage/Warning",
                type: "post",
                data: null, 
                async: true,
                dataType: "json",
                success: function (data,textStatus) {//数据保存成功后调用的函数
                   /*  if(data.length>0){
		                for(var i=0;i<data.length;i++){	 
		                	 setTimeout(function(data){alert("库存预警:"+data[i].product.name)},5000);
		                	alert(data[i].product.name); 
		                	
		                }
                    } */
                    ajaxdata=data;
					
                },
                error: function (xhr, textStatus, ex) {
                	showWarn("预警失败", "库存预警出问题啦！")
                },
                complete: function (xhr, textStatus) {
                    //alert("incomplete:" + textStatus);
                }
            });
    	}
    	/* function showWarn(alertClass, alertInfor) {
    		var idStr = Math.round(Math.random() * 100000000);
    		if(idStr){
    		//	$(".user_notice").alert('close');
    		}
    		$("#" + idStr).alert('close');
    		$("#" + idStr).alert();
    		$("#warn-show").html(" ");
    	    var alertTmp = "#warn-tmp .alert";
    	    var cloneTmp = $(alertTmp).clone(true);
    	    $(cloneTmp).addClass(alertClass);
    	    $(cloneTmp).find(".warn-msg").html(alertInfor);    	 
    	    idStr = idStr + "-clone";
    	    $(cloneTmp).attr("id", idStr);
    	    $("#warn-show").append(cloneTmp);
    	    setTimeout(function (e) {
    	        $("#" + idStr).alert('close');
    	    }, 50000);
    	} */
    	var i=0;
    	var timer=setInterval( "showWarn(ajaxdata)" , 1000);
    	function showWarn(data) {
    		//console.log(data);
    		if(data[i]&&i<=data.length){
    			var idStr = Math.round(Math.random() * 100000000);
    	    	//	$("#" + idStr).alert('close');
    	    		$("#warn-show").html(" ");
    	    	    var alertTmp = "#warn-tmp .alert";
    	    	    var cloneTmp = $(alertTmp).clone(true);
    	    //	    $(cloneTmp).addClass(alertClass);
    	    		if(data[i].product.maximum < data[i].assetsAmmount){
    	    			$(cloneTmp).find(".warn-msg").html("库存预警：产品"+data[i].product.name+"，库存超额，库存量为："+data[i].assetsAmmount+data[i].product.measureName); 
    	    		}else if(data[i].product.minimum > data[i].assetsAmmount){
    	    			$(cloneTmp).find(".warn-msg").html("库存预警：产品"+data[i].product.name+"，库存不足，库存量为："+data[i].assetsAmmount+data[i].product.measureName); 
    	    		}
    	    		//$(cloneTmp).find(".warn-msg").html(data[i].product.name);  	 
    	    	    idStr = idStr + "-clone";
    	    	    $(cloneTmp).attr("id", idStr);
    	    	    $("#warn-show").append(cloneTmp);
    	    	    if(i<data.length-1){
    	    	    	setTimeout(function(){
        	    	    	$("#" + idStr).alert('close');
        	    	    },500)
    	    	    }else{
    	    	    	setTimeout(function(){
        	    	    	$("#" + idStr).alert('close');
        	    	    },50000)
    	    	    }  	    	    
    		}
			i++;
			if(i>data.length){
				clearInterval(timer);
			}

    	}
    </script>
    </body>
</html>
