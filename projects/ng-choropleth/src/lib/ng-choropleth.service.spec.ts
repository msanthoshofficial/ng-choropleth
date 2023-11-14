import { TestBed } from '@angular/core/testing';

import { NgChoroplethService } from './ng-choropleth.service';

describe('NgChoroplethService', () => {
  let service: NgChoroplethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgChoroplethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
