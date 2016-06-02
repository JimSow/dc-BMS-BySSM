package com.dc.bms.web.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.dc.bms.web.dao.Impl.BmsMenuDaoImpl;
import com.dc.bms.web.domain.BmsMenu;
import com.dc.bms.web.service.IBmsMenuService;

public class BmsMenuServiceImpl  implements IBmsMenuService {

	@Autowired
	private BmsMenuDaoImpl bmsMenuDao;
	
	@Override
	public int deleteById(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(BmsMenu record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public BmsMenu selectById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateById(BmsMenu record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<BmsMenu> getMenuListByAll() {
		List<BmsMenu> mu = bmsMenuDao.getMenuListByAll();
		return mu;
	}
}
