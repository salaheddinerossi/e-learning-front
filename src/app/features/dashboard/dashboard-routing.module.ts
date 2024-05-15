import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeachersRequestPageComponent} from "./pages/teachers-request-page/teachers-request-page.component";
import {SkillsPageComponent} from "./pages/skills-page/skills-page.component";
import {CategoriesPageComponent} from "./pages/categories-page/categories-page.component";
import {ReportsPageComponent} from "./pages/reports-page/reports-page.component";

const routes: Routes = [
  {
    path: 'teachers/request',
    component: TeachersRequestPageComponent

  },
  {
    path: 'skills',
    component: SkillsPageComponent

  },
  {
    path:"admin/categories",
    component:CategoriesPageComponent
  },
  {
    path:"admin/reports",
    component:ReportsPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
