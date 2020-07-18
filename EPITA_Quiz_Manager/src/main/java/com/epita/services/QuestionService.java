package com.epita.services;

import com.epita.quiz.Question;

public interface QuestionService {
	
	public Iterable<Question> findAll();
}
