import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../shared/services/auth/auth.service";
import { Auth } from "../shared/models/auth.model";
import { User } from "../shared/models/user.model";
import { Router } from "@angular/router";
import { AuthSingletonService } from "../shared/singletons/auth/auth-singleton.service";
import { first } from "rxjs/operators";

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
    public isLoading: boolean;

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private authSingleton: AuthSingletonService
  ) {}

    ngOnInit() {
      const user = this.authSingleton.getUser();

      if (user) {
          this.router.navigateByUrl("/home");
      }

      this.mode = "signin";
      this.initSigninForm();
  }

  toggleMode(): void {
    this.frmAuth.reset();
        this.feedback = undefined;
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
    this.isLoading = true;
    const form: Auth = this.frmAuth.value;
    this.authService
    .signin(form)
    .pipe(first())
    .subscribe(
        (res: User) => {
            this.feedback = undefined;
            this.isLoading = false;
            this.userLogged = res;
            console.log("Logged User: ", this.userLogged);
            this.router.navigateByUrl("/home");
        },
        (err: Error) => {
            this.feedback = err.message;
            this.isLoading = false;
        }
    );
  }

  signup(): void {
    this.isLoading = true;
      const form = this.frmAuth.value;
      this.authService
      .signup(form)
      .pipe(first())
      .subscribe(
          (res: User) => {
              this.feedback = undefined;
              this.isLoading = false;
              this.userLogged = res;
              this.router.navigateByUrl("/home");
          },
          (err: Error) => {
              this.feedback = err.message;
              this.isLoading = false;
          }
      );
    }
}
