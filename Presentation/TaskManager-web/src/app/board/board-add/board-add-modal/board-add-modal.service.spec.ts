import { TestBed } from '@angular/core/testing';

import { BoardAddModalService } from './board-add-modal.service';

describe('BoardAddModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardAddModalService = TestBed.get(BoardAddModalService);
    expect(service).toBeTruthy();
  });
});