import { TestBed } from '@angular/core/testing';

import { GitlabApiAuthInterceptorService } from './gitlab-api-auth-interceptor.service';
import { GitlabApiAuthService } from './gitlab-api-auth.service';

describe('GitlabApiAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GitlabApiAuthService,
      GitlabApiAuthInterceptorService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(GitlabApiAuthInterceptorService);
    expect(service).toBeTruthy();
  });
});
