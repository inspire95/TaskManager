import { User } from "./user.model";
import { Board } from "./board.model";

export class UserGroup {
    isAdministrator: boolean;
    userId: number;
    user: User;
    boardId: number;
    board: Board;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}