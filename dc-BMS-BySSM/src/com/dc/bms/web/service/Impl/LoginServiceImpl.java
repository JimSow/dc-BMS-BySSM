package com.dc.bms.web.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dc.bms.web.dao.SysUsersDao;
import com.dc.bms.web.domain.SysUsers;
import com.dc.bms.web.service.ILoginService;

@Service("loginServiceImpl")
public class LoginServiceImpl implements ILoginService{

	@Autowired
	private SysUsersDao sysUsersDao;
	
	@Override
	public int deleteById(Long id) {
		sysUsersDao.deleteById(id);
		return 0;
	}

	@Override
	public int insert(SysUsers record) {
		return sysUsersDao.insert(record);
	}

	@Override
	public SysUsers selectById(Long id) {
		SysUsers u = sysUsersDao.selectById(id);
		return u;
	}

	@Override
	public int updateById(SysUsers record) {
		sysUsersDao.updateById(record);
		return 0;
	}

}
