import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'example',
    loadChildren: () => import('./features/example/example.module').then(m => m.ExampleModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path:'',
    loadChildren : () => import('./features/courseCreation/course-creation.module').then(m => m.CourseCreationModule)
  },
  {
    path:'',
    loadChildren : () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path:'',
    loadChildren : () => import('./features/ProfileManagement/profile-management.module').then(m => m.ProfileManagementModule)
  },
  {
    path:'',
    loadChildren : () => import('./features/course-enrollment/course-enrollment.module').then(m => m.CourseEnrollmentModule)
  }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
