/*
 * SysUsersDao.java
 * Copyright(C) 2016 dc com.dc��˾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.SysUsers;

public interface SysUsersDao {
    int deleteById(Long id);

    int insert(SysUsers record);

    SysUsers selectById(Long id);

    int updateById(SysUsers record);
    
    
    // add
    Account getAccountByLoginName(String loginName);
}