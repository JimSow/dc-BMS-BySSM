package com.dc.bms.web.dao.Impl;

import java.util.List;

import com.dc.bms.sys.MybatisDaoBase;
import com.dc.bms.web.dao.BmsMenuDao;
import com.dc.bms.web.domain.BmsMenu;

public class BmsMenuDaoImpl extends MybatisDaoBase<BmsMenuDaoImpl> implements BmsMenuDao {

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
		List<BmsMenu> list = openSession().selectList("bmsMenu.getMenuListByAll");
		return list;
	}

}
