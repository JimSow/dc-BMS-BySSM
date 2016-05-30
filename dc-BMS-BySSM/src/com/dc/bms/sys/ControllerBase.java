package com.dc.bms.sys;

import javax.annotation.Resource;

import org.springframework.web.servlet.ModelAndView;


/**
 * 基于spring-mvc的controller基类。子类通过继承，获得其中的工具方法
 */
public abstract class ControllerBase {

//	@Resource(name = "sessionService")
//	protected SessionService sessionService;

	/**
	 * 得到ModelAndView
	 */
	protected ModelAndView getModelAndView() {
		return new ModelAndView();
	}

}
