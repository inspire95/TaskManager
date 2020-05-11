import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpHandler, HttpRequest } from "@angular/common/http";

import "./auth.component.scss";
import { AuthService } from "../shared/services/auth/auth.service";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  const fb: FormBuilder = new FormBuilder();
  const validators: Validators = new Validators();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [SharedModule, RouterTestingModule],
        declarations: [AuthComponent],
        providers: [{ provide: FormBuilder, useValue: fb }, { provide: Validators, useValue: validators }]
    }).compileComponents();
}));

 // Signin

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    component.mode = "signin";
    component.initSigninForm();
    fixture.detectChanges();
});

it("should create", () => {
  expect(component).toBeTruthy();
});

it("should initializeted with signin configuration", () => {
  component.mode = "signin";
  expect(component.mode === "signin").toBeTruthy();
});

it("should validate signin form", () => {
  component.mode = "signin";
  component.initSigninForm();
  component.frmAuth.get("email").setValue("email@email.com");
  component.frmAuth.get("password").setValue("123");
  expect(component.frmAuth.valid).toBeTruthy();
});

it("should show error for invalid email format", () => {
  component.frmAuth.get("email").setValue("email");
  component.frmAuth.get("password").setValue("123");
  expect(component.frmAuth.invalid).toBeTruthy();
});

it("should show error for empty password field", () => {
  component.frmAuth.get("email").setValue("email@email.com");
  component.frmAuth.get("password").setValue("");
  expect(component.frmAuth.invalid).toBeTruthy();
});

    // Signup

    beforeEach(() => {
      component.mode = "signup";
      component.initSignupForm();
      fixture.detectChanges();
  });

  it("should validate signup form", () => {
      component.frmAuth.get("name").setValue("user created for test");
      component.frmAuth.get("email").setValue("teste@teste.com");
      component.frmAuth.get("password").setValue("123");
      component.frmAuth.get("confirmPassword").setValue("123");
      expect(component.frmAuth.valid).toBeTruthy();
  });

  it("should create a new user", () => {
      spyOn(component, "signup");
      component.frmAuth.get("name").setValue("user created for test");
      component.frmAuth.get("email").setValue("teste@teste.com");
      component.frmAuth.get("password").setValue("123");
      component.frmAuth.get("confirmPassword").setValue("123");
      component.signup();
      expect(component.signup).toHaveBeenCalled();
  });
});