package com.aop.category.panels;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SpringLayout;
import javax.swing.border.LineBorder;

public class AOPTestCategoryMaintanencePanel2 extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JButton btn;
	private JButton btn2;
	private JButton btnCancel;
	private JButton btnDelete;
	/**
	 * Create the panel.
	 */
	public AOPTestCategoryMaintanencePanel2() {

		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		setLayout(layout);
		btn = new JButton(" Edit Test Cat.");
		layout.putConstraint(SpringLayout.SOUTH, btn, -10, SpringLayout.SOUTH, this);
		add(btn);

		btn2 = new JButton("Save");
		layout.putConstraint(SpringLayout.WEST, btn2, 27, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.SOUTH, btn2, 0, SpringLayout.SOUTH, btn);
		layout.putConstraint(SpringLayout.EAST, btn2, 146, SpringLayout.WEST, this);
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
		layout.putConstraint(SpringLayout.NORTH, btnCancel, 0, SpringLayout.NORTH, btn);
		layout.putConstraint(SpringLayout.WEST, btnCancel, -115, SpringLayout.WEST, versionNum);
		layout.putConstraint(SpringLayout.EAST, btnCancel, -1, SpringLayout.WEST, versionNum);
		add(btnCancel);
		
		btnDelete = new JButton("Delete");
		layout.putConstraint(SpringLayout.WEST, btnDelete, 41, SpringLayout.EAST, btn2);
		layout.putConstraint(SpringLayout.SOUTH, btnDelete, 0, SpringLayout.SOUTH, btn);
		layout.putConstraint(SpringLayout.EAST, btnDelete, -35, SpringLayout.WEST, btnCancel);
		add(btnDelete);
		
		}
	}


