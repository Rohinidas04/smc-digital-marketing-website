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

import com.aop.dto.SecretQuestions;
import com.aop.services.AOPExamService;

public class AOPSecretQuestionModifyPanel extends JPanel {
	private int questionId=8;
	private JTextField txtSecretQuestion;
	private JTextField txtSecretStatus;
	private JTextField txtSecretQuestionID;

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final Action action = null;
	private final JButton button = new JButton("Cancel");
	private JTextField textField;

	public AOPSecretQuestionModifyPanel() {
		
		AOPExamService examService = new AOPExamService(); 
		 SecretQuestions secretQuestions = examService.getSecretQuestionById(questionId);
		 txtSecretQuestion = new JTextField(secretQuestions.getQuestions());
		 txtSecretStatus = new JTextField(secretQuestions.getStatus());
		 txtSecretQuestionID = new JTextField(secretQuestions.getQuestionID());
		 txtSecretQuestionID.setEnabled(false);
		 txtSecretQuestionID.setEditable(false);
		 
		JLabel lblSecretQuestion = new JLabel("Edit Secret Question");
		lblSecretQuestion.setFont(new Font("Lucida Grande", Font.PLAIN, 20));
		add(lblSecretQuestion);
		add(txtSecretQuestion);
		add(txtSecretStatus);
		add(txtSecretQuestionID);
		
		
		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		layout.putConstraint(SpringLayout.WEST, txtSecretQuestionID, 0, SpringLayout.WEST, txtSecretQuestion);
		layout.putConstraint(SpringLayout.EAST, txtSecretQuestionID, 0, SpringLayout.EAST, txtSecretStatus);
		layout.putConstraint(SpringLayout.WEST, button, 109, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.SOUTH, button, -37, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.WEST, txtSecretStatus, 170, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.NORTH, txtSecretQuestion, 112, SpringLayout.SOUTH, lblSecretQuestion);
		layout.putConstraint(SpringLayout.WEST, txtSecretQuestion, 168, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.EAST, txtSecretQuestion, 465, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion, 10, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.EAST, lblSecretQuestion, -211, SpringLayout.EAST, this);
		setLayout(layout);
		
		JLabel lblNewLabel = new JLabel("Secret Question\n");
		layout.putConstraint(SpringLayout.NORTH, lblNewLabel, 0, SpringLayout.NORTH, txtSecretQuestion);
		layout.putConstraint(SpringLayout.WEST, lblNewLabel, 22, SpringLayout.WEST, this);
		add(lblNewLabel);
		
		JLabel lblStatus = new JLabel("Status(A/I)");
		layout.putConstraint(SpringLayout.NORTH, lblStatus, 27, SpringLayout.SOUTH, lblNewLabel);
		layout.putConstraint(SpringLayout.NORTH, txtSecretStatus, -5, SpringLayout.NORTH, lblStatus);
		layout.putConstraint(SpringLayout.WEST, lblStatus, 0, SpringLayout.WEST, lblNewLabel);
		add(lblStatus);
		add(button);
		
		JLabel lblQuestionId = new JLabel("Question ID");
		layout.putConstraint(SpringLayout.NORTH, txtSecretQuestionID, -5, SpringLayout.NORTH, lblQuestionId);
		layout.putConstraint(SpringLayout.WEST, lblQuestionId, 0, SpringLayout.WEST, lblNewLabel);
		layout.putConstraint(SpringLayout.SOUTH, lblQuestionId, -20, SpringLayout.NORTH, lblNewLabel);
		add(lblQuestionId);
		
		JButton btnSave = new JButton("Save");
		layout.putConstraint(SpringLayout.WEST, button, 6, SpringLayout.EAST, btnSave);
		layout.putConstraint(SpringLayout.WEST, btnSave, -159, SpringLayout.WEST, btnSave);
		layout.putConstraint(SpringLayout.SOUTH, btnSave, -22, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, btnSave, -44, SpringLayout.WEST, btnSave);
		add(btnSave);

		JButton btnCancel = new JButton("Cancel");
		layout.putConstraint(SpringLayout.EAST, txtSecretStatus, 0, SpringLayout.EAST, btnCancel);
		layout.putConstraint(SpringLayout.NORTH, btnCancel, 0, SpringLayout.NORTH, btnSave);
		layout.putConstraint(SpringLayout.WEST, btnCancel, 125, SpringLayout.WEST, this);
		add(btnCancel);		

		btnCancel.setAction(action);
		btnCancel.addActionListener(new ActionListener() {
	
	public void actionPerformed(ActionEvent e) {
		String updateSecretQuestion = txtSecretQuestion.getText();///
		String updateSecretStatus = txtSecretStatus.getText();
		String updateSecretQuestionID = txtSecretQuestionID.getText();
		
		SecretQuestions secretQuestions = new SecretQuestions();
		secretQuestions.setQuestionID(updateSecretQuestionID);
		secretQuestions.setQuestions(updateSecretQuestion);
		secretQuestions.setStatus(updateSecretStatus);

		
		AOPExamService examService = new AOPExamService();
		examService.updateSecretQuestion(secretQuestions);

		
		
		}
});	

		

//		
	}
}
