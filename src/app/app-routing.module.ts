import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./shared/components/navbar/navbar.component";

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
  }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
