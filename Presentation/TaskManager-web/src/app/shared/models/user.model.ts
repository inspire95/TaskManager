import { Board } from "./board.model";

export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    active: boolean;
    urlPhoto: string;
    board: Board[];
    createdAt: Date;
    UpdatedAt: Date;
}