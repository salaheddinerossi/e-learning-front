import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module';
import { ReportFormPageComponent } from './pages/report-form-page/report-form-page.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { TeacherProfileComponent } from './pages/teacher-profile/teacher-profile.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { InfoComponent } from './components/info/info.component';
import { PasswordUpdateComponent } from './components/password-update/password-update.component';
import { SkillComponent } from './components/skill/skill.component';


@NgModule({
  declarations: [
    ReportFormPageComponent,
    TeacherProfileComponent,
    StudentProfileComponent,
    InfoComponent,
    PasswordUpdateComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    ProfileManagementRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProfileManagementModule { }
