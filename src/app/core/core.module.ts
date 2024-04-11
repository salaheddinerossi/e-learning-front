import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/token.interceptor';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';
import { ApiService } from './services/api.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExceptionInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule { }
