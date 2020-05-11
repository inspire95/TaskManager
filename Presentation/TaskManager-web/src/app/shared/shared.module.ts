import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [],
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, HttpClientModule, MatFormFieldModule],
    exports: [MatToolbarModule, MatIconModule, MatButtonModule, HttpClientModule, MatFormFieldModule]
})
export class SharedModule {}