import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {

  @Output() cancel=new EventEmitter<any>();
  @Output() submitForm =new EventEmitter<FormGroup>();
  reviewForm:FormGroup;

  options =[1,2,3,4,5]


  constructor(private fb:FormBuilder) {

    this.reviewForm = this.fb.group(
      {
        review:['', Validators.required],
        comment:['']
      }
    )
  }

  cancelModal() {
    this.cancel.emit();
  }

  submitReview() {
    this.submitForm.emit(this.reviewForm);
  }

}
