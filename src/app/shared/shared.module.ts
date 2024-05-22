import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { LargeButtonComponent } from './components/buttons/large-button/large-button.component';
import { SmallButtonComponent } from './components/buttons/small-button/small-button.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { TextAreaInputComponent } from './components/inputs/text-area-input/text-area-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FileInputComponent } from './components/inputs/file-input/file-input.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { MiddleTitleComponent } from './components/middle-title/middle-title.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {CourseComponent} from "./components/course/course.component";


@NgModule({
    declarations: [
        NavbarComponent,
        LargeButtonComponent,
        SmallButtonComponent,
        TextInputComponent,
        TextAreaInputComponent,
        SelectInputComponent,
        FileInputComponent,
        FormErrorsComponent,
        MainTitleComponent,
        BreadcrumbComponent,
        ChapterComponent,
        MiddleTitleComponent,
        TruncatePipe,
        NotFoundComponent,
        CourseComponent
    ],
    exports: [
        NavbarComponent,
        LargeButtonComponent,
        SmallButtonComponent,
        TextInputComponent,
        TextAreaInputComponent,
        SelectInputComponent,
        FileInputComponent,
        FormErrorsComponent,
        MainTitleComponent,
        BreadcrumbComponent,
        ChapterComponent,
        MiddleTitleComponent,
        TruncatePipe,
        NotFoundComponent,
        CourseComponent,


    ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
