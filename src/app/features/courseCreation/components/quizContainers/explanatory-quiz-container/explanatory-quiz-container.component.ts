import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-explanatory-quiz-container',
  templateUrl: './explanatory-quiz-container.component.html',
  styleUrl: './explanatory-quiz-container.component.css'
})
export class ExplanatoryQuizContainerComponent {

  quizForm: FormGroup;
  @Output() removeQuiz = new EventEmitter<void>();
  @Output() submitQuiz = new EventEmitter<FormGroup>();


  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      questions: this.fb.array([])
    });
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    const questionForm = this.fb.group({
      prompt: ['', Validators.required],
      correctExplanation: [null, Validators.required]
    });
    this.questions.push(questionForm);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    this.submitQuiz.emit(this.quizForm)
  }

  removeForm() {
    this.removeQuiz.emit();
  }

}
