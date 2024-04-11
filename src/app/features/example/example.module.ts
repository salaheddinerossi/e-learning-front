import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { Page1Component } from './pages/page1/page1.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExampleModule { }
