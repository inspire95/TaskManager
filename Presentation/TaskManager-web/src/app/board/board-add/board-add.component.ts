import { Component, OnInit } from "@angular/core";
import { BoardAddModalService } from "./board-add-modal/board-add-modal.service";

@Component({
    selector: "app-board-add",
    templateUrl: "./board-add.component.html",
    styleUrls: ["./board-add.component.scss"]
})
export class BoardAddComponent implements OnInit {
    constructor(private boardAddModalService: BoardAddModalService) {}

    ngOnInit() {}

    openModal(): void {
        this.boardAddModalService.openDialog();
    }
}