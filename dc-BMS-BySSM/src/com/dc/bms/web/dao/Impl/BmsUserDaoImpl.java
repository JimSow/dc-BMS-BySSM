package com.dc.bms.web.dao.Impl;

import com.dc.bms.sys.MybatisDaoBase;
import com.dc.bms.web.dao.BmsUserDao;
import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.BmsUser;

public class BmsUserDaoImpl extends MybatisDaoBase<BmsUserDaoImpl> implements BmsUserDao {

	@Override
	public int deleteById(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int insert(BmsUser record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public BmsUser selectById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateById(BmsUser record) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public BmsUser getBmsUserByAccount(Account account) {
		BmsUser u = openSession().selectOne("bmsUser.getBmsUserByAccount",account);
		return u;
	}

}
