import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './core/socket/socket.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CardComponent } from './pages/home/components/card/card.component';
import { HeroComponent } from './pages/home/components/hero/hero.component';
import { NavigationComponent } from './pages/home/components/navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { SucessComponent } from './pages/signup/components/sucess/sucess.component';
import { EmployeeComponent } from './pages/dashboard/components/employee/employee.component';
import { SidebarComponent } from './pages/dashboard/components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './pages/dashboard/components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    CardComponent,
    HeroComponent,
    NavigationComponent,
    SucessComponent,
    EmployeeComponent,
    SidebarComponent,
    HeaderComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
