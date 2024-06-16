import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionResponses} from "../../models/QuestionResponses";
import {QuestionsWithForm} from "../../models/QuestionsWithForm";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Question} from "../../models/Question";

@Component({
  selector: 'app-explanatory-quiz-form-answer',
  templateUrl: './explanatory-quiz-form-answer.component.html',
  styleUrl: './explanatory-quiz-form-answer.component.css'
})
export class ExplanatoryQuizFormAnswerComponent {
  @Input() questionResponsesList: QuestionResponses[] = [];
  @Output() submitExplanatoryQuizForm = new EventEmitter<QuestionsWithForm>();
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.quizForm = this.fb.group({
      questions: this.fb.array([])
    });

    this.questionResponsesList.forEach(question => {
      this.questions.push(this.fb.group({
        id: [question.id],
        answer: ['']
      }));
    });

  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  onSubmit() {
    const questionsControl = this.quizForm.get('questions');
    if (questionsControl) {
      const questions: Question[] = questionsControl.value;
      let questionsWithForm:QuestionsWithForm={
        questions:questions,
        form:this.quizForm
      }
      this.submitExplanatoryQuizForm.emit(questionsWithForm);
    }
  }


}
