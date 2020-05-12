import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoardComponent } from "./board.component";
import { BoardAddComponent } from "./board-add/board-add.component";
import { SharedModule } from "../shared/shared.module";
import { BoardAddModalComponent } from "./board-add/board-add-modal/board-add-modal.component";
import { BoardListComponent } from './board-list/board-list.component';
import { BoardDetailComponent } from './board-detail/board-detail.component';
import { TaskModule } from "../task/task.module";

@NgModule({
    declarations: [BoardComponent, BoardAddComponent, BoardAddModalComponent, BoardListComponent, BoardDetailComponent],
    imports: [CommonModule, SharedModule, TaskModule],
    exports: [BoardComponent, BoardAddComponent, BoardListComponent, BoardDetailComponent],
    entryComponents: [BoardAddModalComponent]
})
export class BoardModule {}