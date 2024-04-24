import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";

const routes: Routes = [
  {
    path:"login/:user",
    component:LoginPageComponent
  },
  {
    path:"signup/:user",
    component:SignUpPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
