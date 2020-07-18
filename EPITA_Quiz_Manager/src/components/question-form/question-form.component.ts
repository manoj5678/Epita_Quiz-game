import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'
import { ExamService } from 'src/services/exam.service';
import { MCQQuestion } from 'src/datamodel/mcqquestion';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  
  mcqquestion: MCQQuestion = new MCQQuestion();

  constructor(private examService: ExamService, private router: Router, private route: ActivatedRoute) { 
    this.mcqquestion = JSON.parse(localStorage.getItem("mcqquestion"));
  }

  ngOnInit(): void {
  }

  openNewQuestion() {
   
    this.router.navigate(["/addquestion"])
  }

}
