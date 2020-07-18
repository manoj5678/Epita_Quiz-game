import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/datamodel/exam';
import { ExamService } from 'src/app/services/exam.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/datamodel/exam-question';
import { MCQChoice } from 'src/app/datamodel/mcqchoice';
import { MCQQuestion } from 'src/app/datamodel/mcqquestion';

@Component({
  selector: 'app-exam-question-form',
  templateUrl: './exam-question-form.component.html',
  styleUrls: ['./exam-question-form.component.css']
})

export class ExamQuestionFormComponent implements OnInit {

  questions: Question[] = []
  mcqchoices: MCQChoice[] = []
  mcqquestions: MCQQuestion[] = []
  question: Question = new Question();
  exam: Exam = new Exam();
  mcqquestion: MCQQuestion = new MCQQuestion();
  
  constructor(private examService: ExamService, private router: Router, private route: ActivatedRoute) {

    this.exam = JSON.parse(localStorage.getItem("exam"));
    console.log(this.exam)
    this.getMCQQuestion(this.exam.e_id);
  }

  ngOnInit(): void {
  }

  getQuestion(id: number) {
    this.examService.getQuestionByExamId(id, (response: Question[]) => {
      this.questions = response;
      console.log("Q.", this.questions);
    })
  }

  getMCQChoice(id: number) {
    this.examService.getMCQChoiceByQId(id, (response: MCQChoice[]) => {
      this.mcqchoices = response;
      console.log("questions are", this.mcqchoices);
    })
  }

  getMCQQuestion(id: number) {
    this.examService.getMCQQuestionByEId(id, (response: MCQQuestion[]) => {
      this.mcqquestions = response;
      console.log("Q & A", this.mcqquestions);
    })
  }

  btnEditQuestion(event: Event) {
    let elementId = (event.target as Element).id;
    this.mcqquestion = this.mcqquestions[+elementId];
    this.openQuestion();
  }

  openQuestion() {
    console.log(this.mcqquestion)
    localStorage.setItem("mcqquestion",JSON.stringify(this.mcqquestion))
    this.router.navigate(["/quest"])
  }

  openNewQuestion() {
    // console.log(this.mcqquestion)
    // localStorage.setItem("mcqquestion",JSON.stringify(this.mcqquestion))
    this.router.navigate(["/add_question"])
  }
}
