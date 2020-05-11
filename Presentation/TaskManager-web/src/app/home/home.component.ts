import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthSingletonService } from "../shared/singletons/auth/auth-singleton.service";
import { User } from "../shared/models/user.model";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit{
    public user: User = new User();

    constructor(private router: Router, private authSingleton: AuthSingletonService) {}

    ngOnInit() {
      this.user = this.authSingleton.getUser();

      if (this.user === undefined) {
          return this.router.navigateByUrl("/");
      }
  }
}

