/*
 * SysUserResourceDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.SysUserResource;

public interface SysUserResourceDao {
    int deleteById(Long id);

    int insert(SysUserResource record);

    SysUserResource selectById(Long id);

    int updateById(SysUserResource record);
}