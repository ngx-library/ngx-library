import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { GitlabApiAuthService } from './gitlab-api-auth.service';

@Injectable()
export class GitlabApiAuthInterceptorService implements HttpInterceptor {

  constructor(
    private readonly _gitlabApiAuthService: GitlabApiAuthService
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._gitlabApiAuthService
      .auth
      .pipe(
        first(),
        switchMap(({ authHeaders }) => next.handle(
          req.clone({
            headers: authHeaders
              .keys()
              .reduce((headers, key) => headers.set(key, authHeaders.get(key)), req.headers)
          })
        ))
      );
  }
}
