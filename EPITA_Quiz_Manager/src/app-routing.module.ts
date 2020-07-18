import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { ExamQuestionFormComponent } from './components/exam-question-form/exam-question-form.component'
import { QuestionFormComponent } from './components/question-form/question-form.component'
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:ExamFormComponent},
  {path:'quiz', component:ExamQuestionFormComponent},
  {path:'question', component:QuestionFormComponent},
  {path:'addnewquestion', component:NewQuestionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
