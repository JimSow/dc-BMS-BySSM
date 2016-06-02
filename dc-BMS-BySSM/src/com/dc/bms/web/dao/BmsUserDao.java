/*
 * BmsUserDao.java
 * Copyright(C) 2016 dc com.dc��˾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-30 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.Account;
import com.dc.bms.web.domain.BmsUser;

public interface BmsUserDao {
    int deleteById(Long id);

    int insert(BmsUser record);

    BmsUser selectById(Long id);

    int updateById(BmsUser record);
    
    // add
    BmsUser getBmsUserByAccount(Account account);
}