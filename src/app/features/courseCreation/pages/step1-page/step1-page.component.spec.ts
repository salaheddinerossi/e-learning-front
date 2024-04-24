import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1PageComponent } from './step1-page.component';

describe('Step1PageComponent', () => {
  let component: Step1PageComponent;
  let fixture: ComponentFixture<Step1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step1PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
