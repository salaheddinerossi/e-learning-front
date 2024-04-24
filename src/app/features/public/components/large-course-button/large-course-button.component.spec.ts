import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCourseButtonComponent } from './large-course-button.component';

describe('LargeCourseButtonComponent', () => {
  let component: LargeCourseButtonComponent;
  let fixture: ComponentFixture<LargeCourseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LargeCourseButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LargeCourseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
