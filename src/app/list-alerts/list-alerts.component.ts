import { Component, OnInit } from '@angular/core';
import { CascaronAlert } from '../carcaronAlert';

@Component({
  selector: 'app-list-alerts',
  templateUrl: './list-alerts.component.html',
  styleUrls: ['./list-alerts.component.css']
})
export class ListAlertsComponent implements OnInit {
  alertList: CascaronAlert[];
  constructor() { }

  ngOnInit() {
    const body = document.body;

    body.removeAttribute('overflow-y');

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
