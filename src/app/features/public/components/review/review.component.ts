import {Component, Input} from '@angular/core';
import {Review} from "../../models/Review";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {

  @Input() review!:Review;

}
