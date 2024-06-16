import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CourseDetails} from "../../../../shared/models/CourseDetails";
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseInfoComponent {

  @Input() courseDetails!:CourseDetails;
  @Input() isStudentLoggedIn=false;
  @Input() isStudentHasCourse=false;
  @Output() enrollCourse = new EventEmitter<any>();
  @Input() courseEnrollmentId!:number;
  @Output() loginFirst = new EventEmitter<any>();
  protected readonly environment = environment;

  enroll(){
    this.enrollCourse.emit();
  }

  mustLogin() {
    this.loginFirst.emit()
  }
}
