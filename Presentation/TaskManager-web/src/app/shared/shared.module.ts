import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Material
import { MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { InputComponent } from "./components/input/input.component";
import { EqualValidator } from "./directives/equal-validator.directive";
import { EmailValidator } from "./directives/email-validator.directive";

@NgModule({
    declarations: [InputComponent, EqualValidator, EmailValidator],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        InputComponent,
        EqualValidator,
        EmailValidator
    ]
})
export class SharedModule {}