/*
 * SysUserRoleDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.SysUserRole;

public interface SysUserRoleDao {
    int deleteById(Long id);

    int insert(SysUserRole record);

    SysUserRole selectById(Long id);

    int updateById(SysUserRole record);
}