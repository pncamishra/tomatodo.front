import { TestBed } from '@angular/core/testing';

import { TomatodoService } from './tomatodo.service';

describe('TomatodoService', () => {
  let service: TomatodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomatodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
