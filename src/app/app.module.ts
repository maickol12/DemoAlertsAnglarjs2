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
import { CuerpoAlertsComponent } from './cuerpo-alerts/cuerpo-alerts.component';
import { ContentComponent } from './content/content.component';
import { MapContentComponent } from './map-content/map-content.component';
import { SettingsComponent } from './settings/settings.component';
import { CameraComponent } from './camera/camera.component';
import { CuerpoCameraComponent } from './cuerpo-camera/cuerpo-camera.component';
import { ListCameraComponent } from './list-camera/list-camera.component';
import {AgmCoreModule} from '@agm/core';

import { BackTopMenuComponent } from './template/back-top-menu/back-top-menu.component';

import { VideoComponent } from './video/video.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';







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
    CuerpoAlertsComponent,
    ContentComponent,
    MapContentComponent,
    SettingsComponent,
    CameraComponent,
    CuerpoCameraComponent,
    ListCameraComponent,

    BackTopMenuComponent,

    VideoComponent


  ],
  imports: [
    RoutesRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBk0YKTy49Sy8jpfqQzEqNLkb2Ju8-sWVk'}),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
