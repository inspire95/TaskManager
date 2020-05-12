import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Models
import { Board } from "src/app/shared/models/board.model";
import { User } from "src/app/shared/models/user.model";

// Services
import { BoardService } from "src/app/shared/services/board/board.service";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar";
import { BoardSingletonService } from "src/app/shared/singletons/board/board-singleton.service";
import { take } from "rxjs/operators";

// Utils
import { slugify } from "src/app/shared/utils/slugify";

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
        private snackbarService: SnackbarService,
        private boardSingletonService: BoardSingletonService
    ) {}

    ngOnInit() {
        this.getAllBoardsById();

        if (this.user === undefined) {
            return this.router.navigateByUrl("/");
        }
        
        this.boardSingletonService.hasNewBoard.subscribe((newBoardCreate: boolean) => {
          if (newBoardCreate) {
              this.getAllBoardsById();
            }
          });
        }
    
        getAllBoardsById(): void {
            this.user = this.authSingleton.getUser();
            this.boardService
                .GetAllByUserId(this.user.id)
                .pipe(take(1))
                .subscribe(
                    (boards: Board[]) => {
                        this.userBoards = boards;
                    },
                    (err: Error) => {
                        console.log(err.message);
                        this.snackbarService.open("Error has ocurred when we try get your boards. Try again another time.");
                    }
                );
    
    }
    selectBoard(board: Board): void {
      this.boardSingletonService.selectBoard(board);
      // this.router.navigateByUrl("home/board-detail");
      this.router.navigateByUrl(`${slugify(board.name)}/board-detail`);
  }
}