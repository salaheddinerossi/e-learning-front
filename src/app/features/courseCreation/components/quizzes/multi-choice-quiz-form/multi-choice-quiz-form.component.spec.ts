import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceQuizFormComponent } from './multi-choice-quiz-form.component';

describe('MultiChoiceQuizFormComponent', () => {
  let component: MultiChoiceQuizFormComponent;
  let fixture: ComponentFixture<MultiChoiceQuizFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiChoiceQuizFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiChoiceQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
