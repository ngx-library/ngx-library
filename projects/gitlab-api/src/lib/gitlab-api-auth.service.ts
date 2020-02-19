import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export enum GitlabApiAuthType {
  O_AUTH_2,
  PERSONAL_ACCESS_TOKEN
}
export class GitlabApiAuth {
  public readonly authHeaders: HttpHeaders;

  public readonly type: GitlabApiAuthType;
  public readonly token: string;

  constructor(type: GitlabApiAuthType, token: string) {
    this.type = type;
    this.token = token;

    switch (this.type) {
      case GitlabApiAuthType.O_AUTH_2:
        this.authHeaders = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
        break;
      case GitlabApiAuthType.PERSONAL_ACCESS_TOKEN:
        this.authHeaders = new HttpHeaders({ 'Private-Token': `${this.token}` });
        break;
      default:
        throw new Error('Gitlab Auth Token');
    }
  }
}

@Injectable()
export class GitlabApiAuthService {

  public readonly auth: Observable<GitlabApiAuth>;

  private readonly _auth: ReplaySubject<GitlabApiAuth>;

  constructor() {
    this._auth = new ReplaySubject<GitlabApiAuth>(1);
    this.auth = this._auth.asObservable();
  }

  public setToken(type: GitlabApiAuthType, token: string): void {
    const auth = new GitlabApiAuth(type, token);

    this._auth.next(auth);
  }
}
