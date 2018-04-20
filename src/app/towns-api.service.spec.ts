import { TestBed, inject } from '@angular/core/testing';

import { TownsApiService } from './towns-api.service';

describe('TownsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownsApiService]
    });
  });

  it('should be created', inject([TownsApiService], (service: TownsApiService) => {
    expect(service).toBeTruthy();
  }));
});
