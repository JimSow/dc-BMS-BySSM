package com.dc.bms.web.service;

import com.dc.bms.web.domain.SysUsers;

public interface ILoginService{

	int deleteById(Long id);

    int insert(SysUsers record);

    SysUsers selectById(Long id);

    int updateById(SysUsers record);
}
