import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Action } from './models/action.model';
import { ArchiveFormat } from './models/archive-fromat.enum';
import { File } from './models/file.model';
import { getPaginationFromResponse, Pagination } from './models/pagination.model';
import { PROJECTS_RESOURCES } from './models/resources/projects-resources.model';

export const GITLAB_API_BASE_PATH = new InjectionToken('GITLAB_API_BASE_PATH');

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
    return this._http.get(PROJECTS_RESOURCES.PROJECTS(undefined, this._basePath));
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
      ...buildOptionalParams({
        start_branch: options?.startBranch,
        start_sha: options?.startSha,
        start_project: options?.startProject,
        author_email: options?.authorEmail,
        author_name: options?.authorName,
        stats: options?.stats,
        force: options?.force
      })
    };

    return this._http.post(PROJECTS_RESOURCES.COMMITS(projectId, undefined, this._basePath), request);
  }

  public getProjectRepositoryTree(
    projectId: string,
    config?: { path?: string, ref?: string, recursive?: boolean, page?: number, perPage?: number }
  ): Observable<Pagination<File>> {
    const params: { path?: string, ref?: string, recursive?: string, page?: string, per_page?: string } = {};

    if (config?.path !== undefined) {
      params.path = config.path;
    }

    if (config?.ref !== undefined) {
      params.ref = config.ref;
    }

    if (config?.recursive !== undefined) {
      params.recursive = `${config.recursive}`;
    }

    if (config?.perPage !== undefined) {
      params.per_page = `${config.perPage}`;
    }

    if (config?.page !== undefined) {
      params.page = `${config.page}`;
    }

    return this._http
      .get<File[]>(PROJECTS_RESOURCES.REPOSITORY_TREE(projectId, this._basePath), {
        params,
        observe: 'response'
      })
      .pipe(map(getPaginationFromResponse));
  }

  public getProjectRepositoryArchive(
    projectId: string,
    config?: { sha?: string, format?: ArchiveFormat }
  ): Observable<Blob> {
    const format = config && config.format ? config.format : ArchiveFormat.ZIP;

    const params: { sha?: string } = {};

    if (config?.sha !== undefined) {
      params.sha = config.sha;
    }

    return this._http.get(PROJECTS_RESOURCES.REPOSITORY_ARCHIVE(projectId, format, this._basePath), {
      params,
      responseType: 'blob'
    });
  }

  public getProjectRepositoryFileRaw(
    projectId: string,
    filePath: string,
    ref: string
  ): Observable<string> {
    const params: { ref: string } = { ref };

    const headers = new HttpHeaders({
      'Content-Type': 'text/plain; charset=utf-8'
    });

    return this._http.get(PROJECTS_RESOURCES.REPOSITORY_FILES_RAW(projectId, filePath, this._basePath), {
      headers,
      params,
      responseType: 'text'
    });
  }
}
