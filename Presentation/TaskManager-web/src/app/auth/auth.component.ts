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

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
      this.initForm();
  }

  initForm() {
      this.frmAuth = this.fb.group({
        email: this.fb.control("", [Validators.required, Validators.email]),
        password: this.fb.control("", [Validators.required])
      });
  }

}
