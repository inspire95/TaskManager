import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Models
import { Board } from "src/app/shared/models/board.model";
import { User } from "src/app/shared/models/user.model";

// Services
import { BoardService } from "src/app/shared/services/board/board.service";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar";

@Component({
    selector: "app-board-list",
    templateUrl: "./board-list.component.html",
    styleUrls: ["./board-list.component.scss"]
})
export class BoardListComponent implements OnInit {
    public user: User;
    public userBoards: Board[] = [];

    constructor(
        private boardService: BoardService,
        private authSingleton: AuthSingletonService,
        private router: Router,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit() {
        this.user = this.authSingleton.getUser();

        if (this.user === undefined) {
            return this.router.navigateByUrl("/");
        }
        this.boardService.GetAllByUserId(this.user.id).subscribe(
            (boards: Board[]) => {
                this.userBoards = boards;
            },
            (err: Error) => {
                console.log(err.message);
                this.snackbarService.open("Error has ocurred when we try get your boards. Try again another time.");
            }
        );
    }
}