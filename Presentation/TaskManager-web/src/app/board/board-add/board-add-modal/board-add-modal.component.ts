import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";

@Component({
    selector: "app-board-add-modal",
    templateUrl: "./board-add-modal.component.html",
    styleUrls: ["./board-add-modal.component.scss"]
})
export class BoardAddModalComponent implements OnInit {
    modalData: any;
    constructor(public dialogRef: MatDialogRef<BoardAddModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.modalData = data;
    }

    ngOnInit() {
        console.log(this.modalData);
    }

    onNoClick(): void {
        this.dialogRef.close(false);
    }

    onYesClick(): void {
        this.dialogRef.close(true);
    }
}