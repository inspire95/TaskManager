import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// Material
import { DragDropModule } from "@angular/cdk/drag-drop";
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { InputComponent } from "./components/input/input.component";
import { EqualValidator } from "./directives/equal-validator.directive";
import { EmailValidator } from "./directives/email-validator.directive";
import { HeaderComponent } from "./components/header/header.component";
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop/drag-and-drop.component';

@NgModule({
    declarations: [InputComponent, EqualValidator, EmailValidator, HeaderComponent, DragAndDropComponent],
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
        BrowserAnimationsModule,
        MatMenuModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatCardModule,
        MatChipsModule,
        DragDropModule
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
        EmailValidator,
        HeaderComponent,
        MatMenuModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatCardModule,
        MatChipsModule,
        DragAndDropComponent,
        DragDropModule
    ]
})
export class SharedModule {}