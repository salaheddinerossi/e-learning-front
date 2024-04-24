import { TestBed } from '@angular/core/testing';

import { CourseCreationFormService } from './course-creation-form.service';

describe('CourseCreationFormService', () => {
  let service: CourseCreationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCreationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
