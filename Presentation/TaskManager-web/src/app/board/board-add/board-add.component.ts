import { Component, OnInit } from "@angular/core";
import { BoardAddModalService } from "./board-add-modal/board-add-modal.service";

import { take } from "rxjs/operators";
import { Board } from "src/app/shared/models/board.model";
import { BoardService } from "src/app/shared/services/board/board.service";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";

@Component({
    selector: "app-board-add",
    templateUrl: "./board-add.component.html",
    styleUrls: ["./board-add.component.scss"]
})
export class BoardAddComponent implements OnInit {
    public feedback: string;
    public isLoading: boolean;
    constructor(
        private boardAddModalService: BoardAddModalService,
        private boardService: BoardService,
        private snackbarService: SnackbarService,
        private authSingletonService: AuthSingletonService
    ) {}

    ngOnInit() {
        this.feedback = "";
        this.isLoading = false;
    }

    openModal(): void {
        this.boardAddModalService.openDialog();
        this.boardAddModalService.result.pipe(take(1)).subscribe(
            (newBoard: any) => {
                if (newBoard.hasOwnProperty("id")) {
                    this.snackbarService.open("Board created with success!");
                } else {
                    this.snackbarService.open("An error has occurred. Try again... :(");
                    console.log(newBoard.message);
                    // this.snackbarService.open(newBoard.message);
                }
            },
            (err: Error) => {
                this.snackbarService.open(err.message);
            }
        );
    }
}