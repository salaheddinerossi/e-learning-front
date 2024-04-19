import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.toastr.error('Your session has expired. Please log in again.', 'Unauthorized');
                } else if (error.error instanceof ErrorEvent || error.status === 0) {
                    this.toastr.error('Please check your internet connection or try again.', 'Network Error');
                } else {
                    this.toastr.error('An unexpected server error occurred. Please try again.', 'Server Error');
                }
                return throwError(() => error);
            })
        );
    }
}
