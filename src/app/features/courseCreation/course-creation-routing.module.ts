import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Step1PageComponent} from "./pages/step1-page/step1-page.component";
import {StartPageComponent} from "./pages/start-page/start-page.component";
import {Step2PageComponent} from "./pages/step2-page/step2-page.component";
import {Step3PageComponent} from "./pages/step3-page/step3-page.component";

const routes: Routes = [
  {path:'step1',component:Step1PageComponent},
  {path:'step1/:id',component:Step1PageComponent},
  {path:'start',component:StartPageComponent},
  {path:'step2/:id',component:Step2PageComponent},
  {path:'step2/:id/:chapterId',component:Step2PageComponent},

  {path:'step3/:id',component:Step3PageComponent},
  {path:'step3/:id/:lessonId',component:Step3PageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCreationRoutingModule { }
