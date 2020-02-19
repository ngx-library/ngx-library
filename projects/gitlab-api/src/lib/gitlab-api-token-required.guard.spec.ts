import { inject, TestBed } from '@angular/core/testing';

import { GitlabApiAuthService } from './gitlab-api-auth.service';
import { GitlabApiTokenRequiredGuard } from './gitlab-api-token-required-guard.service';

describe('GitlabApiTokenRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GitlabApiAuthService,
        GitlabApiTokenRequiredGuard
      ]
    });
  });

  it('should create', inject([GitlabApiTokenRequiredGuard], (guard: GitlabApiTokenRequiredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
