/*
 * BmsMenuDao.java
 * Copyright(C) 2016 dc com.dc¹«Ë¾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-30 Created
 */
package com.dc.bms.web.dao;

import java.util.List;

import com.dc.bms.web.domain.BmsMenu;

public interface BmsMenuDao {
    int deleteById(Long id);

    int insert(BmsMenu record);

    BmsMenu selectById(Long id);

    int updateById(BmsMenu record);
    
    
    // add
    List<BmsMenu> getMenuListByAll();
}