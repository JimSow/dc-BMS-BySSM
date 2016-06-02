/*
 * SysRoleResource.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_role_resource
 * 
 * @author Administrator
 */
public class SysRoleResource {
    /**
     *自增id
     */
    private Long id;

    /**
     *角色id
     */
    private Long roleid;
    
    private SysRole sysRole;

    /**
     *资源id
     */
    private Long resourceid;
    
    private SysResource sysResource;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoleid() {
        return roleid;
    }

    public void setRoleid(Long roleid) {
        this.roleid = roleid;
    }

    public Long getResourceid() {
        return resourceid;
    }

    public void setResourceid(Long resourceid) {
        this.resourceid = resourceid;
    }

	public SysRole getSysRole() {
		return sysRole;
	}

	public void setSysRole(SysRole sysRole) {
		this.sysRole = sysRole;
	}

	public SysResource getSysResource() {
		return sysResource;
	}

	public void setSysResource(SysResource sysResource) {
		this.sysResource = sysResource;
	}
}