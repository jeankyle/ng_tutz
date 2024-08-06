import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardBaseComponent} from "./dashboard-base/dashboard-base.component";
import {LoginComponent} from "./login/login.component";
import {LoginBaseComponent} from "./login-base/login-base.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: '',
    component: LoginBaseComponent,
    children: [
      {
        path: 'login',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: LoginComponent
      },
    ]
  },
  {
    path: '',
    component: DashboardBaseComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
