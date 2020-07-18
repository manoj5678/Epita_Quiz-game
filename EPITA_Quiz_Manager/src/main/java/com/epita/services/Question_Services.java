package com.epita.services;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "QUESTIONS")
public class Question_Services {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "QUE_ID")
	private long id;
	
	@Column(name = "QUE_TITLE")
	private String title;

	
	public Question_Services() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
}
