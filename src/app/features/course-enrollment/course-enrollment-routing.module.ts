import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursePageComponent} from "./pages/course-page/course-page.component";

const routes: Routes = [
  {
    path:"enrollment/:courseId",
    component:CoursePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseEnrollmentRoutingModule { }
