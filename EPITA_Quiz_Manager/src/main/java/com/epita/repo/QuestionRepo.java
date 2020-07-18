package com.epita.repo;

import org.springframework.stereotype.Repository;
import com.epita.quiz.Question;
import org.springframework.data.repository.CrudRepository;


@Repository("questionRepository")
public interface QuestionRepo extends CrudRepository<Question, Integer> {

}
