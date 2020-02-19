import { TestBed } from '@angular/core/testing';

import { GitlabApiAuthService } from './gitlab-api-auth.service';

describe('GitlabApiAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GitlabApiAuthService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(GitlabApiAuthService);
    expect(service).toBeTruthy();
  });
});
