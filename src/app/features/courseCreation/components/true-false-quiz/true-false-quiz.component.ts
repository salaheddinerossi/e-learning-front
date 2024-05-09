import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TrueFalseQuiz} from "../../models/quizzes/TrueFalseQuiz";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-true-false-quiz',
  templateUrl: './true-false-quiz.component.html',
  styleUrl: './true-false-quiz.component.css'
})
export class TrueFalseQuizComponent {

  @Input() trueFalseQuiz!:TrueFalseQuiz;
  @Output() regenerateSubmit:EventEmitter<FormGroup> = new EventEmitter<any>();
  regenerateForm: FormGroup;


  constructor(private fb:FormBuilder) {

    this.regenerateForm = this.fb.group({
      additional_instructions: ['', Validators.required],
      quizId:['']
    });

  }

  onRegenerate() {
    this.regenerateForm.patchValue({
      quizId:Number(this.trueFalseQuiz.id)
    })
    this.regenerateSubmit.emit(this.regenerateForm);


  }


}
