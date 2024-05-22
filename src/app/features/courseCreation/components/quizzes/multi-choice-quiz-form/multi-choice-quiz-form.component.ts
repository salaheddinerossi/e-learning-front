import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-multi-choice-quiz-form',
  templateUrl: './multi-choice-quiz-form.component.html',
  styleUrls: ['./multi-choice-quiz-form.component.css']
})
export class MultiChoiceQuizFormComponent {

  @Input() quizForm!: FormGroup;
  @Output() addQuestion = new EventEmitter<void>();
  @Output() removeQuestion = new EventEmitter<number>();
  @Output() submitForm = new EventEmitter<void>();
  @Output() removeForm = new EventEmitter<void>();

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  addOption(questionIndex: number) {
    const questionFormGroup = this.questions.at(questionIndex) as FormGroup;
    const options = questionFormGroup.get('options') as FormArray;
    options.push(new FormControl('', Validators.required));
  }

  removeOption(questionIndex: number, optionIndex: number) {
    const questionFormGroup = this.questions.at(questionIndex) as FormGroup;
    const options = questionFormGroup.get('options') as FormArray;
    options.removeAt(optionIndex);
  }


  onAddQuestion() {
    this.addQuestion.emit();
  }

  onRemoveQuestion(index: number) {
    this.removeQuestion.emit(index);
  }

  onSubmit() {
    this.submitForm.emit();
  }

  onRemoveQuiz() {
    this.removeForm.emit();
  }

  getOptions(question: AbstractControl) {
    return (question.get('options') as FormArray).controls;
  }

}
