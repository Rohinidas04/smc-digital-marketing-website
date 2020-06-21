package com.aop.dto;

public class UpdateSecretQuestion {

	private String updatedSecretQuestion;
	private String updatedSecretStatus;
	
	public UpdateSecretQuestion(String newUpdatedSeretQuestion) {
		this.setUpdatedSecretQuestion(newUpdatedSeretQuestion);
}

	public String getUpdateSecretQuestion() {
		return updatedSecretQuestion;
	}


	public void setUpdatedSecretQuestion(String updatedSecretQuestion) {
		this.updatedSecretQuestion = updatedSecretQuestion;
	}


}
