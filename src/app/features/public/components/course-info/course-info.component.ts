import {Component, Input} from '@angular/core';
import {CourseDetails} from "../../../../shared/models/CourseDetails";
import {environment} from "../../../../../environment";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css'
})
export class CourseInfoComponent {

  @Input() courseDetails!:CourseDetails;

  protected readonly environment = environment;
}
