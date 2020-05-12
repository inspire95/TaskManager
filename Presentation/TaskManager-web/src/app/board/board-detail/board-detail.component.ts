import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Singleton
import { BoardSingletonService } from "src/app/shared/singletons/board/board-singleton.service";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";

// Models
import { Board } from "src/app/shared/models/board.model";
import { User } from "src/app/shared/models/user.model";

@Component({
    selector: "app-board-detail",
    templateUrl: "./board-detail.component.html",
    styleUrls: ["./board-detail.component.scss"]
})
export class BoardDetailComponent implements OnInit {
    public selectedBoard: Board;
    public user: User;
    constructor(
        private boardSingletonService: BoardSingletonService,
        private router: Router,
        private authSingletonService: AuthSingletonService
    ) {}

    ngOnInit() {
        this.user = this.authSingletonService.getUser();
        this.selectedBoard = this.boardSingletonService.getSelectedBoard();
        if (this.user === undefined || this.selectedBoard === undefined) {
            return this.router.navigateByUrl("/");
        }
    }
}