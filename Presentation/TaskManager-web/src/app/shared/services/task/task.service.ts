import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Board } from "../../models/board.model";
import { ApiResponse } from "../../models/api-response.model";

import { Task } from "../../models/task.model";

@Injectable({
    providedIn: "root"
})
export class TaskService {
    constructor(private http: HttpClient) {}

    add(task: Task): Observable<Task> {
        return this.http.post(`${environment.apiUrl}/api/task/add`, task).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Task;
                }
                throw new Error(res.message);
            })
        );
    }

    updateStatus(task: Task): Observable<Task> {
        return this.http.put(`${environment.apiUrl}/api/task/update`, task).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Task;
                }
                throw new Error(res.message);
            })
        );
    }

    disableTask(task: Task): Observable<Task> {
        return this.http.put(`${environment.apiUrl}/api/task/update`, task).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Task;
                }
                throw new Error(res.message);
            })
        );
    }
}