package com.aop.dto;

public class SecretQuestionMaintenance {
	private String addSecretQuestion;
	
	
	public SecretQuestionMaintenance(String newSecretQuestion) {
		this.setAddSecretQuestion(newSecretQuestion);
}


	public String getAddSecretQuestion() {
		return addSecretQuestion;
	}


	public void setAddSecretQuestion(String addSecretQuestion) {
		this.addSecretQuestion = addSecretQuestion;
	}


}
