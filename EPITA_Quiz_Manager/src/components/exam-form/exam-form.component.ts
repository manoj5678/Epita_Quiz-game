import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/datamodel/exam';
import { ExamService } from 'src/app/services/exam.service';
import { Router, NavigationExtras } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit {

  exams : Exam[] = []
  exam: Exam = new Exam();

  constructor(private examService : ExamService, private router:Router) {
    this.getAllExams()
   }

  ngOnInit(): void {
  }

  getAllExams(){
    this.examService.getAllExams(this.exams, (response:Exam[]) => {
        this.exams = response
        console.log("-------------------",this.exams)
    })
  }

  openExam(exam : Exam) {
    console.log(exam)
    localStorage.setItem("exam",JSON.stringify(exam))
    this.router.navigate(["/quiz"])
  }

  btnIndex(event : Event) {
      let elementId = (event.target as Element).id;
      this.exam = this.exams[+elementId];
      this.openExam(this.exam);
  }
}
