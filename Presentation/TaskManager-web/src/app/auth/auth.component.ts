import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
    public frmAuth: FormGroup;
    public mode: string;

    constructor(private fb: FormBuilder) {}

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
    debugger;
    const x = this.frmAuth;
}
}
