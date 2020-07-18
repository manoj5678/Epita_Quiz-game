package com.epita.services;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ANSWERS")
public class Answer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ANS_ID")
	private long id;
	
	@Column(name="ANS_CONTENT")
	private String content;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ANS_QUE_FK")
	private Question_Services question;
	
	@ManyToOne
	@JoinColumn(name="A_USER_FK")
	private User user;
	
	public Answer() {}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Question_Services getQuestion() {
		return question;
	}

	public void setQuestion(Question_Services question) {
		this.question = question;
	}


}
