package com.aop.category.frames;

import javax.swing.JFrame;

import com.aop.category.panels.AOPTestCategoryMaintanencePanel3;

public class AOPTestCategoryMaintanenceFrame3 {
	public static void main(String[] args){

		JFrame frame = new JFrame("Add AOP Test Category");
		frame.add(new AOPTestCategoryMaintanencePanel3()); 
		frame.setSize(500, 350);
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}
}
