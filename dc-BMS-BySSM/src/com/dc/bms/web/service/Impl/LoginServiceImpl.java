package com.dc.bms.web.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dc.bms.web.dao.SysUsersDao;
import com.dc.bms.web.domain.SysUsers;
import com.dc.bms.web.service.ILoginService;

@Service("loginServiceImpl")
public class LoginServiceImpl implements ILoginService{

	@Autowired
	private SysUsersDao sysUsersDaoImpl;
	
	@Override
	public int deleteById(Long id) {
		sysUsersDaoImpl.deleteById(id);
		return 0;
	}

	@Override
	public int insert(SysUsers record) {
		return sysUsersDaoImpl.insert(record);
	}

	@Override
	public SysUsers selectById(Long id) {
		SysUsers u = sysUsersDaoImpl.selectById(id);
		return u;
	}

	@Override
	public int updateById(SysUsers record) {
		sysUsersDaoImpl.updateById(record);
		return 0;
	}

}
