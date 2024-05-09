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
  ],
    imports: [
        CommonModule,
        CourseCreationRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CourseCreationModule { }
