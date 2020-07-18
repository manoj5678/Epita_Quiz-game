package com.epita.repo;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.epita.quiz.Answer;
import com.epita.quiz.AnswerDAO;
import com.epita.quiz.QuestionDAO;
import com.epita.quiz.UserDAO;
import com.epita.services.Question_Services;
import com.epita.services.User;




public class ExamDataService {
	
	private static final Logger LOGGER = LogManager.getLogger(ExamDataService.class);
	
	@Inject
	UserDAO userDAO;
	
	@Inject
	QuestionDAO questionDAO;
	
	@Inject
	AnswerDAO answerDAO;
	
	@Transactional(value = TxType.REQUIRED)
	public void answerToQuestion(User user, Question_Services question, Answer answer) {
		
		try {
			
			//User Null Validation
			userDAO.isNull(user); 
						
			//Question Validation
			questionDAO.isNull(question);  
			
			//Answer Validation
			answerDAO.isNull(answer); 
			
		} catch (ClassNullValueException ex) {
			LOGGER.info(ex);
		}	

		//Assigning user and questions to the answer
		answer.setUser(user);
		answer.setQuestion(question);
		
		answerDAO.create(answer);
	}
	
}
