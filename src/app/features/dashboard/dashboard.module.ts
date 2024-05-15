import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TeachersRequestPageComponent} from "./pages/teachers-request-page/teachers-request-page.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { TableTitleComponent } from './components/table-title/table-title.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    TeachersRequestPageComponent,
    TableTitleComponent,
    SkillsPageComponent,
    CategoriesPageComponent,
    ReportsPageComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
