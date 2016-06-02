/*
 * BmsMenu.java
 * Copyright(C) 2016 dc com.dc公司
 * All rights reserved.
 * --------------------------------------------
 * 2016-05-30 Created
 */
package com.dc.bms.web.domain;

/**
 * bms_menu
 * 
 * @author Administrator
 */
public class BmsMenu {
    /**
     *自增id
     */
    private Long id;

    /**
     *上级菜单id（0为根节点）
     */
    private Long pmenuid;
    
    private BmsMenu parentMenu;

    /**
     *菜单名
     */
    private String name;

    /**
     *菜单链接
     */
    private String uri;

    /**
     *排序字段
     */
    private Long disorder;

    /**
     *层级（从1开始，1为第一层）
     */
    private Long rank;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPmenuid() {
        return pmenuid;
    }

    public void setPmenuid(Long pmenuid) {
        this.pmenuid = pmenuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri == null ? null : uri.trim();
    }

    public Long getDisorder() {
        return disorder;
    }

    public void setDisorder(Long disorder) {
        this.disorder = disorder;
    }

    public Long getRank() {
        return rank;
    }

    public void setRank(Long rank) {
        this.rank = rank;
    }

	public BmsMenu getParentMenu() {
		return parentMenu;
	}

	public void setParentMenu(BmsMenu parentMenu) {
		this.parentMenu = parentMenu;
	}
}