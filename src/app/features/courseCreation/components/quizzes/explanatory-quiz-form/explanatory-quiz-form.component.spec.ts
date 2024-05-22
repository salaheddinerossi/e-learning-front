import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanatoryQuizFormComponent } from './explanatory-quiz-form.component';

describe('ExplanatoryQuizFormComponent', () => {
  let component: ExplanatoryQuizFormComponent;
  let fixture: ComponentFixture<ExplanatoryQuizFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplanatoryQuizFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplanatoryQuizFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
