import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req; 

    if (typeof window !== 'undefined') {
      const authToken = localStorage.getItem('token');
      if (authToken) {
        console.log("set token")
        authReq = req.clone({
          headers: req.headers
            .set('Authorization', `Bearer ${authToken}`)
            .set('Content-Type', 'application/json')
        });
      }
    }

    return next.handle(authReq);
  }
}
