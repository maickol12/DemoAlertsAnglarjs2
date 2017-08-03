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
<<<<<<< HEAD
import { CuerpoAlertsComponent } from './cuerpo-alerts/cuerpo-alerts.component';
=======
import { ContentComponent } from './content/content.component';
import { MapContentComponent } from './map-content/map-content.component';
import { SettingsComponent } from './settings/settings.component';
>>>>>>> 28fbcd34c14ff292fc49b4f4db9cee6c946ecccc




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
    AlertComponent,
    ListAlertsComponent,
    TopMenuComponent,
    FooterComponent,
    MainMenuComponent,
<<<<<<< HEAD
    CuerpoAlertsComponent
=======
    ContentComponent,
    MapContentComponent,
    SettingsComponent
>>>>>>> 28fbcd34c14ff292fc49b4f4db9cee6c946ecccc

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
