import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuizComponent } from './multiple-choice-quiz.component';

describe('MultipleChoiceQuizComponent', () => {
  let component: MultipleChoiceQuizComponent;
  let fixture: ComponentFixture<MultipleChoiceQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultipleChoiceQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleChoiceQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
