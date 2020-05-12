import { Component, OnInit, Input } from "@angular/core";
import { Board } from "../shared/models/board.model";
import { Task } from "../shared/models/task.model";
import { TaskService } from "../shared/services/task/task.service";
import { SnackbarService } from "../shared/components/snackbar/snackbar";
import { DragAndDrop } from "./drag-and-drop/drag-and-drop.model";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
    @Input() board: Board;
    public selectedTask: Task;
    public tasks: DragAndDrop;
    constructor(private taskService: TaskService, private snackbarService: SnackbarService) {}

    ngOnInit() {
      this.tasks = new DragAndDrop(this.board.tasks);
    }

    disableTask(task: Task): void {
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
}