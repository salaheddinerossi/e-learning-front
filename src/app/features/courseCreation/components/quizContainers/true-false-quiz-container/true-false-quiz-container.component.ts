import {Component, EventEmitter, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-true-false-quiz-container',
  templateUrl: './true-false-quiz-container.component.html',
  styleUrl: './true-false-quiz-container.component.css'
})
export class TrueFalseQuizContainerComponent {

  quizForm: FormGroup;
  @Output() removeQuiz = new EventEmitter<void>();
  @Output() submitQuiz = new EventEmitter<FormGroup>();


  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      questions: this.fb.array([])  // FormArray for questions
    });
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    const questionForm = this.fb.group({
      prompt: ['', Validators.required],
      correctAnswer: [null, Validators.required]
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
