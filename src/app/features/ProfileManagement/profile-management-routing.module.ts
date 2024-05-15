import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsPageComponent} from "../dashboard/pages/skills-page/skills-page.component";
import {ReportFormPageComponent} from "./pages/report-form-page/report-form-page.component";

const routes: Routes = [
  {
    path: '/report',
    component:ReportFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
