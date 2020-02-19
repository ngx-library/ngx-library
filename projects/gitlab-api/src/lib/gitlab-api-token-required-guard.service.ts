import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, race, timer } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { GitlabApiAuthService } from './gitlab-api-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GitlabApiTokenRequiredGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly _gitlabApiAuthService: GitlabApiAuthService
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return race(this._gitlabApiAuthService.auth, timer(500))
      .pipe(
        first(),
        map((arg) => arg !== 0)
      );
  }
  public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

}
