/*
 * SysUserResource.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_user_resource
 * 
 * @author Administrator
 */
public class SysUserResource {
    /**
     *自增主键
     */
    private Long id;

    /**
     *用户id
     */
    private Long userid;

    /**
     *权限id
     */
    private Long resourceid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getResourceid() {
        return resourceid;
    }

    public void setResourceid(Long resourceid) {
        this.resourceid = resourceid;
    }
}