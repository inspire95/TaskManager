import {
  Component,
  OnInit,
  OnChanges,
  NgZone,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  ViewChildren,
  ViewChild,
  ElementRef,
  SimpleChanges
} from "@angular/core";
import { ActivatedRoute, Router, RouterEvent } from "@angular/router";
import { MatToolbar } from "@angular/material";
import { AuthSingletonService } from "../../singletons/auth/auth-singleton.service";

@Component({
  selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private router: Router, private authSingletonService: AuthSingletonService) {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  doSignOut() {
    this.authSingletonService.destroyUser();
    sessionStorage.clear();
    this.router.navigateByUrl("/");
}
}