/*
 * SysResource.java
 * Copyright(C) 2016 dc com.dc��˾
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
     *����id
     */
    private Long id;

    /**
     *�ϼ�id
     */
    private Long pid;

    /**
     *��Դ����
     */
    private String name;

    /**
     *��Դ�ַ���
     */
    private String resourcestr;

    /**
     *�����ֶ�
     */
    private Long disorder;

    /**
     *����
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