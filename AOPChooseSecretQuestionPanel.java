package com.aop.secretquestions.panels;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFormattedTextField;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SpringLayout;
import javax.swing.border.LineBorder;

public class AOPChooseSecretQuestionPanel extends JPanel {

	private static final long serialVersionUID = 1L;
	private JButton btn;
	private JButton btnCancel;
	private JLabel lblSecretQuestion_1;
	private JLabel lblSecretQuestion_3;
	private JLabel lblSecretQuestion_2;

	/**
	 * Create the panel.
	 */
	public AOPChooseSecretQuestionPanel() {

		JLabel lblSecretQuestion = new JLabel("Select Secret Questions (3)");
		lblSecretQuestion.setFont(new Font("Lucida Grande", Font.PLAIN, 20));
		add(lblSecretQuestion);

		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion, 10, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.EAST, lblSecretQuestion, -226, SpringLayout.EAST, this);
		setLayout(layout);
		Dimension dimLabel = new Dimension(20, 10);

		btn = new JButton("Next");
		layout.putConstraint(SpringLayout.WEST, btn, 0, SpringLayout.WEST, lblSecretQuestion);
		layout.putConstraint(SpringLayout.SOUTH, btn, -10, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, btn, -406, SpringLayout.EAST, this);
		add(btn);

		JLabel versionNum = new JLabel("beta 0.0.1");
		layout.putConstraint(SpringLayout.SOUTH, versionNum, 0, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, versionNum, 0, SpringLayout.EAST, this);
		versionNum.setFont(new Font("Lucida Grande", Font.PLAIN, 10));
		add(versionNum);

		btnCancel = new JButton("Cancel");
		layout.putConstraint(SpringLayout.WEST, btnCancel, 71, SpringLayout.EAST, btn);
		layout.putConstraint(SpringLayout.SOUTH, btnCancel, -10, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.NORTH, btn, 0, SpringLayout.NORTH, btnCancel);
		add(btnCancel);

		lblSecretQuestion_1 = new JLabel("Secret Question 1");
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion_1, 74, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.WEST, lblSecretQuestion_1, 62, SpringLayout.WEST, this);
		add(lblSecretQuestion_1);

		lblSecretQuestion_3 = new JLabel("Secret Question 3");
		layout.putConstraint(SpringLayout.WEST, lblSecretQuestion_3, 0, SpringLayout.WEST, lblSecretQuestion_1);
		add(lblSecretQuestion_3);

		lblSecretQuestion_2 = new JLabel("Secret Question 2");
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion_3, 74, SpringLayout.SOUTH, lblSecretQuestion_2);
		layout.putConstraint(SpringLayout.NORTH, lblSecretQuestion_2, 70, SpringLayout.SOUTH, lblSecretQuestion_1);
		layout.putConstraint(SpringLayout.WEST, lblSecretQuestion_2, 0, SpringLayout.WEST, lblSecretQuestion_1);
		add(lblSecretQuestion_2);

		JComboBox comboBox = new JComboBox();
		layout.putConstraint(SpringLayout.NORTH, comboBox, 40, SpringLayout.SOUTH, lblSecretQuestion);
		layout.putConstraint(SpringLayout.WEST, comboBox, 66, SpringLayout.EAST, lblSecretQuestion_1);
		layout.putConstraint(SpringLayout.EAST, comboBox, 256, SpringLayout.EAST, lblSecretQuestion_1);
		add(comboBox);

		JComboBox comboBox_1 = new JComboBox();
		layout.putConstraint(SpringLayout.WEST, comboBox_1, 66, SpringLayout.EAST, lblSecretQuestion_2);
		layout.putConstraint(SpringLayout.SOUTH, comboBox_1, -157, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, comboBox_1, 261, SpringLayout.EAST, lblSecretQuestion_2);
		add(comboBox_1);

		JComboBox comboBox_2 = new JComboBox();
		layout.putConstraint(SpringLayout.NORTH, comboBox_2, 56, SpringLayout.SOUTH, comboBox_1);
		layout.putConstraint(SpringLayout.WEST, comboBox_2, 66, SpringLayout.EAST, lblSecretQuestion_3);
		layout.putConstraint(SpringLayout.EAST, comboBox_2, 261, SpringLayout.EAST, lblSecretQuestion_3);
		add(comboBox_2);

		JFormattedTextField formattedTextField = new JFormattedTextField();
		layout.putConstraint(SpringLayout.NORTH, formattedTextField, -1, SpringLayout.NORTH, comboBox);
		layout.putConstraint(SpringLayout.WEST, formattedTextField, 62, SpringLayout.EAST, comboBox);
		layout.putConstraint(SpringLayout.EAST, formattedTextField, -36, SpringLayout.EAST, this);
		add(formattedTextField);

		JFormattedTextField formattedTextField_3 = new JFormattedTextField();
		layout.putConstraint(SpringLayout.NORTH, formattedTextField_3, -1, SpringLayout.NORTH, comboBox_1);
		layout.putConstraint(SpringLayout.WEST, formattedTextField_3, 0, SpringLayout.WEST, formattedTextField);
		layout.putConstraint(SpringLayout.EAST, formattedTextField_3, -30, SpringLayout.EAST, this);
		add(formattedTextField_3);

		JFormattedTextField formattedTextField_4 = new JFormattedTextField();
		layout.putConstraint(SpringLayout.NORTH, formattedTextField_4, -5, SpringLayout.NORTH, lblSecretQuestion_3);
		layout.putConstraint(SpringLayout.WEST, formattedTextField_4, 57, SpringLayout.EAST, comboBox_2);
		layout.putConstraint(SpringLayout.EAST, formattedTextField_4, -29, SpringLayout.EAST, this);
		add(formattedTextField_4);

		JLabel lblSelectQuestions = new JLabel("Enter Answer");
		layout.putConstraint(SpringLayout.EAST, lblSelectQuestions, -89, SpringLayout.EAST, this);
		add(lblSelectQuestions);

		JLabel label = new JLabel("Select Questions");
		layout.putConstraint(SpringLayout.EAST, label, -172, SpringLayout.WEST, lblSelectQuestions);
		layout.putConstraint(SpringLayout.NORTH, lblSelectQuestions, 0, SpringLayout.NORTH, label);
		layout.putConstraint(SpringLayout.SOUTH, label, -6, SpringLayout.NORTH, comboBox);
		add(label);
	}
}
