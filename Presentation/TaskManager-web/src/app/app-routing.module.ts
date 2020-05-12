import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { AuthComponent } from "./auth/auth.component"; 
import { HomeComponent } from "./home/home.component";
import { BoardDetailComponent } from "./board/board-detail/board-detail.component";

const routes: Routes = [
    {
        path: "",
        component: AuthComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "board-detail",
        component: BoardDetailComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}