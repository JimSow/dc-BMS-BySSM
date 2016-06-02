/*
 * BmsUser.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-30 Created
 */
package com.dc.bms.web.domain;

/**
 * bms_user
 * 
 * @author Administrator
 */
public class BmsUser {
    /**
     *
     */
    private Long id;

    /**
     *
     */
    private String name;

    /**
     *
     */
    private Integer age;

    /**
     *
     */
    private String address;

    /**
     *
     */
    private String email;

    /**
     *
     */
    private String loginname;

    /**
     *
     */
    private String password;

    /**
     *
     */
    private String phone;

    /**
     *对应SYS_USER表中的id
     */
    private Long userid;
    
    private SysUsers user;

    /**
     *员工id
     */
    private Long staffid;
    
    private SysStaff staff;

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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getLoginname() {
        return loginname;
    }

    public void setLoginname(String loginname) {
        this.loginname = loginname == null ? null : loginname.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getStaffid() {
        return staffid;
    }

    public void setStaffid(Long staffid) {
        this.staffid = staffid;
    }

	public SysStaff getStaff() {
		return staff;
	}

	public void setStaff(SysStaff staff) {
		this.staff = staff;
	}

	public SysUsers getUser() {
		return user;
	}

	public void setUser(SysUsers user) {
		this.user = user;
	}
}