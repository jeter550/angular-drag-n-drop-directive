import { TestBed } from '@angular/core/testing';

import { FjalibUploadService } from './fjalib-upload.service';

describe('FjalibUploadService', () => {
  let service: FjalibUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FjalibUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
