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

public class AOPTestCategoryMaintanencePanel1 extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private JButton btn;
	private JButton btn2;
	private JButton btn3;
	private JButton btnCancel;
	/**
	 * Create the panel.
	 */
	public AOPTestCategoryMaintanencePanel1() {

		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		setLayout(layout);
		btn = new JButton(" Edit Test Cat.");
		layout.putConstraint(SpringLayout.EAST, btn, -393, SpringLayout.EAST, this);
		add(btn);

		btn2 = new JButton("Search");
		layout.putConstraint(SpringLayout.NORTH, btn, 0, SpringLayout.NORTH, btn2);
		layout.putConstraint(SpringLayout.WEST, btn, 42, SpringLayout.EAST, btn2);
		layout.putConstraint(SpringLayout.SOUTH, btn2, -10, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.WEST, btn2, 22, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.EAST, btn2, 141, SpringLayout.WEST, this);
		btn2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
			}
		});
		add(btn2);

		btn3 = new JButton("Add Test Cat.");
		layout.putConstraint(SpringLayout.WEST, btn3, 45, SpringLayout.EAST, btn);
		layout.putConstraint(SpringLayout.SOUTH, btn3, -10, SpringLayout.SOUTH, this);
		add(btn3);

		JLabel versionNum = new JLabel("beta 0.0.1");
		layout.putConstraint(SpringLayout.SOUTH, versionNum, 0, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, versionNum, 0, SpringLayout.EAST, this);
		versionNum.setFont(new Font("Lucida Grande", Font.PLAIN, 10));
		add(versionNum);
		
		btnCancel = new JButton("Cancel");
		layout.putConstraint(SpringLayout.EAST, btn3, -31, SpringLayout.WEST, btnCancel);
		layout.putConstraint(SpringLayout.WEST, btnCancel, -154, SpringLayout.WEST, versionNum);
		layout.putConstraint(SpringLayout.SOUTH, btnCancel, -10, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, btnCancel, -40, SpringLayout.WEST, versionNum);
		add(btnCancel);
	}

}

