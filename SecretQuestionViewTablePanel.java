package com.aop.secretquestions.panels;

import java.awt.BorderLayout;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableModel;

import com.aop.dto.SecretQuestions;
import com.aop.services.AOPExamService;

public class SecretQuestionViewTablePanel extends JPanel {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * Create the panel.
	 */

	public SecretQuestionViewTablePanel() {


        List<String> columns = new ArrayList<String>();
        
        columns.add("QuestionID");

        columns.add("Questions");

        columns.add("Status(A/I)");

        AOPExamService examService = new AOPExamService();
        ArrayList<SecretQuestions> secretQuestionList = (ArrayList<SecretQuestions>)examService.getSecretQuestionList();
        String[][] secretQuestionArray = new String[secretQuestionList.size()][3];
        for (int i = 0; i<secretQuestionList.size(); i++) {
			SecretQuestions secretQuestion = secretQuestionList.get(i);		
			secretQuestionArray[i][0]=secretQuestion.getQuestionID();
			secretQuestionArray[i][1]=secretQuestion.getQuestions();
			secretQuestionArray[i][2]=secretQuestion.getStatus();
		}
        TableModel secretQuestionTable = new DefaultTableModel(secretQuestionArray, columns.toArray());
		JTable table = new JTable(secretQuestionTable);
        add(new JScrollPane(table), BorderLayout.CENTER);
        add(table.getTableHeader(), BorderLayout.NORTH);		
		
		
		
	}

}
