import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../../models/task.model";

@Injectable({
    providedIn: "root"
})
export class TaskSingletonService {
    private selectedTask: Task = undefined;
    public hasNewTask = new BehaviorSubject<boolean>(false);
    constructor() {}

    selectTask(task: Task): void {
        this.selectedTask = task;
    }

    getSelectedBoard(): Task {
        return this.selectedTask;
    }

    newTaskAlert(emitAlert: boolean) {
        this.hasNewTask.next(emitAlert);
    }
}