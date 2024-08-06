import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {EnrollService} from "./Services/enroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private translateService: TranslateService, private enrollService: EnrollService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  title = 'ng_tutz';
}
