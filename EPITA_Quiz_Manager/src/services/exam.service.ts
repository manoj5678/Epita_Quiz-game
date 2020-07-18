import { Injectable } from '@angular/core';
import { Exam } from '../datamodel/exam'
import { HttpClient } from '@angular/common/http';
import { Question } from '../datamodel/exam-question';
import { MCQChoice } from '../datamodel/mcqchoice';
import { MCQQuestion } from '../datamodel/mcqquestion';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) { }

  getExam(exam : Exam, cb:(response:Exam)=>void) {
    // this.httpClient.post(this.url, exam);
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/get_exam/"+exam.e_id;
    this.httpClient.get<Exam>(url).subscribe((data:Exam) =>
        cb(data)
    );
  }

  getAllExams(exam : Exam[], cb:(response:Exam[])=>void)  { 
    // this.httpClient.post(this.url, exam);
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/get_allexam";
    this.httpClient.get<Exam[]>(url).subscribe((data:Exam[]) =>
        cb(data)
    );
  }

  getQuestionByExamId(id : number, cb:(response:Question[])=>void) {
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/get_questionsbyexamid/"+id;
    this.httpClient.get<Question[]>(url).subscribe((data:Question[]) =>
        cb(data)
    );
  }

  getMCQChoiceByQId(id : number, cb:(response:MCQChoice[])=>void) {
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/get_mcqchoice/"+id;
    this.httpClient.get<MCQChoice[]>(url).subscribe((data:MCQChoice[]) =>
        cb(data)
    );
  }

  getMCQQuestionByEId(id : number, cb:(response:MCQQuestion[])=>void) {
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/get_mcqchoice/"+id;
    this.httpClient.get<MCQQuestion[]>(url).subscribe((data:MCQQuestion[]) =>
        cb(data)
    );
  }

  saveMCQQuestionByEId(id : MCQQuestion, cb:(response:MCQQuestion)=>void) {
    let url : string = "http://localhost:8086/EPITA_Quiz_Manager/src/exam/save_mcqchoice/";
    this.httpClient.post<MCQQuestion>(url,id).subscribe((data:MCQQuestion) =>
        cb(data)
    );
  }
}
