import { Component } from '@angular/core';
import {EnrollService} from "../Services/enroll.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  title = 'Dashboard';

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title)
  }
}
