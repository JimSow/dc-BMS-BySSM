/*
 * SysUserRole.java
 * Copyright(C) 2016 dc com.dc��˾
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_user_role
 * 
 * @author Administrator
 */
public class SysUserRole {
    /**
     *����id
     */
    private Long id;

    /**
     *�û�id
     */
    private Long userid;
    
    private SysUsers sysUsers;

    /**
     *��ɫid
     */
    private Long roleid;
    
    private SysRole sysRole;

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

    public Long getRoleid() {
        return roleid;
    }

    public void setRoleid(Long roleid) {
        this.roleid = roleid;
    }

	public SysUsers getSysUsers() {
		return sysUsers;
	}

	public void setSysUsers(SysUsers sysUsers) {
		this.sysUsers = sysUsers;
	}

	public SysRole getSysRole() {
		return sysRole;
	}

	public void setSysRole(SysRole sysRole) {
		this.sysRole = sysRole;
	}
}