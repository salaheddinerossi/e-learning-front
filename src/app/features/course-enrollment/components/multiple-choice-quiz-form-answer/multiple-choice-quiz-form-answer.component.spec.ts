import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuizFormAnswerComponent } from './multiple-choice-quiz-form-answer.component';

describe('MultipleChoiceQuizFormAnswerComponent', () => {
  let component: MultipleChoiceQuizFormAnswerComponent;
  let fixture: ComponentFixture<MultipleChoiceQuizFormAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleChoiceQuizFormAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleChoiceQuizFormAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
