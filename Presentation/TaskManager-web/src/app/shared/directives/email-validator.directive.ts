import { Directive, forwardRef, Attribute } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: "[validateEmail][formControlName],[validateEmail][formControl],[validateEmail][ngModel]",
    providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }]
})
export class EmailValidator implements Validator {
    pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    constructor(@Attribute("validateEmail") public validateEmail: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        const email = c.value;

        const r = new RegExp(this.pattern);
        const isValid = r.test(email);

        return {
            validateEmail: isValid
        };
    }
}