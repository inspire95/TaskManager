import { Component, OnChanges, SimpleChange, SimpleChanges, OnInit } from "@angular/core";
import { RouterEvent, Router } from "@angular/router";
import { AuthSingletonService } from "./shared/singletons/auth/auth-singleton.service";

@Component({
  selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "frontend";
  activeMenu: boolean;

  constructor(private authSingletonService: AuthSingletonService) {}

  ngOnInit() {
      this.authSingletonService.isloggedIn.subscribe((logged) => {
          this.activeMenu = logged;
      });
  }
}