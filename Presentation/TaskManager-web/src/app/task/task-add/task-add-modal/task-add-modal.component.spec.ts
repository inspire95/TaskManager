import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddModalComponent } from './task-add-modal.component';

describe('TaskAddModalComponent', () => {
  let component: TaskAddModalComponent;
  let fixture: ComponentFixture<TaskAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});