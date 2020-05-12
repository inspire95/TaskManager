import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoardComponent } from "./board.component";
import { BoardAddComponent } from "./board-add/board-add.component";
import { SharedModule } from "../shared/shared.module";
import { BoardAddModalComponent } from "./board-add/board-add-modal/board-add-modal.component";
import { BoardListComponent } from './board-list/board-list.component';

@NgModule({
    declarations: [BoardComponent, BoardAddComponent, BoardAddModalComponent, BoardListComponent],
    imports: [CommonModule, SharedModule],
    exports: [BoardComponent, BoardAddComponent, BoardListComponent],
    entryComponents: [BoardAddModalComponent]
})
export class BoardModule {}