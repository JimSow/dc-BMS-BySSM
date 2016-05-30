package test;

import static org.junit.Assert.*;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.dc.bms.web.domain.SysUsers;
import com.dc.bms.web.service.ILoginService;
import com.dc.internal.util.EncryptUtil;



public class LoginControllerTest extends TestBase{

	
	Logger logger = Logger.getLogger(LoginControllerTest.class);
	
	@Autowired
	private ILoginService loginServiceImpl;
	
	/**
	@Before(value="")
	public void before(){                                                                    
		ApplicationContext context = new ClassPathXmlApplicationContext(
				new String[]{"classpath:spring.xml",
							"classpath:spring-mybatis.xml",
							"classpath:spring-configuration.xml.xml",
							"classpath:spring-bean.xml"});
		loginServiceImpl = (LoginServiceImpl) context.getBean("loginServiceImpl");
	}**/
	
	
	@Test
	public void addSysUser(){
		
		SysUsers u = new SysUsers();
		
		u.setName("超级管理员");
		u.setAge(100);
		u.setEmail("377851762@qq.com");
		u.setAddress("丹桂街19号");
		u.setLoginname("admin");
//		u.setPassword("admin");
		u.setPassword(EncryptUtil.encrypt("admin"));
		
		loginServiceImpl.insert(u);
//		sysUsersDao.insert(u);
//		logger.trace("----------trace-------����");
//		logger.debug("----------debug-------����");
//		logger.error("----------error-------����");
//		logger.fatal("----------fatal-------����");
	}
	
	@Test
	public void deleteSysUser(){
		
		loginServiceImpl.deleteById(Long.valueOf("1"));
		
		System.out.println("---->");
	}
	
	
	@Test
	public void updateSysUser(){
		
		SysUsers u = new SysUsers();
		u.setId(Long.valueOf("3"));
		u.setName("~~��������Ա");
		u.setAge(100);
		u.setEmail("377851762@qq.com");
		u.setAddress("�����19��");
		u.setLoginname("admin");
		u.setPassword("admin");
		
		loginServiceImpl.updateById(u);
		
		System.out.println("---->");
	}
	
	@Test
	public void findSysUser(){
		
		SysUsers u = loginServiceImpl.selectById(Long.valueOf("1"));
		
		System.out.println("---->"+u);
	}
	
	

}
