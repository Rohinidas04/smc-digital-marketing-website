package com.aop.login.frames;

import javax.swing.JFrame;

import com.aop.login.panels.AOPLogInPanel;

public class AOPLogInFrame {


	public static void main(String[] args){

		JFrame frame = new JFrame("AOP EXAM APP");
		frame.add(new AOPLogInPanel()); 
		frame.setSize(783, 306);
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}
}
