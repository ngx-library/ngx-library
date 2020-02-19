import { ModuleWithProviders, NgModule } from '@angular/core';

import { GitlabApiAuthService } from './gitlab-api-auth.service';
import { GITLAB_API_BASE_PATH, GitlabApiService } from './gitlab-api.service';

@NgModule({})
export class GitlabApiModule {
  public static forRoot(config?: { basePath?: string }): ModuleWithProviders<GitlabApiModule> {
    return {
      ngModule: GitlabApiModule,
      providers: [
        { provide: GITLAB_API_BASE_PATH, useValue: config && config.basePath ? config.basePath : '/api/v4' },
        GitlabApiAuthService,
        GitlabApiService
      ]
    };
  }
}
