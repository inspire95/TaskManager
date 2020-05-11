import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AuthService } from "../shared/services/auth/auth.service";
import { Auth } from "../shared/models/auth.model";
import { catchError } from "rxjs/operators";
import { User } from "../shared/models/user.model";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
    public frmAuth: FormGroup;
    public mode: string;
    public userLogged: User;
    public feedback: string;

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit() {
      this.mode = "signin";
      this.initSigninForm();
  }

  toggleMode(): void {
    if (this.mode === "signup") {
        this.mode = "signin";
        this.initSigninForm();
    } else {
        this.mode = "signup";
        this.initSignupForm();
    }
}

initSigninForm() {
    this.frmAuth = this.fb.group({
        email: this.fb.control("", [Validators.required, Validators.email]),
        password: this.fb.control("", [Validators.required])
    });
}

initSignupForm(): void {
      this.frmAuth = this.fb.group({
        name: this.fb.control("", [Validators.required]),
        email: this.fb.control("", [Validators.required, Validators.email]),
        password: this.fb.control("", [Validators.required]),
        confirmPassword: this.fb.control("", [Validators.required])
      });
  }

  signin(): void {
    const form: Auth = this.frmAuth.value;
        this.authService.signin(form).subscribe(
            (res: User) => {
                this.feedback = undefined;
                this.userLogged = res;
                console.log("Logged in user ", this.userLogged);
            },
            (err: Error) => {
                this.feedback = err.message;
            }
        );
  }

  signup(): void {
      const form = this.frmAuth.value;
      this.authService.signup(form).subscribe(
        (res: User) => {
            this.feedback = undefined;
            this.userLogged = res;
        },
        (err: Error) => {
            this.feedback = err.message;
        }
    );
}
}
