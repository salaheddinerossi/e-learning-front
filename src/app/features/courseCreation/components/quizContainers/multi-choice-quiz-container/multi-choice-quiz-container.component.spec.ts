import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceQuizContainerComponent } from './multi-choice-quiz-container.component';

describe('MultiChoiceQuizContainerComponent', () => {
  let component: MultiChoiceQuizContainerComponent;
  let fixture: ComponentFixture<MultiChoiceQuizContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiChoiceQuizContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiChoiceQuizContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
