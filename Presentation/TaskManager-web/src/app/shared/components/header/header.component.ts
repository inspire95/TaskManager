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

@Component({
  selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() public isUserLoggedIn: boolean;
  constructor(private router: Router) {}
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}
}