package com.dc.bms.web.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dc.bms.sys.ControllerBase;
import com.dc.bms.web.domain.Account;
import com.dc.bms.web.service.ISysUsersService;
import com.dc.bms.web.viewobj.CommonBsnsServResult;
import com.dc.bms.web.viewobj.CommonResultVO;
import com.dc.internal.util.Messages;

@Controller
@RequestMapping("/login")
public class LoginController extends ControllerBase {

	@Resource(name = "sysUsersServiceImpl")
	private ISysUsersService sysUsersServiceImpl;

	/**
	 * 登录
	 * 
	 * @return
	 */
	@RequestMapping(params = { "method=index" }, method = RequestMethod.POST)
	public ModelAndView postForm(HttpServletRequest request, Account account, String code, HttpSession session) {
		ModelAndView mv = this.getModelAndView();

		String validateC = (String) session.getAttribute("validateCode");
		account.encryptPass();
		
		CommonResultVO vo = null;
		if (validateC != null && validateC.equalsIgnoreCase(code)) {
			Account existsAccount = sysUsersServiceImpl.getAccountByLoginName(account.getLoginName());
			if (existsAccount != null) {

				
				
				mv.setViewName("mainPage");
			}else{
				vo = new CommonResultVO(new CommonBsnsServResult(Messages.getString("AccountNotExist", account.getLoginName()),false));
				mv.addObject("loginResult", vo);
				mv.setViewName("login");
			}
		} else {
			vo = new CommonResultVO(new CommonBsnsServResult(Messages.getString("VerificationCodeError"),false));
			mv.addObject("loginResult", vo);
			mv.setViewName("login");
		}
		return mv;
	}
}
