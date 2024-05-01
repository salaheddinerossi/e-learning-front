import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrl: './advices.component.css'
})
export class AdvicesComponent {

  @Input() advices!:string[];

}
