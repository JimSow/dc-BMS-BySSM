package com.dc.bms.web.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dc.bms.sys.ControllerBase;
import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.BmsUser;
import com.dc.bms.web.service.IBmsMenuService;
import com.dc.bms.web.service.IBmsUserService;
import com.dc.bms.web.service.IMenuResourceService;
import com.dc.bms.web.service.ISysUsersService;
import com.dc.bms.web.viewobj.CBsnsServResult;
import com.dc.bms.web.viewobj.CommonResultVO;
import com.dc.util.Messages;

@Controller
@RequestMapping("/login")
public class LoginController extends ControllerBase {

	private Logger logger = Logger.getLogger(LoginController.class);
	
	@Resource(name = "sysUsersService")
	private ISysUsersService sysUsersService;
	
	@Resource(name = "bmsUserService")
	private IBmsUserService bmsUserService;
	
	@Resource(name = "bmsMenuService")
	private IBmsMenuService bmsMenuService;
	
	@Resource(name = "menuResourceService")
	private IMenuResourceService menuResourceService;
	

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
			Account existsAccount = sysUsersService.getAccountByLoginName(account.getLoginName());
			if (existsAccount != null) {
				BmsUser bmsUser = bmsUserService.getBmsUserByAccount(existsAccount);
				logger.debug(bmsUser);
				session.setAttribute("bmsUser", bmsUser);
				
				// 获取用户菜单
				String userId = bmsUser.getUser().getId().toString();
				
				
				
				mv.setViewName("mainPage");
			}else{
				vo = new CommonResultVO(new CBsnsServResult(Messages.getString("AccountNotExist", account.getLoginName()),false));
				mv.addObject("loginResult", vo);
				mv.setViewName("login");
			}
		} else {
			vo = new CommonResultVO(new CBsnsServResult(Messages.getString("VerificationCodeError"),false));
			mv.addObject("loginResult", vo);
			mv.setViewName("login");
		}
		return mv;
	}
}
