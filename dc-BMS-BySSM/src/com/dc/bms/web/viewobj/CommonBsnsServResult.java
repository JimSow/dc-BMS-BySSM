package com.dc.bms.web.viewobj;

/**
 * 通用的业务服务结果
 */
public class CommonBsnsServResult extends BsnsServResult {

	private String returnResult;
	
	
	public CommonBsnsServResult(String returnResult,boolean success) {
		this.returnResult = returnResult;
		this.success = success;
	}
	
	@Override
	protected String getDefaultFailMsg() {
		return getReturnResult();
	}

	public String getReturnResult() {
		return returnResult;
	}


	public void setReturnResult(String returnResult) {
		this.returnResult = returnResult;
	}

}
