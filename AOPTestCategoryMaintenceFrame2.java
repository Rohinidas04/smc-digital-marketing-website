package com.aop.category.frames;

import javax.swing.JFrame;

import com.aop.category.panels.AOPTestCategoryMaintanencePanel2;

public class AOPTestCategoryMaintenceFrame2 {
	public static void main(String[] args){

		JFrame frame = new JFrame("Modify AOP Test Category");
		frame.add(new AOPTestCategoryMaintanencePanel2()); 
		frame.setSize(500, 350);
		frame.setLocationRelativeTo(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);

	}
}
