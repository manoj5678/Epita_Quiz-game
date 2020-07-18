import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQuestionFormComponent } from './exam-question-form.component';

describe('ExamQuestionFormComponent', () => {
  let component: ExamQuestionFormComponent;
  let fixture: ComponentFixture<ExamQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
