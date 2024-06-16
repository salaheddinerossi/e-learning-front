import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterStructureComponent } from './chapter-structure.component';

describe('ChapterStructureComponent', () => {
  let component: ChapterStructureComponent;
  let fixture: ComponentFixture<ChapterStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapterStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
