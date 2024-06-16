import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryQuizFormAnswerComponent } from './explanatory-quiz-form-answer.component';

describe('ExplanatoryQuizFormAnswerComponent', () => {
  let component: ExplanatoryQuizFormAnswerComponent;
  let fixture: ComponentFixture<ExplanatoryQuizFormAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryQuizFormAnswerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplanatoryQuizFormAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
