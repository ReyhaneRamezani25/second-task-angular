import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessDetailGuard } from './access-detail-guard';

describe('accessDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
