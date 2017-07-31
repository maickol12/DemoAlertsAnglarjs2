import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { AlertComponent } from './alert/alert.component';
import { ListAlertsComponent } from './list-alerts/list-alerts.component';

import { TopMenuComponent } from './template/top-menu/top-menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { MainMenuComponent } from './template/main-menu/main-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
    AlertComponent,
    ListAlertsComponent,
    TopMenuComponent,
    FooterComponent,
    MainMenuComponent

  ],
  imports: [
    RoutesRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
