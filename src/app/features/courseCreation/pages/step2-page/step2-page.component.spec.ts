import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2PageComponent } from './step2-page.component';

describe('Step2PageComponent', () => {
  let component: Step2PageComponent;
  let fixture: ComponentFixture<Step2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
