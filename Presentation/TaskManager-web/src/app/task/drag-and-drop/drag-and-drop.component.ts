import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

// Models
import { Board } from "src/app/shared/models/board.model";
import { Task } from "src/app/shared/models/task.model";
import { TaskService } from "src/app/shared/services/task/task.service";
import { Status } from "src/app/shared/models/enums/status.enum";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar";
import { DragAndDrop } from "./drag-and-drop.model";
import { TaskSingletonService } from "src/app/shared/singletons/task/task-singleton.service";
import { BoardService } from "src/app/shared/services/board/board.service";
import { BoardSingletonService } from "src/app/shared/singletons/board/board-singleton.service";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
    public tasks: DragAndDrop;
    public board: Board;
    @Output() doDisableTask: EventEmitter<Task> = new EventEmitter();
    public selectedTask: Task;

    constructor(
        private taskService: TaskService,
        private snackbarService: SnackbarService,
        private taskSingletonService: TaskSingletonService,
        private boardService: BoardService,
        private boardSingletonService: BoardSingletonService
    ) {}
   
    ngOnInit() {
        this.board = this.boardSingletonService.getSelectedBoard();
        this.tasks = new DragAndDrop(this.board.tasks);
        this.taskSingletonService.hasNewTask.subscribe((newTaskCreate: boolean) => {
            if (newTaskCreate) {
                this.boardService.GetById(this.board.id).subscribe((selectedBoard: Board) => {
                    this.tasks = new DragAndDrop(selectedBoard.tasks);
                });
            }
        });
    }

    selectTask(task: Task): void {
        this.selectedTask = task;
    }

    emitDisableTask(task: Task): void {
        this.doDisableTask.emit(task);
  }

  drop(event: CdkDragDrop<string[]>, newStatus: number) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    this.selectedTask.status = newStatus;
    this.taskService
            .updateStatus(this.selectedTask)
            .toPromise()
            .then(() => {})
            .catch((err) => this.snackbarService.open(err.message));
    }
}