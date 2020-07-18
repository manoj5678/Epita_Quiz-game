import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';
import { ExamQuestionFormComponent } from './components/exam-question-form/exam-question-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamFormComponent,
    ExamQuestionFormComponent,
    QuestionFormComponent,
    NewQuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
