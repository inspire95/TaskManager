import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { AuthComponent } from "./auth/auth.component"; 
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
    {
        path: "",
        component: AuthComponent
    },
    {
        path: "signup",
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}