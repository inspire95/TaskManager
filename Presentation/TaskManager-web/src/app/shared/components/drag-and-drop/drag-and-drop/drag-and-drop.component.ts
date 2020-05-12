import { Component, OnInit, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

// Models
import { Board } from "src/app/shared/models/board.model";
import { Task } from "src/app/shared/models/task.model";
import { TaskService } from "src/app/shared/services/task/task.service";
import { Status } from "src/app/shared/models/enums/status.enum";
import { SnackbarService } from "../../snackbar/snackbar";

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  @Input() board: Board;
    public selectedTask: Task;
    public tasks: Task[];
    constructor(private taskService: TaskService, private snackbarService: SnackbarService) {}
    todo = [];
    doing = [];
    done = [];

    ngOnInit() {
        this.tasks = this.board.tasks;
        this.organizeTasks();
    }

    organizeTasks(): void {
        this.todo = this.tasks.filter((t) => t.status === 0);
        this.doing = this.tasks.filter((t) => t.status === 1);
        this.done = this.tasks.filter((t) => t.status === 2);
        console.log(this.todo);
    }

    selectTask(task: Task): void {
        this.selectedTask = task;
    }

    disabledTask(task: Task): void {
      task.active = false;
      this.taskService.updateStatus(task).subscribe(
          (res: Task) => {},
          (err: Error) => {
              if (err) {
                  this.snackbarService.open(err.message);
              }
          }
      );
  }

  drop(event: CdkDragDrop<string[]>, newStatus: number) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }

    this.selectedTask.status = newStatus;
    this.taskService.updateStatus(this.selectedTask).subscribe(
        (task: Task) => {},
        (err: Error) => {
            if (err) {
                this.snackbarService.open(err.message);
            }
        }
    );
}
}