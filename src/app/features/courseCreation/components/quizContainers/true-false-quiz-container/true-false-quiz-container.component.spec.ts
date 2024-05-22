import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuizContainerComponent } from './true-false-quiz-container.component';

describe('TrueFalseQuizContainerComponent', () => {
  let component: TrueFalseQuizContainerComponent;
  let fixture: ComponentFixture<TrueFalseQuizContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrueFalseQuizContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrueFalseQuizContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
