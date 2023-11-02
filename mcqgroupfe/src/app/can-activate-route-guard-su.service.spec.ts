import { TestBed } from '@angular/core/testing';

import { CanActivateRouteGuardSUService } from './can-activate-route-guard-su.service';

describe('CanActivateRouteGuardSUService', () => {
  let service: CanActivateRouteGuardSUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateRouteGuardSUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
