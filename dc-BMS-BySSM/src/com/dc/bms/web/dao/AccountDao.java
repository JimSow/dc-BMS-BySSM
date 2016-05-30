package com.dc.bms.web.dao;

import com.dc.bms.web.domain.Account;

public interface AccountDao {
	Account getAccountByLoginName(String loginName);
}
