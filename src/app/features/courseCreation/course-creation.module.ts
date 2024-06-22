import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCreationRoutingModule } from './course-creation-routing.module';
import {  Step1PageComponent } from './pages/step1-page/step1-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Step2PageComponent } from './pages/step2-page/step2-page.component';
import {Step3PageComponent} from "./pages/step3-page/step3-page.component";
import { AdvicesComponent } from './components/advices/advices.component';
import { LeftTitleComponent } from './components/left-title/left-title.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ExplanatoryQuizComponent } from './components/explanatory-quiz/explanatory-quiz.component';
import { TrueFalseQuizComponent } from './components/true-false-quiz/true-false-quiz.component';
import { MultipleChoiceQuizComponent } from './components/multiple-choice-quiz/multiple-choice-quiz.component';
import { PublishPageComponent } from './pages/publish-page/publish-page.component';
import { MultiChoiceQuizContainerComponent } from './components/quizContainers/multi-choice-quiz-container/multi-choice-quiz-container.component';
import { ExplanatoryQuizContainerComponent } from './components/quizContainers/explanatory-quiz-container/explanatory-quiz-container.component';
import { TrueFalseQuizContainerComponent } from './components/quizContainers/true-false-quiz-container/true-false-quiz-container.component';
import {MultiChoiceQuizFormComponent} from "./components/quizzes/multi-choice-quiz-form/multi-choice-quiz-form.component";
import {TrueFalseQuizFormComponent} from "./components/quizzes/true-false-quiz-form/true-false-quiz-form.component";
import {ExplanatoryQuizFormComponent} from "./components/quizzes/explanatory-quiz-form/explanatory-quiz-form.component";
import {NgxSpinnerComponent} from "ngx-spinner";

@NgModule({
    declarations: [
        Step1PageComponent,
        StartPageComponent,
        Step2PageComponent,
        Step3PageComponent,
        AdvicesComponent,
        LeftTitleComponent,
        SummaryComponent,
        ExplanatoryQuizComponent,
        TrueFalseQuizComponent,
        MultipleChoiceQuizComponent,
        PublishPageComponent,
        MultiChoiceQuizContainerComponent,
        ExplanatoryQuizContainerComponent,
        TrueFalseQuizContainerComponent,
        MultiChoiceQuizFormComponent,
        ExplanatoryQuizFormComponent,
        TrueFalseQuizFormComponent
    ],
    exports: [
        TrueFalseQuizFormComponent,
        ExplanatoryQuizContainerComponent,
        ExplanatoryQuizFormComponent
    ],
    imports: [
        CommonModule,
        CourseCreationRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerComponent,
    ]
})
export class CourseCreationModule { }
