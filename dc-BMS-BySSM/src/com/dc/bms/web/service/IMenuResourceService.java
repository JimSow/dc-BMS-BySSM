package com.dc.bms.web.service;

import java.util.List;

import com.dc.bms.web.domain.BmsMenu;



/**
 * 基于权限系统的菜单相关服务
 */
public interface IMenuResourceService {

	/**
	 * 获取某个用户有权限的所有菜单
	 * 
	 * @param userId
	 * @return
	 */
	List<BmsMenu> getAllMenusForUser(String userId);

	/**
	 * 添加菜单的时候也添加菜单相关的资源, 但是有的菜单不认为是一种资源，比如中间不可点击的菜单。
	 * 
	 * @param menu
	 * @param addResourceByMenu
	 *            true:同时也添加资源 false:菜单不认为是一种资源，不添加资源
	 * @throws Throwable
	 */
	void addMenu(BmsMenu menu, boolean addResourceByMenu) throws Throwable;

}
