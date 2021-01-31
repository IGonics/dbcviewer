import { TestBed } from '@angular/core/testing';

import { DbcExtractorService } from './dbc-extractor.service';

describe('DbcExtractorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbcExtractorService = TestBed.get(DbcExtractorService);
    expect(service).toBeTruthy();
  });
});
