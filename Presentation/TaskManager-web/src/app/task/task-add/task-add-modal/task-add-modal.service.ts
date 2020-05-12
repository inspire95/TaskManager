import { Injectable, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { TaskAddModalComponent } from "./task-add-modal.component";
import { first } from "rxjs/operators";
import { Task } from "src/app/shared/models/task.model";

@Injectable({
    providedIn: "root"
})
export class TaskAddModalService {
    result: EventEmitter<any> = new EventEmitter();
    constructor(public dialog: MatDialog) {}

    closeDialog(): void {
        this.dialog.closeAll();
    }

    openDialog(): void {
        // openDialog(action, message) {
        // const data = {
        //     action,
        //     message
        // };
        // const dialogRef = this.dialog.open(BoardAddModalComponent, {
        //     data: data
        // });

        const dialogRef = this.dialog.open(TaskAddModalComponent, {
            data: {}
        });

        dialogRef
            .afterClosed()
            .pipe(first())
            .subscribe(
                (res: Task) => {
                    this.result.emit(res);
                },
                (err: Error) => {
                    this.result.emit(err);
                }
            );
    }
}