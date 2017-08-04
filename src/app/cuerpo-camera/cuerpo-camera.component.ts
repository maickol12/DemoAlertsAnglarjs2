import { Component, OnInit} from '@angular/core';
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
      new CascaronCamera('Biblioteca ', 'lat: 19.597146,lon: -99.226672', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Starbucks', 'lat: 81.3034738,lon: -74.0093994', 'eos rebel t6 18-55mm/55-250mm','Desactivada'),
      new CascaronCamera('Borregos ', 'lat: 91.3034738,lon: -74.0093994', 'Canon  SX720 HS','Activa'),
      new CascaronCamera('Centro Estudiantil 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Centro Estudiantil 2', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Centro Estudiantil 3', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 2', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 3', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 4', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 5', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 6', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Piedritas 7', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Plaza Del Sol 1', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Plaza Del Sol 2', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa'),
      new CascaronCamera('Plaza Del Sol 3', 'lat: 41.3034738,lon: -74.0093994', 'Cyber-shot DSC-RX100','Activa')




    ];
  }


}
