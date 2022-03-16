import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private router: Router){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if (error) {
                    switch (error.status) {
                        case (error.status == 404):
                            this.router.navigateByUrl('/pagenotfound');
                            break;
                            
                        case (error.status == 400): {
                            this.router.navigateByUrl('/pagenotfound');
                            break;
                        }
                        case (error.status == 401): {
                            this.router.navigateByUrl('/pagenotfound');
                            break;
                        }
                        case (error.status == 502): {
                            this.router.navigateByUrl('/pagenotfound');
                            break;
                        }
                        case (error.status == 500): {
                            this.router.navigateByUrl('/pagenotfound');
                            break;
                        }
                          
                            default:  return throwError(error);
                    }
                }
                return EMPTY;
            })
        );
        }
        
    }