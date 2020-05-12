import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material";

@Injectable({
    providedIn: "root"
})
export class SnackbarService {
    private duration: 8000;
    private horizontalPosition: MatSnackBarHorizontalPosition = "right";
    private verticalPosition: MatSnackBarVerticalPosition = "top";

    constructor(public snackBar: MatSnackBar) {}

    open(message) {
        this.snackBar.open(message, "X", {
            duration: this.duration,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition
        });
    }
}