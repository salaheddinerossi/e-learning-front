import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-middle-title',
  templateUrl: './middle-title.component.html',
  styleUrl: './middle-title.component.css'
})
export class MiddleTitleComponent {

  @Input() headTitle!:string;
  @Input() subTitle!:string;

}
