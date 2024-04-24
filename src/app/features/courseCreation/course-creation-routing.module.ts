import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Step1PageComponent} from "./pages/step1-page/step1-page.component";
import {StartPageComponent} from "./pages/start-page/start-page.component";

const routes: Routes = [
  {path:'step1',component:Step1PageComponent},
  {path:'start',component:StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCreationRoutingModule { }
