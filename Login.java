package com.aop.dto;

public class Login {
	private String userid;
	private String password;
	
	
	public Login(String username1, String password1) {
		this.userid=username1;
		this.password=password1;
				
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}
