import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessAddUserGuard } from './access-add-user-guard';

describe('accessAddUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessAddUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
