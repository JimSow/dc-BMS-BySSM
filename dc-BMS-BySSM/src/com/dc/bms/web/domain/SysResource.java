/*
 * SysResource.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-20 Created
 */
package com.dc.bms.web.domain;

/**
 * sys_resource
 * 
 * @author Administrator
 */
public class SysResource {
    /**
     *自增id
     */
    private Long id;

    /**
     *上级id
     */
    private Long pid;

    /**
     *资源名称
     */
    private String name;

    /**
     *资源字符串
     */
    private String resourcestr;

    /**
     *排序字段
     */
    private Long disorder;

    /**
     *描述
     */
    private String memo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getResourcestr() {
        return resourcestr;
    }

    public void setResourcestr(String resourcestr) {
        this.resourcestr = resourcestr == null ? null : resourcestr.trim();
    }

    public Long getDisorder() {
        return disorder;
    }

    public void setDisorder(Long disorder) {
        this.disorder = disorder;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo == null ? null : memo.trim();
    }
}