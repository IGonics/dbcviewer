import { TestBed } from '@angular/core/testing';

import { DbcPreviewService } from './dbc-preview.service';

describe('DbcPreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbcPreviewService = TestBed.get(DbcPreviewService);
    expect(service).toBeTruthy();
  });
});
