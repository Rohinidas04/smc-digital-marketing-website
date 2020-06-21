package com.aop.secretquestions.frames;

import javax.swing.JFrame;

import com.aop.secretquestions.panels.AOPSecretQuestionAddPanel;

public class AOPSecretQuestionAddFrame {
	public static void main(String[] args){
		
		   JFrame frame = new JFrame("User Database");

		   frame.setContentPane(new AOPSecretQuestionAddPanel());
		   frame.setSize(500, 325);
		   frame.setLocationRelativeTo(null);
		   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		   frame.setVisible(true);
	      
	   }
	}

