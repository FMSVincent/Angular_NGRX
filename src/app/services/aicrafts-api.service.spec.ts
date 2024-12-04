import { TestBed } from '@angular/core/testing';

import { AicraftsApiService } from './aicrafts-api.service';

describe('AicraftsApiService', () => {
  let service: AicraftsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AicraftsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
