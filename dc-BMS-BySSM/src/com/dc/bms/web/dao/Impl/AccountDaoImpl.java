package com.dc.bms.web.dao.Impl;

import com.dc.bms.sys.MybatisDaoBase;
import com.dc.bms.web.dao.AccountDao;
import com.dc.bms.web.domain.Account;

public class AccountDaoImpl extends MybatisDaoBase<AccountDaoImpl> implements AccountDao {

	@Override
	public Account getAccountByLoginName(String loginName) {
		Account ac = openSession().selectOne("sysUsers.getAccountByLoginName",loginName);
		return ac;
	}

}
