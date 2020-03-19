import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import { UserService } from '../../UserPages/user.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService: UserService;
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(UserService);
    const token: string = this.authService.getToken();
    if (token) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });
    }

    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpErrorResponse && event.status === 401) {
            console.log(event);
          }
          return event;
        }));
  }
}
