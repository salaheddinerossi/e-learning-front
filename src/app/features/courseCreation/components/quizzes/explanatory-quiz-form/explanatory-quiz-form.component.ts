import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {Option} from "../../../../../shared/models/Option";

@Component({
    selector: 'app-explanatory-quiz-form',
    templateUrl: './explanatory-quiz-form.component.html',
    styleUrl: './explanatory-quiz-form.component.css'
})
export class ExplanatoryQuizFormComponent {
    @Input() quizForm!: FormGroup;
    @Output() addQuestion = new EventEmitter<void>();
    @Output() removeQuestion = new EventEmitter<number>();
    @Output() submitForm = new EventEmitter<void>();
    @Output() removeForm = new EventEmitter<void>();

    options:Option[]=[{
        label:"true",
        value:true
    },

        {
            label:"false",
            value:false
        }

    ]

    get questions() {
        return this.quizForm.get('questions') as FormArray;
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


}
