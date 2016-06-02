package com.dc.bms.web.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.dc.bms.web.dao.BmsUserDao;
import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.BmsUser;
import com.dc.bms.web.service.IBmsUserService;

public class BmsUserServiceImpl implements IBmsUserService {

	@Autowired
	private BmsUserDao bmsUserDao;
	
	
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
		BmsUser u = bmsUserDao.getBmsUserByAccount(account);
		return u;
	}

}
