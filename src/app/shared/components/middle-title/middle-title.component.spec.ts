import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTitleComponent } from './middle-title.component';

describe('MiddleTitleComponent', () => {
  let component: MiddleTitleComponent;
  let fixture: ComponentFixture<MiddleTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
