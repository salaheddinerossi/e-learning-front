import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryQuizContainerComponent } from './explanatory-quiz-container.component';

describe('ExplanatoryQuizContainerComponent', () => {
  let component: ExplanatoryQuizContainerComponent;
  let fixture: ComponentFixture<ExplanatoryQuizContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryQuizContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplanatoryQuizContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
