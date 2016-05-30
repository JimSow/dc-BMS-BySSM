package com.dc.bms.web.viewobj;

/**
 * 通用VO
 *
 */
public class CommonResultVO {

	private String status;

	private String msg;

	private Object data;

	public CommonResultVO() {

	}
	
	public CommonResultVO(BsnsServResult bsnsServResult) {
		if (bsnsServResult.isSuccess()) {
			status = "ok";
		} else {
			status = "fail";
			msg = bsnsServResult.getDefaultErrorMsg();
		}
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
