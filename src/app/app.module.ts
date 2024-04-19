import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './features/public/pages/home-page/home-page.component';
import {PublicModule} from "./features/public/public.module";
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        RouterModule,
        PublicModule,
        HttpClientModule,
        ToastrModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
