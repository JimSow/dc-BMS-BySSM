package test;


import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

//@RunWith(JUnit4ClassRunner.class)
@ContextConfiguration
(locations = { "classpath:spring*.xml" })
@TransactionConfiguration(transactionManager = "transactionManager",defaultRollback=true)
@Transactional
public abstract class TestBase extends AbstractJUnit4SpringContextTests{
}
