package com.epita.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.epita.quiz.Question;
import com.epita.repo.QuestionRepo;

@Service("questionService")
public class QuestionServiceImpl implements QuestionService {
	
	@Autowired
	private QuestionRepo questionRepo;

	@Override
	public Iterable<Question> findAll() {
		// TODO Auto-generated method stub
		return questionRepo.findAll();
	}

}
