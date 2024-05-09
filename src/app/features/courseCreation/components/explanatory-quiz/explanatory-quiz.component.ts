import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExplanatoryQuiz} from "../../models/quizzes/ExplanatoryQuiz";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-explanatory-quiz',
  templateUrl: './explanatory-quiz.component.html',
  styleUrl: './explanatory-quiz.component.css'
})
export class ExplanatoryQuizComponent {

  regenerateForm: FormGroup;
  @Input() explanatoryQuiz!:ExplanatoryQuiz;
  @Output() regenerateSubmit:EventEmitter<FormGroup> = new EventEmitter<any>();


  constructor(private fb:FormBuilder) {

    this.regenerateForm = this.fb.group({
      additional_instructions: ['', Validators.required],
      quizId:['']
    });

  }

  onRegenerate() {
    this.regenerateForm.patchValue({
      quizId:Number(this.explanatoryQuiz.id)
    })
    this.regenerateSubmit.emit(this.regenerateForm);


  }


}
