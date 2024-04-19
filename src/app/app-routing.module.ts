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
  }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
