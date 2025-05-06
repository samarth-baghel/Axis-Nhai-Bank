import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {


    constructor(private spinner: NgxSpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /// start the loader
        this.spinner.show();
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                /// Time to finish the loader
                this.spinner.hide();
            }
        },
            (err: any) => {
                /// Oops error ! End the loader
                this.spinner.hide();
            }));
    }

}
