import { Component } from '@angular/core';
import {EnrollService} from "../Services/enroll.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  title = 'Login';

  constructor(private enrollService: EnrollService) {}

  OnEnroll() {
    this.enrollService.OnEnrollClicked(this.title)
  }
}
