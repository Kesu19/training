import { TestBed } from '@angular/core/testing';

import { FirstCrudService } from './first-crud.service';

describe('FirstCrudService', () => {
  let service: FirstCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
