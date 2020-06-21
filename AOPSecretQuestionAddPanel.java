package com.aop.secretquestions.panels;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Action;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SpringLayout;
import javax.swing.border.LineBorder;

import com.aop.dto.SecretQuestionMaintenance;
import com.aop.dto.SecretQuestions;
import com.aop.services.AOPExamService;

public class AOPSecretQuestionAddPanel extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JButton btnAdd;
	private JButton btnCancel;
	private JLabel lblAddsecretQuestion;
	private static  Action action = null;
	private JTextField txtSecretQuestion;

	
	
	public AOPSecretQuestionAddPanel() {
		
		JLabel lblSecretQuestion = new JLabel("Add Secret Question");
		lblSecretQuestion.setFont(new Font("Lucida Grande", Font.PLAIN, 20));
		add(lblSecretQuestion);

		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion, 10, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.WEST, lblSecretQuestion, 143, SpringLayout.WEST, this);
		setLayout(layout);
		

		txtSecretQuestion = new JTextField();
		layout.putConstraint(SpringLayout.NORTH, txtSecretQuestion, 116, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.WEST, txtSecretQuestion, 33, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.EAST, txtSecretQuestion, -35, SpringLayout.EAST, this);
		add(txtSecretQuestion);
		txtSecretQuestion.setColumns(10);
		
		btnAdd = new JButton("Add");
		add(btnAdd);
		
		btnAdd.setAction(action);
		btnAdd.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String newSecretQuestion = txtSecretQuestion.getText();
				SecretQuestions secretQuestions = new SecretQuestions();
				secretQuestions.setQuestions(newSecretQuestion);
				secretQuestions.setStatus("A");
				
				AOPExamService examService = new AOPExamService();
				examService.addSecretQuestion(secretQuestions);
				}
		});

		JLabel versionNum = new JLabel("beta 0.0.1");
		layout.putConstraint(SpringLayout.EAST, btnAdd, -98, SpringLayout.WEST, versionNum);
		layout.putConstraint(SpringLayout.SOUTH, versionNum, -23, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, versionNum, -10, SpringLayout.EAST, this);
		versionNum.setFont(new Font("Lucida Grande", Font.PLAIN, 10));
		add(versionNum);

		btnCancel = new JButton("Cancel");
		layout.putConstraint(SpringLayout.NORTH, btnAdd, 0, SpringLayout.NORTH, btnCancel);
		layout.putConstraint(SpringLayout.WEST, btnAdd, 75, SpringLayout.EAST, btnCancel);
		layout.putConstraint(SpringLayout.SOUTH, btnCancel, -54, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.WEST, btnCancel, 89, SpringLayout.WEST, this);
		add(btnCancel);

		lblAddsecretQuestion = new JLabel("Secret Question: ");
		layout.putConstraint(SpringLayout.WEST, lblAddsecretQuestion, 177, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.SOUTH, lblAddsecretQuestion, -6, SpringLayout.NORTH, txtSecretQuestion);
		lblAddsecretQuestion.setFont(new Font("Lucida Grande", Font.PLAIN, 15));
		add(lblAddsecretQuestion);
//		

	}
}
