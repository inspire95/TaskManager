import { Injectable, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material";
import { BoardAddModalComponent } from "./board-add-modal.component";

import { take } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class BoardAddModalService {
    result: EventEmitter<Boolean> = new EventEmitter();

    constructor(public dialog: MatDialog) {}

    openDialog() {
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
            .pipe(take(1))
            .subscribe((value) => {
                this.result.emit(value);
            });
    }
}