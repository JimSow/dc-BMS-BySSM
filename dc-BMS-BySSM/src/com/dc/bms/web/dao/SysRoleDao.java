/*
 * SysRoleDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.SysRole;

public interface SysRoleDao {
    int deleteById(Long id);

    int insert(SysRole record);

    SysRole selectById(Long id);

    int updateById(SysRole record);
}