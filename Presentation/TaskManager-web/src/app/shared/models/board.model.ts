import { UserGroup } from "./usergroup.model";
import { Task } from "./task.model";

export class Board {
    id: number;
    name: string;
    description: string;
    userId: number;
    active: boolean;
    usergroups: UserGroup[];
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
}