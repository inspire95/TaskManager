import { Injectable } from "@angular/core";

// Models
import { Board } from "../../models/board.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BoardSingletonService {
    private selectedBoard: Board = undefined;
    public hasNewBoard = new BehaviorSubject<boolean>(false);
    constructor() {}

    selectBoard(board: Board): void {
        this.selectedBoard = board;
    }

    getSelectedBoard(): Board {
        return this.selectedBoard;
    }

    newBoardAlert(emitAlert: boolean) {
        this.hasNewBoard.next(emitAlert);
    }
}