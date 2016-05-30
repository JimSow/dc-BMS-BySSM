package com.dc.bms.sys;

import java.util.List;

import org.apache.ibatis.session.ExecutorType;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * ����mybatis��dao���ࡣ����ͨ���̳У�������еĹ��߷���
 * 
 */
public abstract class MybatisDaoBase<T> {

	@Autowired
	protected SqlSession sqlSession;

	/**
	 * ���һ����;��SqlSession
	 * 
	 * @return
	 */
	protected SqlSession openSession() {
		return sqlSession;
	}
	
	/**
	 *  �رյ�SqlSession
	 * 
	 * @return
	 */
	public void closeSession() {
		 sqlSession.close();
	}

	/**
	 * Ϊ����sqlһ�����ύ��ѯ�Ż���SqlSession
	 * 
	 * @return
	 */
	protected SqlSession openSessionForMultiSqlQuery() {
		return ((SqlSessionTemplate) sqlSession).getSqlSessionFactory()
				.openSession(ExecutorType.REUSE, true);
	}

	/**
	 * Ϊ���������޸��Ż���SqlSession
	 * 
	 * @return
	 */
	protected SqlSession openSessionForBatchInsertOrUpdate() {
		return ((SqlSessionTemplate) sqlSession).getSqlSessionFactory()
				.openSession(ExecutorType.BATCH);
	}
	
	

	/**
	 * ���ݴ���Ĳ�����ȡ��ҳ�б�
	 * 
	 * @param sqlId
	 * @param object
	 * @param start
	 * @param size
	 * @return list<T>
	 * @author wang xp
	 */
	protected List<T> getPageList(String sqlId, Object object, int start,
			int size) {
		List<T> list = sqlSession.selectList(sqlId, object, new RowBounds(
				start, size));
		return list;
	}
	
	/**
	 * 核��ݴ���Ĳ�����ȡ�б� �޷�ҳ
	 * @param sqlId
	 * @param object
	 * @return
	 */
	protected List<T> getNoPageList(String sqlId, Object object){
		List<T> list = sqlSession.selectList(sqlId, object);
		return list;
	}
}
