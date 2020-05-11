import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { SharedModule } from "../shared/shared.module";

import "./auth.component.scss";

describe("AuthComponent", () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  const fb: FormBuilder = new FormBuilder();
  const validators: Validators = new Validators();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [SharedModule],
        declarations: [AuthComponent],
        providers: [{ provide: FormBuilder, useValue: fb }, { provide: Validators, useValue: validators }]
    }).compileComponents();
}));

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
  expect(component.mode === "signin").toBeTruthy();
});

it("should validate signin form", () => {
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
});