import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseEnrollmentRoutingModule } from './course-enrollment-routing.module';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import {SharedModule} from "../../shared/shared.module";
import { ChapterStructureComponent } from './components/chapter-structure/chapter-structure.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from "ngx-markdown";
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { NotesComponent } from './components/notes/notes.component';
import {CourseCreationModule} from "../courseCreation/course-creation.module";
import { ExplanatoryQuizFormAnswerComponent } from './components/explanatory-quiz-form-answer/explanatory-quiz-form-answer.component';
import { TrueFalseQuizFormAnswerComponent } from './components/true-false-quiz-form-answer/true-false-quiz-form-answer.component';
import { MultipleChoiceQuizFormAnswerComponent } from './components/multiple-choice-quiz-form-answer/multiple-choice-quiz-form-answer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import {NgxSpinnerComponent} from "ngx-spinner";


@NgModule({
    declarations: [

        CoursePageComponent,
        ChapterStructureComponent,
        VideoPlayerComponent,
        NotesComponent,
        ExplanatoryQuizFormAnswerComponent,
        TrueFalseQuizFormAnswerComponent,
        MultipleChoiceQuizFormAnswerComponent,
        ModalComponent,
        ReviewFormComponent
    ],
    imports: [
        CommonModule,
        CourseEnrollmentRoutingModule,
        SharedModule,
        FormsModule,
        MarkdownModule.forChild(),
        ReactiveFormsModule,
        CourseCreationModule,
        NgxSpinnerComponent
    ]
})
export class CourseEnrollmentModule { }
