import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../../models/user.model";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthSingletonService {
    public user: User;
    isloggedIn = new BehaviorSubject<boolean>(false);
    constructor() {}

    saveUser(user: User): void {
        sessionStorage.setItem("@TaskManager-User", JSON.stringify(user));
        this.isloggedIn.next(true);
    }

    getUser(): User {
        const user = sessionStorage.getItem("@TaskManager-User");
        if (user) {
            this.isloggedIn.next(true);
        }
        return JSON.parse(user) || undefined;
    }
    
    destroyUser(): void {
        this.user = undefined;
        this.isloggedIn.next(false);
    }
}