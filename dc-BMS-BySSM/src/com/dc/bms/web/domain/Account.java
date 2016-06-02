package com.dc.bms.web.domain;

import com.dc.util.EncryptUtil;

/**
 * 账户，就是用户名和密码
 */
public class Account {

	private String loginName;

	private String passWord;

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public boolean isPassWordSame(Account account) {
		return passWord.equals(account.passWord);
	}

	/**
	 * 密码加密
	 */
	public void encryptPass() {
		this.passWord = EncryptUtil.encrypt(this.passWord);
	}

}