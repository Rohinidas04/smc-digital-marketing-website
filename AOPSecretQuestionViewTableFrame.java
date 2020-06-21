package com.aop.secretquestions.frames;

import javax.swing.JFrame;

import com.aop.secretquestions.panels.SecretQuestionViewTablePanel;

public class AOPSecretQuestionViewTableFrame extends JFrame {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public static void main(String[] args) {
		
		   JFrame frame = new JFrame("Secret Question Table");
		   frame.add(new SecretQuestionViewTablePanel());
		   frame.setSize(1000, 1000);
		   frame.setLocationRelativeTo(null);
		   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		   frame.setVisible(true);
	      	
	}

}
