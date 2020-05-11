import { Component, OnInit, Input, ContentChild, AfterContentInit } from "@angular/core";
import { NgModel, FormControlName, AbstractControl, Validators, Validator } from "@angular/forms";


@Component({
    selector: "app-input-validation-container",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit, AfterContentInit {
    constructor() {}
    public input: any;

    @Input() validator: boolean;
    @Input() errorMessage: string;
    @Input() tipMessage: string;
    @Input() customValidator = false;
    @Input() showTip = false;

    @ContentChild(NgModel, {static: false}) model: NgModel;
    @ContentChild(FormControlName, {static: false}) control: FormControlName;

    ngAfterContentInit() {
        this.input = this.model || this.control;

        if (this.input === undefined) {
            throw new Error("This component need to be used like directive and need ngModel or FormControlName");
        }
    }

    ngOnInit() {}

    hasSuccess(): boolean {
      return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
    }
}