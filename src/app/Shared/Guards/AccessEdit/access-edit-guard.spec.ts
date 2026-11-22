import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessEditGuard } from './access-edit-guard';

describe('accessEditGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessEditGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
