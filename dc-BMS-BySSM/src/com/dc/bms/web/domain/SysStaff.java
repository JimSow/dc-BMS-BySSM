/*
 * SysStaff.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_staff
 * 
 * @author Administrator
 */
public class SysStaff {
    /**
     *自增id
     */
    private Long id;

    /**
     *名称
     */
    private String name;

    /**
     *性别（0代表女，1代表男）
     */
    private Boolean sex;

    /**
     *电话
     */
    private String phone;

    /**
     *所属组织
     */
    private Long orgid;

    /**
     *职位id
     */
    private Long positionid;

    /**
     *地址
     */
    private String address;

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

    public Boolean getSex() {
        return sex;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Long getOrgid() {
        return orgid;
    }

    public void setOrgid(Long orgid) {
        this.orgid = orgid;
    }

    public Long getPositionid() {
        return positionid;
    }

    public void setPositionid(Long positionid) {
        this.positionid = positionid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }
}