import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/services/exam.service';
import { MCQQuestion } from 'src/datamodel/mcqquestion';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/datamodel/exam-question';
import { MCQChoice } from 'src/datamodel/mcqchoice';
import { Exam } from 'src/datamodel/exam';

@Component({
  selector: 'app-new-question-form',
  templateUrl: './new-question-form.component.html',
  styleUrls: ['./new-question-form.component.css']
})
export class NewQuestionFormComponent implements OnInit {

  
  exam: Exam = new Exam(null, "Jaava");
  question: Question = new Question(null, "What is Java Boot?", this.exam); null
  mcq1: MCQChoice = new MCQChoice(null, 1, "1", this.question);
  mcq2: MCQChoice = new MCQChoice(null, 0, "2", this.question);
  mcq3: MCQChoice = new MCQChoice(null, 0, "3", this.question);
  mcq4: MCQChoice = new MCQChoice(null, 0, "4", this.question);
  mcqquestion: MCQQuestion = new MCQQuestion([this.mcq1, this.mcq2, this.mcq3, this.mcq4], this.question, this.exam);

  constructor(private examService: ExamService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  saveMCQQuestion() {
console.log("ahiya")
    this.examService.saveMCQQuestionByEId(this.mcqquestion, (response: MCQQuestion) => {
      alert("Saved");
    })
  }


}
