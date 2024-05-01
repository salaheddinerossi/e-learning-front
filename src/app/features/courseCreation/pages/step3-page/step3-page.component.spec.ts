import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3PageComponent } from './step3-page.component';

describe('Step3PageComponent', () => {
  let component: Step3PageComponent;
  let fixture: ComponentFixture<Step3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step3PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Step3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
