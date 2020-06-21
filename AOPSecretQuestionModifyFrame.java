package com.aop.secretquestions.frames;

import javax.swing.JFrame;

import com.aop.secretquestions.panels.AOPSecretQuestionModifyPanel;

public class AOPSecretQuestionModifyFrame {
	public static void main(String[] args){
		
		   JFrame frame = new JFrame("Update Secret Question");

		   frame.setContentPane(new AOPSecretQuestionModifyPanel());
		   frame.setSize(500, 325);
		   frame.setLocationRelativeTo(null);
		   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		   frame.setVisible(true);
	      
	   }
	}

