import { TestBed } from '@angular/core/testing';

import { TaskSingletonService } from './task-singleton.service';

describe('TaskSingletonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskSingletonService = TestBed.get(TaskSingletonService);
    expect(service).toBeTruthy();
  });
});