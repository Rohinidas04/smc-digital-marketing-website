package com.aop.category.frames;

import javax.swing.JFrame;

import com.aop.category.panels.AOPTestCategoryMaintanencePanel1;

public class AOPTestCategoryMaintanenceFrame1 {

	public static void main(String[] args){

		JFrame frame = new JFrame("AOP Test Category Library");
		frame.add(new AOPTestCategoryMaintanencePanel1()); 
		frame.setSize(750, 400);
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}
}
