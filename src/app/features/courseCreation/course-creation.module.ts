import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCreationRoutingModule } from './course-creation-routing.module';
import {  Step1PageComponent } from './pages/step1-page/step1-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Step1PageComponent,
    StartPageComponent
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
