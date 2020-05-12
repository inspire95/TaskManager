import { Board } from "./board.model";
import { Status } from "./enums/status.enum";

export class Task {
    id: number;
    title: string;
    content: string;
    boardId: number;
    board: Board;
    //status: Status;
    status: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}