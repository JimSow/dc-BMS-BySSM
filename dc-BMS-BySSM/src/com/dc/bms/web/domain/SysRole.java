/*
 * SysRole.java
 * Copyright(C) 2016 dc com.dc��˾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_role
 * 
 * @author Administrator
 */
public class SysRole {
    /**
     *����id
     */
    private Long id;

    /**
     *��ɫ����
     */
    private String name;

    /**
     *��ɫ����
     */
    private String memo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo == null ? null : memo.trim();
    }
}