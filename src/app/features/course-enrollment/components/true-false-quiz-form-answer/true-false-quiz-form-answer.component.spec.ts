import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuizFormAnswerComponent } from './true-false-quiz-form-answer.component';

describe('TrueFalseQuizFormAnswerComponent', () => {
  let component: TrueFalseQuizFormAnswerComponent;
  let fixture: ComponentFixture<TrueFalseQuizFormAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueFalseQuizFormAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrueFalseQuizFormAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
