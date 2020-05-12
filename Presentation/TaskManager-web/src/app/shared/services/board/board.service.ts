import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Board } from "../../models/board.model";
import { ApiResponse } from "../../models/api-response.model";

@Injectable({
    providedIn: "root"
})
export class BoardService {
    constructor(private http: HttpClient) {}

    Add(board: Board): Observable<Board> {
        return this.http.post(`${environment.apiUrl}/api/board/add`, board).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Board;
                }
                throw new Error(res.message);
            })
        );
    }
    
    GetAllByUserId(userId: number): Observable<Board[]> {
        return this.http.get(`${environment.apiUrl}/api/board/getallbyuserId/${userId}`).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Board[];
                }
                throw new Error(res.message);
            })
        );
    }
    
    GetById(boardId: number): Observable<Board> {
        return this.http.get(`${environment.apiUrl}/api/board/getbyid/${boardId}`).pipe(
            map((res: ApiResponse) => {
                if (res.status === 200) {
                    return res.content as Board;
                }
                throw new Error(res.message);
            })
        );
    }
}