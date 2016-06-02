package com.dc.bms.web.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dc.bms.web.domain.BmsMenu;
import com.dc.bms.web.service.IBmsMenuService;
import com.dc.bms.web.service.IMenuResourceService;

public class MenuResourceServiceImpl implements IMenuResourceService {

	@Autowired
	private IBmsMenuService bmsMenuService;
	
	@Override
	public List<BmsMenu> getAllMenusForUser(String userId) {
		List<BmsMenu> allMenus = bmsMenuService.getMenuListByAll();//获取全部菜单列表
		
		
		return null;
	}

	@Override
	public void addMenu(BmsMenu menu, boolean addResourceByMenu) throws Throwable {
		// TODO Auto-generated method stub

	}

}
