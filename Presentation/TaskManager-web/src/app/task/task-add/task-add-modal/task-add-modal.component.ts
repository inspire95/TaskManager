import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { TaskService } from "src/app/shared/services/task/task.service";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";
import { Task } from "src/app/shared/models/task.model";
import { Board } from "src/app/shared/models/board.model";
import { BoardSingletonService } from "src/app/shared/singletons/board/board-singleton.service";

@Component({
    selector: "app-task-add-modal",
    templateUrl: "./task-add-modal.component.html",
    styleUrls: ["./task-add-modal.component.scss"]
})
export class TaskAddModalComponent implements OnInit {
    public frmAddTask: FormGroup;
    public modalData: any;
    constructor(
        public dialogRef: MatDialogRef<TaskAddModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private taskService: TaskService,
        private boardSingletonService: BoardSingletonService
    ) {}

    ngOnInit() {
        console.log(this.modalData);
        this.initNewTaskForm();
    }

    initNewTaskForm() {
        this.frmAddTask = this.fb.group({
            title: this.fb.control("", [Validators.required]),
            content: this.fb.control("", [Validators.required])
        });
    }

    onCancelClick(): void {
        this.dialogRef.close(undefined);
    }

    onAddClick(): void {
        const board = this.boardSingletonService.getSelectedBoard();
        const newTask = this.frmAddTask.value as Task;
        newTask.boardId = board.id;
        this.taskService
            .add(newTask)
            // .pipe(first())
            .subscribe(
                (res: Task) => {
                    this.dialogRef.close(res);
                },
                (err: Error) => {
                    this.dialogRef.close(err);
                }
            );
    }
}