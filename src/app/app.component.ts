import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {EnrollService} from "./Services/enroll.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  searchValue:string = 'iPhone';
}
