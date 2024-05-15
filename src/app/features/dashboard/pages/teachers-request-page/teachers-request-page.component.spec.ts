import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersRequestPageComponent } from './teachers-request-page.component';

describe('TeachersRequestPageComponent', () => {
  let component: TeachersRequestPageComponent;
  let fixture: ComponentFixture<TeachersRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeachersRequestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
