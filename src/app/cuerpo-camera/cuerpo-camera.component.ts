import { Component, OnInit } from '@angular/core';
import { CascaronCamera } from '../cascaronCamera';

@Component({
  selector: 'app-cuerpo-camera',
  templateUrl: './cuerpo-camera.component.html',
  styleUrls: ['./cuerpo-camera.component.css']
})
export class CuerpoCameraComponent implements OnInit {
  selector: string;
  alertList: CascaronCamera[];
  constructor() {
    this.selector = '1';
  }
  change(data: string) {
    this.selector = data;
  }
  ngOnInit() {
    this.alertList = [
      new CascaronCamera('camara 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('camara 2', 'lat: 81.3034738,lon: -74.0093994', 'eos rebel t6 18-55mm/55-250mm','Desactivada'),
      new CascaronCamera('camara 3', 'lat: 91.3034738,lon: -74.0093994', 'Canon  SX720 HS','Activa'),
      new CascaronCamera('camara 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('camara 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('camara 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('camara 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa')




    ];
  }

}
