package com.aop.category.panels;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SpringLayout;
import javax.swing.border.LineBorder;

public class AOPTestCategoryMaintanencePanel3 extends JPanel {

	/**
	 * Create the panel.
	 */
	private static final long serialVersionUID = 1L;
	private JButton btn;
	private JButton btn2;
	private JButton btnCancel;
	private JTextField textField;
	/**
	 * Create the panel.
	 */
	public AOPTestCategoryMaintanencePanel3() {

		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		setLayout(layout);
		btn = new JButton(" Edit Test Cat.");
		layout.putConstraint(SpringLayout.SOUTH, btn, -10, SpringLayout.SOUTH, this);
		add(btn);

		btn2 = new JButton("Add");
		layout.putConstraint(SpringLayout.NORTH, btn2, 0, SpringLayout.NORTH, btn);
		layout.putConstraint(SpringLayout.WEST, btn2, 47, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.EAST, btn2, 166, SpringLayout.WEST, this);
		btn2.addActionListener(new ActionListener() {
			
			public void actionPerformed(ActionEvent e) {
			}
		});
		add(btn2);

		JLabel versionNum = new JLabel("beta 0.0.1");
		layout.putConstraint(SpringLayout.WEST, btn, 7, SpringLayout.EAST, versionNum);
		layout.putConstraint(SpringLayout.EAST, btn, -56, SpringLayout.WEST, versionNum);
		layout.putConstraint(SpringLayout.SOUTH, versionNum, 0, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, versionNum, 0, SpringLayout.EAST, this);
		versionNum.setFont(new Font("Lucida Grande", Font.PLAIN, 10));
		add(versionNum);
		
		btnCancel = new JButton("Back");
		layout.putConstraint(SpringLayout.WEST, btnCancel, -120, SpringLayout.WEST, versionNum);
		layout.putConstraint(SpringLayout.SOUTH, btnCancel, 0, SpringLayout.SOUTH, btn);
		layout.putConstraint(SpringLayout.EAST, btnCancel, -6, SpringLayout.WEST, versionNum);
		add(btnCancel);
		
		textField = new JTextField();
		layout.putConstraint(SpringLayout.EAST, textField, -10, SpringLayout.EAST, this);
		add(textField);
		textField.setColumns(10);
		
		JLabel lblNewTestCategory = new JLabel("New Test Category");
		layout.putConstraint(SpringLayout.NORTH, textField, -5, SpringLayout.NORTH, lblNewTestCategory);
		layout.putConstraint(SpringLayout.WEST, textField, 26, SpringLayout.EAST, lblNewTestCategory);
		layout.putConstraint(SpringLayout.NORTH, lblNewTestCategory, 93, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.WEST, lblNewTestCategory, 0, SpringLayout.WEST, btn2);
		add(lblNewTestCategory);
		
		JButton btnAdvanced = new JButton("Advanced ");
		layout.putConstraint(SpringLayout.NORTH, btnAdvanced, 20, SpringLayout.SOUTH, textField);
		layout.putConstraint(SpringLayout.EAST, btnAdvanced, -82, SpringLayout.EAST, this);
		add(btnAdvanced);
		
		}
	}


