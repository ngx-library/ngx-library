import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Action } from './models/action.model';

export const GITLAB_API_BASE_PATH = new InjectionToken('GITLAB_API_BASE_PATH');

export enum ArchiveFormat {
  TAR_GZ = 'tar.gz',
  TAR_BZ2 = 'tar.bz2',
  TBZ = 'tbz',
  TBZ2 = 'tbz2',
  TB2 = 'tb2',
  BZ2 = 'bz2',
  TAR = 'tar',
  ZIP = 'zip'
}

function buildOptionalParams(params: { [key: string]: any }): any {
  return Object.entries(params)
    .reduce((obj, [key, value]) => {
      if (value !== undefined) {
        obj[key] = value;
      }

      return obj;
    }, {});
}

@Injectable()
export class GitlabApiService {

  constructor(
    @Inject(GITLAB_API_BASE_PATH) private readonly _basePath: string,
    private readonly _http: HttpClient
  ) {

  }

  public getProjects(): Observable<any> {
    return this._http.get(`${this._basePath}/projects`);
  }

  public commit(
    projectId: string,
    projectPath: string,
    branch: string,
    message: string,
    actions: Action[],
    options?: {
      startBranch?: string,
      startSha?: string,
      startProject?: number | string,
      authorEmail?: string,
      authorName?: string,
      stats?: boolean,
      force?: boolean
    }
  ): Observable<any> {
    const request = {
      id: encodeURI(projectPath),
      branch,
      commit_message: message,
      actions,
      ...buildOptionalParams(
        options !== undefined
          ? {
            start_branch: options.startBranch,
            start_sha: options.startSha,
            start_project: options.startProject,
            author_email: options.authorEmail,
            author_name: options.authorName,
            stats: options.stats,
            force: options.force
          }
          : {}
      )
    };

    return this._http.post(`${this._basePath}/projects/${projectId}/repository/commits`, request);
  }

  public getProjectRepositoryArchive(projectId: string, config?: { sha?: string, format?: ArchiveFormat }): Observable<Blob> {
    const format = config && config.format ? config.format : ArchiveFormat.ZIP;

    const params: { sha?: string } = {};

    if (config && config.sha) {
      params.sha = config.sha;
    }

    return this._http.get(`${this._basePath}/projects/${projectId}/repository/archive.${format}`, {
      params,
      responseType: 'blob'
    });
  }
}
