import { Component, OnInit } from "@angular/core";
import { TaskAddModalService } from "./task-add-modal/task-add-modal.service";
import { TaskService } from "src/app/shared/services/task/task.service";
import { SnackbarService } from "src/app/shared/components/snackbar/snackbar";
import { AuthSingletonService } from "src/app/shared/singletons/auth/auth-singleton.service";
import { TaskSingletonService } from "src/app/shared/singletons/task/task-singleton.service";
import { take } from "rxjs/operators";

@Component({
    selector: "app-task-add",
    templateUrl: "./task-add.component.html",
    styleUrls: ["./task-add.component.scss"]
})
export class TaskAddComponent implements OnInit {
    public feedback: string;
    public isLoading: boolean;
    constructor(
        private taskAddModalService: TaskAddModalService,
        private taskService: TaskService,
        private taskSingletonService: TaskSingletonService,
        private snackbarService: SnackbarService,
        private authSingletonService: AuthSingletonService
    ) {}

    ngOnInit() {
        this.feedback = "";
        this.isLoading = false;
    }

    openModal(): void {
        this.taskAddModalService.openDialog();

        this.taskAddModalService.result.pipe(take(1)).subscribe(
            (newBoard: any) => {
                if (newBoard && newBoard.hasOwnProperty("id")) {
                    this.snackbarService.open("Task created with success!");
                    this.taskSingletonService.newTaskAlert(true);
                }
                // else {
                //     this.snackbarService.open("An error has occurred. Try again... :(");
                //     console.log(newBoard.message);
                //     // this.snackbarService.open(newBoard.message);
                // }
            },
            (err: Error) => {
                if (err) {
                    this.snackbarService.open(err.message);
                }
            }
        );
    }
}