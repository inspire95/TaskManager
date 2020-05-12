import { TestBed } from '@angular/core/testing';

import { BoardSingletonService } from './board-singleton.service';

describe('BoardSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardSingletonService = TestBed.get(BoardSingletonService);
    expect(service).toBeTruthy();
  });
});