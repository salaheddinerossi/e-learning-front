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



@NgModule({
  declarations: [
    NavbarComponent,
    LargeButtonComponent,
    SmallButtonComponent,
    TextInputComponent,
    TextAreaInputComponent,
    SelectInputComponent,
    FileInputComponent,
    FormErrorsComponent
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


    ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
