import { Task } from "src/app/shared/models/task.model";

export class DragAndDrop {
    constructor(tasks: Task[]) {
        this.organizeTasks(tasks);
    }

    todo: Task[];
    doing: Task[];
    done: Task[];
    
    organizeTasks(tasks: Task[]): void {
        this.todo = tasks.filter((t) => t.status === 0) as Task[];
        this.doing = tasks.filter((t) => t.status === 1) as Task[];
        this.done = tasks.filter((t) => t.status === 2) as Task[];
    }
}