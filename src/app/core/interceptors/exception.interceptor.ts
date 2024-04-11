import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Not Found (404):', error.message);
          this.router.navigate(['/404']);
        } else if (error.status === 401) {
          console.error('Unauthorized (401):', error.message);
          this.router.navigate(['/401']);
        } else if (error.error instanceof ErrorEvent || error.status === 0) {
            // should alert user ...
          console.error('An error occurred:', error.error.message || 'Server not found, possibly due to a network error.');

        }

        return throwError(() => error);
      }),
    );
  }
}
