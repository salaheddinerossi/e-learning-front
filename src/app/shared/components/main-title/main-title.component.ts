import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.css'
})
export class MainTitleComponent {

  @Input() mainText= "";
  @Input() subText = "";

}
