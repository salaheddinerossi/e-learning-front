import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuizComponent } from './true-false-quiz.component';

describe('TrueFalseQuizComponent', () => {
  let component: TrueFalseQuizComponent;
  let fixture: ComponentFixture<TrueFalseQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueFalseQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrueFalseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
