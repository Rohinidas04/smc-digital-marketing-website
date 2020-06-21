package com.aop.secretquestions.frames;
import javax.swing.JFrame;

import com.aop.secretquestions.panels.AOPChooseSecretQuestionPanel;

public class AOPChooseSecretQuestionsFrame {
public static void main(String[] args){
	
	   JFrame frame = new JFrame("User Database");
	   frame.add(new AOPChooseSecretQuestionPanel());
	   frame.setSize(750, 375);
	   frame.setLocationRelativeTo(null);
	   frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	   frame.setVisible(true);
      
   }
}