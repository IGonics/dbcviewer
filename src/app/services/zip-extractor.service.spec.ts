import { TestBed } from '@angular/core/testing';

import { ZipExtractorService } from './zip-extractor.service';

describe('ZipExtractorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZipExtractorService = TestBed.get(ZipExtractorService);
    expect(service).toBeTruthy();
  });
});
