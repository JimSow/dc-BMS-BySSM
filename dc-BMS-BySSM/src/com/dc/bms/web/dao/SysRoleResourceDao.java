/*
 * SysRoleResourceDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.SysRoleResource;

public interface SysRoleResourceDao {
    int deleteById(Long id);

    int insert(SysRoleResource record);

    SysRoleResource selectById(Long id);

    int updateById(SysRoleResource record);
}