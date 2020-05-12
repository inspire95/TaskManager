import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragAndDropComponent } from "src/app/task/drag-and-drop/drag-and-drop.component";
import { SharedModule } from "../shared/shared.module";
import { TaskComponent } from "./task.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TaskAddModalComponent } from './task-add/task-add-modal/task-add-modal.component';
import { TaskAddComponent } from "./task-add/task-add.component";


@NgModule({
    declarations: [TaskComponent, DragAndDropComponent, TaskAddComponent, TaskAddModalComponent],
    exports: [TaskComponent, DragAndDropComponent, DragDropModule],
    imports: [CommonModule, SharedModule, DragDropModule],
    entryComponents: [TaskAddModalComponent]
})
export class TaskModule {}