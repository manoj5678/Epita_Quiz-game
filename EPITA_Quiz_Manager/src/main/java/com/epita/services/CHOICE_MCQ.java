package com.epita.services;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MCQCHOICE")
public class CHOICE_MCQ {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "MCQCHOICE_ID")
	private long id;
	
	@Column(name = "MCQCHOICE")
	private String choice;
	
	@Column(name = "MCQCHOICE_BOOL")
	private String valid;
	
	@Column(name = "QUEST_ID")
	private String q_id;

}

