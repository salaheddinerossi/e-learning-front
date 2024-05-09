import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MultiChoiceQuiz} from "../../models/quizzes/MultiChoiceQuiz";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-multiple-choice-quiz',
  templateUrl: './multiple-choice-quiz.component.html',
  styleUrl: './multiple-choice-quiz.component.css'
})
export class MultipleChoiceQuizComponent {

  regenerateForm: FormGroup;
  @Input() multipleChoiceQuiz!:MultiChoiceQuiz;
  @Output() regenerateSubmit:EventEmitter<FormGroup> = new EventEmitter<any>();


  constructor(private fb:FormBuilder) {

    this.regenerateForm = this.fb.group({
      additional_instructions: ['', Validators.required],
      quizId:['']
    });

  }

  onRegenerate() {
    this.regenerateForm.patchValue({
      quizId:Number(this.multipleChoiceQuiz.id)
    })
    this.regenerateSubmit.emit(this.regenerateForm);


  }

}
