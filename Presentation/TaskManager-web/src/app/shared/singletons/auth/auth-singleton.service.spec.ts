import { TestBed } from '@angular/core/testing';

import { AuthSingletonService } from './auth-singleton.service';

describe('AuthSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSingletonService = TestBed.get(AuthSingletonService);
    expect(service).toBeTruthy();
  });
});