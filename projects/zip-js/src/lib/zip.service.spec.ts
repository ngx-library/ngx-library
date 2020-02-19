import { TestBed } from '@angular/core/testing';

import { ZIP_WORKER_SCRIPTS_PATH, ZipService } from './zip.service';

describe('ZipService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ZIP_WORKER_SCRIPTS_PATH, useValue: '/assets/zip-js' },
      ZipService
    ]
  }));

  it('should be created', () => {
    const service = TestBed.inject(ZipService);
    expect(service).toBeTruthy();
  });
});
