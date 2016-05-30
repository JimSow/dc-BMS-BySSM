<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<!DOCTYPE html>
<html lang="en">
    <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

        <link rel="stylesheet" href="./assets/css/jquery/validationEngine.jquery.css">
        <link rel="stylesheet" href="./assets/css/hscss.css">
        <!--加载js-->
        <script src="./assets/js/jquery/jquery1x.js"></script>
        <script src="./assets/js/jquery/jquery.validationEngine-zh_CN.js"></script> 
        <script src="./assets/js/jquery/jquery.validationEngine.js"></script> 
        <title>登录</title>
        <style>
            .formError .formErrorContent {
                position: relative;
                width: 100%;
                min-width: 120px;
                padding: 4px 10px;
                border: 1px solid #ddd;
                border-radius: 0px; 
                background-color: #ee0101;
                box-shadow: 0 0 2px #000;
                color: #fff;
                font: 12px/18px "\5b8b\4f53",Tahoma;
            }
        </style>
    </head>
    <body >
        <div class="hs-login-bg"></div>
        <div class="hs-login-content">
            <div class="hs-login-panel-bar" >
                
            </div>
            <div style="display:none;">
                <span class="hs-col-4 hs-red"></span><span class="hs-col-4 hs-green"></span><span class="hs-col-4 hs-blue"></span><span class="hs-col-4 hs-yellow"></span>
            </div>
            <div class="hs-login-panel">
                <form method="post" id="login-form" action="login?method=index">
                    <div class="hs-longin-err">
                    	<c:if test="${!empty loginResult}">登录失败：${loginResult.msg}</c:if>
                    </div>
                    <div>
                        <div>
                            <label class="hs-display-none" for="login-name">登录名：</label>
                            <span class="hs-login-span hs-login-name-span">
                                <input id="login-name" name="loginName" type="text" class="validate[required] hs-login-input" placeholder="编号/用户名称/邮箱/手机号码">
                            </span>
                        </div> 
                        <div>
                            <label class="hs-display-none" for="pass-word">密码：</label>
                            <span class="hs-login-span hs-login-password-span">
                                <input id="pass-word" name="passWord" type="password" class="validate[required] hs-login-input" placeholder="密码">
                            </span>
                        </div> 
                        <div>
							<label class="hs-display-none" for="code">验证码：</label>
							<span class="hs-login-span hs-login-password-span">
							<input type="text" name="code" id="code" class="validate[required]" style="height:25px;vertical-align:top;" size="10px"  placeholder="验证码"/>
							<img style="height:30px;" id="codeImg" alt="点击更换" title="点击更换" src="" />
							</span>
						</div>
                    </div>
                    <div><input class="hs-submit-btn" type="button" id="submit-button" value="登录"></div>
                </form> 
            </div>
        </div>

        <script>
            $(document).ready(function (e) {
                $("#login-form").validationEngine({
                	promptPosition:"topLeft"
                });
                $("#submit-button").bind("click", function (e) {
                    e.preventDefault();
                    $("#submit-button").val("开始验证...");
                    var res = $("#login-form").validationEngine('validate');
                    if (res === true) {
                       $("#submit-button").val("正在登录...");
                       $("#login-form").submit();
                    } else if (res === false){
                         $("#submit-button").val("登录");
                    }
                });
                changeCode();
    			$("#codeImg").bind("click", changeCode);
            }); 
            function genTimestamp() {
    			var time = new Date();
    			return time.getTime();
    		}

    		function changeCode() {
    			$("#codeImg").attr("src", "verify?method=verifyCode&t=" + genTimestamp());
    		}
    		//按回车执行登录操作
    	      document.onkeydown=function(event){
    	            var e = event || window.event || arguments.callee.caller.arguments[0];
    	           /*  if(e && e.keyCode==27){ // 按 Esc 
    	              }
    	            if(e && e.keyCode==113){ // 按 F2 
    	               }    */         
    	             if(e && e.keyCode==13){ // enter 键
    	               $('#login-form').submit();
    	            }
    	        }; 
        </script>
    </body>
</html>