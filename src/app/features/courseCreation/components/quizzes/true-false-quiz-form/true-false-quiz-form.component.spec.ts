import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuizFormComponent } from './true-false-quiz-form.component';

describe('TrueFalseQuizFormComponent', () => {
  let component: TrueFalseQuizFormComponent;
  let fixture: ComponentFixture<TrueFalseQuizFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueFalseQuizFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrueFalseQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
