import { TestBed } from '@angular/core/testing';

import { TaskAddModalService } from './task-add-modal.service';

describe('TaskAddModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskAddModalService = TestBed.get(TaskAddModalService);
    expect(service).toBeTruthy();
  });
});