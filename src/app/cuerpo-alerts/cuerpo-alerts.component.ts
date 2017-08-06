import { Component, OnInit } from '@angular/core';
import { CascaronAlert } from '../carcaronAlert';
import {Response, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cuerpo-alerts',
  templateUrl: './cuerpo-alerts.component.html',
  styleUrls: ['./cuerpo-alerts.component.css']
})
export class CuerpoAlertsComponent implements OnInit {
  alertList: CascaronAlert[];
  result: any;
  constructor(public http: Http) { }

  ngOnInit() {
    this.alertList = [];
    this.http.get('https://jesusequihua.000webhostapp.com/tumusicoapi/obtenerDatos').map(res => res.json()).
      subscribe(
      val => this.result = val,
      err => console.error('Error' +err),
      () =>  {
          this.result.forEach(obj => {
              this.alertList.push(new CascaronAlert(obj['camara'], obj['tipo'], obj['fecha']));
          });
      });




   /* this.alertList = [
      new CascaronAlert('Borregos', 'tipo 1', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 2', '31/07/2017'),
      new CascaronAlert('Piedritas 1', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017')


    ];*/
  }

}
