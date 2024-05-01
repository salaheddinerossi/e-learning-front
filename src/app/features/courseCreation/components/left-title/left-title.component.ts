import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-left-title',
  templateUrl: './left-title.component.html',
  styleUrl: './left-title.component.css'
})
export class LeftTitleComponent {

  @Input() title!:string;

}
