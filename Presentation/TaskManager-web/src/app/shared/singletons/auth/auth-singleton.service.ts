import { Injectable } from "@angular/core";
import { User } from "../../models/user.model";

@Injectable({
    providedIn: "root"
})
export class AuthSingletonService {
    constructor() {}

    saveUser(user: User): void {
        sessionStorage.setItem("@TaskManager-User", JSON.stringify(user));
    }

    getUser(): User {
        const user = sessionStorage.getItem("@TaskManager-User");
        return JSON.parse(user) || undefined;
    }
}