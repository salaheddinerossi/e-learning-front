import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsPageComponent} from "../dashboard/pages/skills-page/skills-page.component";
import {ReportFormPageComponent} from "./pages/report-form-page/report-form-page.component";
import {TeacherProfileComponent} from "./pages/teacher-profile/teacher-profile.component";
import {StudentProfileComponent} from "./pages/student-profile/student-profile.component";

const routes: Routes = [
  {
    path: 'report',
    component:ReportFormPageComponent
  },
  {
    path: 'student/profile',
    component:StudentProfileComponent
  },
  {
    path: 'teacher/profile',
    component:TeacherProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
