import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {ListAlertsComponent} from '../list-alerts/list-alerts.component';
import {ContentComponent} from '../content/content.component';
import {MapContentComponent} from '../map-content/map-content.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent

  },
  {
    path: 'listalerts', component: ListAlertsComponent
  },
  {
    path: 'content', component: ContentComponent
  },
  {
    path: 'mapa', component: MapContentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})

export class RoutesRoutingModule { }
