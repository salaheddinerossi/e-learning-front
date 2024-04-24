import {Component, Input} from '@angular/core';
import {Course} from "../../models/Course";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  @Input() course!:Course;



}
