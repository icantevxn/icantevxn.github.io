import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private router: Router){}
    
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError(error => {
                if (error) {
                    if (error.status === 400) {
                        this.router.navigateByUrl('/page-not-found');
                    }
                    if (error.status === 401) {
                        this.router.navigateByUrl('/page-not-found');
                    }
                    if (error.status === 404) {
                        this.router.navigateByUrl('/page-not-found');
                    }
                    if (error.status == 500) {
                        this.router.navigateByUrl('/page-not-found');
                    }
                }
                return throwError(error);
            })
            );
        }
    }
    