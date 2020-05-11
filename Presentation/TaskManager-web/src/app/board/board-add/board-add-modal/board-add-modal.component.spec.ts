import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAddModalComponent } from './board-add-modal.component';

describe('BoardAddModalComponent', () => {
  let component: BoardAddModalComponent;
  let fixture: ComponentFixture<BoardAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});