import {Component, Input} from '@angular/core';
import {ErrorData} from "../../models/ErrorData";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  @Input() error!:ErrorData;
}
