import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { BoardService } from "src/app/shared/services/board/board.service";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";
import { Board } from "src/app/shared/models/board.model";
import { map, first } from "rxjs/operators";

@Component({
    selector: "app-board-add-modal",
    templateUrl: "./board-add-modal.component.html",
    styleUrls: ["./board-add-modal.component.scss"]
})
export class BoardAddModalComponent implements OnInit {
    public frmAddBoard: FormGroup;
    public modalData: any;

    constructor(
        public dialogRef: MatDialogRef<BoardAddModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        private boardService: BoardService,
        private authSingletonService: AuthSingletonService
    ) {
        this.modalData = data;
    }

    ngOnInit() {
        console.log(this.modalData);
        this.initNewBoardForm();
    }

    initNewBoardForm() {
        this.frmAddBoard = this.fb.group({
            name: this.fb.control("", [Validators.required]),
            description: this.fb.control("", [Validators.required])
        });
    }

    onCancelClick(): void {
        this.dialogRef.close(undefined);
    }

    onAddClick(): void {
        const user = this.authSingletonService.getUser();
        const newBoard = this.frmAddBoard.value as Board;
        newBoard.userId = user.id;
        this.boardService
            .Add(newBoard)
            .pipe(first())
            .subscribe(
                (res: Board) => {
                    this.dialogRef.close(res);
                },
                (err: Error) => {
                    this.dialogRef.close(err);
                }
            );
    }
}