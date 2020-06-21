package com.aop.login.panels;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.Action;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SpringLayout;
import javax.swing.border.LineBorder;

import com.aop.dto.Login;
import com.aop.dto.User;
import com.aop.services.AOPExamService;


public class AOPLogInPanel extends JPanel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static  Action action = null;
	private JTextField username;
	private JTextField password;
	private JButton btn;
	private JButton btn2;
	private JButton btn3;


	public AOPLogInPanel() {
		setBorder(new LineBorder(new Color(51, 102, 153), 5));
		setBackground(Color.WHITE);
		setForeground(Color.WHITE);
		SpringLayout layout = new SpringLayout();
		setLayout(layout);

		JLabel label1 = new JLabel("Username ");
		Dimension dimLabel = new Dimension(20, 10);
		label1.setSize(dimLabel);
		add(label1);

		username = new JTextField(20);
		layout.putConstraint(SpringLayout.NORTH, label1, 5, SpringLayout.NORTH, username);
		layout.putConstraint(SpringLayout.EAST, label1, -6, SpringLayout.WEST, username);
		add(username);

		JLabel label2 = new JLabel("Password ");
		label2.setSize(dimLabel);
		add(label2);

		password = new JTextField(20);
		layout.putConstraint(SpringLayout.NORTH, label2, 5, SpringLayout.NORTH, password);
		layout.putConstraint(SpringLayout.EAST, label2, -6, SpringLayout.WEST, password);
		layout.putConstraint(SpringLayout.NORTH, password, 147, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.SOUTH, username, -6, SpringLayout.NORTH, password);
		layout.putConstraint(SpringLayout.EAST, username, 0, SpringLayout.EAST, password);
		layout.putConstraint(SpringLayout.EAST, password, -35, SpringLayout.EAST, this);
		add(password);

		btn = new JButton("Login");
		layout.putConstraint(SpringLayout.EAST, btn, -122, SpringLayout.EAST, this);
		
		btn.setAction(action);
		btn.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String username1 = username.getText();
				String password1 = password.getText();
				Login login = new Login(username1, password1);
	//			Login login = new Login();
//				login.setUserid(username1);
//				login.setPassword(password1);
				
				
				AOPExamService aopExamService = new AOPExamService();
				User user = aopExamService.verifyLogin(login);
				if(null==user) {
					System.out.println("Invalid Credentials");
				}else {
					System.out.println("Successful Login");
				}
				
			}
		});
		add(btn);
	
		btn2 = new JButton("Forgot Username");
		layout.putConstraint(SpringLayout.NORTH, btn2, 230, SpringLayout.NORTH, this);
		layout.putConstraint(SpringLayout.SOUTH, btn, -6, SpringLayout.NORTH, btn2);
		add(btn2);

		btn3 = new JButton("Forgot Password");
		layout.putConstraint(SpringLayout.EAST, btn3, -10, SpringLayout.EAST, this);
		layout.putConstraint(SpringLayout.EAST, btn2, -10, SpringLayout.WEST, btn3);
		layout.putConstraint(SpringLayout.NORTH, btn3, 0, SpringLayout.NORTH, btn2);
		add(btn3);

		JLabel versionNum = new JLabel("beta 0.0.1");
		layout.putConstraint(SpringLayout.SOUTH, versionNum, 0, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, versionNum, 0, SpringLayout.EAST, this);
		versionNum.setFont(new Font("Lucida Grande", Font.PLAIN, 10));
		add(versionNum);
		
		JLabel lblAopLogIn = new JLabel("AOP Log In");
		layout.putConstraint(SpringLayout.SOUTH, lblAopLogIn, -28, SpringLayout.NORTH, username);
		layout.putConstraint(SpringLayout.EAST, lblAopLogIn, -58, SpringLayout.EAST, this);
		lblAopLogIn.setFont(new Font("Lucida Grande", Font.PLAIN, 37));
		add(lblAopLogIn);
		
		JLabel lblNewLabel = new JLabel("");
		layout.putConstraint(SpringLayout.WEST, lblNewLabel, 86, SpringLayout.WEST, this);
		layout.putConstraint(SpringLayout.SOUTH, lblNewLabel, -76, SpringLayout.SOUTH, this);
		layout.putConstraint(SpringLayout.EAST, lblNewLabel, 309, SpringLayout.WEST, this);
	//	lblNewLabel.setIcon(new ImageIcon(AOPLogInPanel.class.getResource("/Images/AOP Logo.png")));
		add(lblNewLabel);
	}
}
