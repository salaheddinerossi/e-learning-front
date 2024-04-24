import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-large-course-button',
  templateUrl: './large-course-button.component.html',
  styleUrl: './large-course-button.component.css'
})
export class LargeCourseButtonComponent {


  @Input()  link!:string;
  @Input() buttonText!:string;

}
