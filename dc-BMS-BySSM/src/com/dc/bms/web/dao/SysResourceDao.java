/*
 * SysResourceDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.dao;

import com.dc.bms.web.domain.SysResource;

public interface SysResourceDao {
    int deleteById(Long id);

    int insert(SysResource record);

    SysResource selectById(Long id);

    int updateById(SysResource record);
}