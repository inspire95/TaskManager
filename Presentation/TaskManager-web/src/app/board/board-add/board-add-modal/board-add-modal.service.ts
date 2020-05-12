import { Injectable, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { BoardAddModalComponent } from "./board-add-modal.component";

import { take, first } from "rxjs/operators";
import { Board } from "src/app/shared/models/board.model";
import { Observable, Subscribable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BoardAddModalService {
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

        const dialogRef = this.dialog.open(BoardAddModalComponent, {
            data: {}
        });

        dialogRef
            .afterClosed()
            .pipe(first())
            .subscribe(
                (res: Board) => {
                    this.result.emit(res);
                },
                (err: Error) => {
                    this.result.emit(err);
                }
            );
    }
}