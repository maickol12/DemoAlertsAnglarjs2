import { Component, OnInit } from '@angular/core';
import { CascaronAlert } from '../carcaronAlert';

@Component({
  selector: 'app-cuerpo-alerts',
  templateUrl: './cuerpo-alerts.component.html',
  styleUrls: ['./cuerpo-alerts.component.css']
})
export class CuerpoAlertsComponent implements OnInit {
  alertList: CascaronAlert[];
  constructor() { }

  ngOnInit() {
    this.alertList = [
      new CascaronAlert('camara 1', 'tipo 1', '31/07/2017'),
      new CascaronAlert('camara 2', 'tipo 2', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017'),
      new CascaronAlert('camara 3', 'tipo 3', '31/07/2017')


    ];
  }

}
