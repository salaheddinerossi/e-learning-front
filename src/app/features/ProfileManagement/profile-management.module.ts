import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module';
import { ReportFormPageComponent } from './pages/report-form-page/report-form-page.component';


@NgModule({
  declarations: [
    ReportFormPageComponent
  ],
  imports: [
    CommonModule,
    ProfileManagementRoutingModule
  ]
})
export class ProfileManagementModule { }
