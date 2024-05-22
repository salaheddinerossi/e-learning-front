import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-choice-quiz-container',
  templateUrl: './multi-choice-quiz-container.component.html',
  styleUrls: ['./multi-choice-quiz-container.component.css']
})
export class MultiChoiceQuizContainerComponent {

  quizForm: FormGroup;
  @Output() removeQuiz = new EventEmitter<void>();
  @Output() submitQuiz = new EventEmitter<void>();
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
      options: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required)
      ]),
      correctAnswer: [null, Validators.required]
    });
    this.questions.push(questionForm);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    this.submitQuiz.emit(this.quizForm.value)
  }

  removeForm() {
    this.removeQuiz.emit();
  }
}
