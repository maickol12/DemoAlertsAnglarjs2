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
      new CascaronAlert('Borregos', 'tipo 1', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 2', '31/07/2017'),
      new CascaronAlert('Piedritas 1', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017'),
      new CascaronAlert('Starbucks', 'tipo 3', '31/07/2017')


    ];
  }

}
