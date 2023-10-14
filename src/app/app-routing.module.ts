import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages.

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SucessComponent } from './pages/signup/components/sucess/sucess.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "sucess", component: SucessComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
