package com.dc.bms.web.dao.Impl;



import org.springframework.stereotype.Component;

import com.dc.bms.sys.MybatisDaoBase;
import com.dc.bms.web.dao.SysUsersDao;
import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.SysUsers;


@Component
public class SysUsersDaoImpl extends MybatisDaoBase<SysUsersDaoImpl> implements SysUsersDao {

	@Override
	public int deleteById(Long id) {
		openSession().delete("sysUsers.deleteById",id);
		return 0;
	}

	@Override
	public int insert(SysUsers record) {
		this.sqlSession.insert("sysUsers.insert",record);
		return 0;
	}

	@Override
	public SysUsers selectById(Long id) {
		SysUsers u = openSession().selectOne("sysUsers.selectById",id);
		return u;
	}

	@Override
	public int updateById(SysUsers record) {
		openSession().insert("sysUsers.updateById",record);
		return 0;
	}

	@Override
	public Account getAccountByLoginName(String loginName) {
		Account ac = openSession().selectOne("sysUsers.getAccountByLoginName",loginName);
		return ac;
	}

}
