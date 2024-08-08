import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LoginBaseComponent } from './login-base/login-base.component';
import { LoginComponent } from './login/login.component';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import {EnrollService} from "./Services/enroll.service";
import {FormsModule} from "@angular/forms";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginBaseComponent,
    LoginComponent,
    DashboardBaseComponent,
    DashboardComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
  ],
  providers: [EnrollService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
