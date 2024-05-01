import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTitleComponent } from './left-title.component';

describe('LeftTitleComponent', () => {
  let component: LeftTitleComponent;
  let fixture: ComponentFixture<LeftTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
