import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryQuizComponent } from './explanatory-quiz.component';

describe('ExplanatoryQuizComponent', () => {
  let component: ExplanatoryQuizComponent;
  let fixture: ComponentFixture<ExplanatoryQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplanatoryQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
