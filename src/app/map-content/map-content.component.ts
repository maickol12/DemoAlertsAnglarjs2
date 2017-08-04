import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {CoordenadasCamera} from '../CoordenadasCamera';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {
  lat: number =  19.597146;
  lng: number = -99.226672;
  cameras: CoordenadasCamera[];

  @ViewChild('fillContentDiv') fillContentDiv;


  constructor() {

    this.cameras = [
      new CoordenadasCamera('biblioteca', 19.597146, -99.226672),
      new CoordenadasCamera('starbucks', 19.597583, -99.226554),
      new CoordenadasCamera('borregos', 19.597688, -99.226549),
      new CoordenadasCamera('centroEstudiantil 1', 19.598444, -99.225836),
      new CoordenadasCamera('centroEstudiantil 2', 19.598439, -99.225615),
      new CoordenadasCamera('centroEstudiantil 3', 19.598312, -99.225750),
      new CoordenadasCamera('piedritas 1', 19.594751, -99.225983),
      new CoordenadasCamera('piedritas 2', 19.594799, -99.226049),
      new CoordenadasCamera('piedritas 3', 19.594811, -99.226069),
      new CoordenadasCamera('piedritas 4', 19.594441, -99.226589),
      new CoordenadasCamera('piedritas 5', 19.594435, -99.226574),
      new CoordenadasCamera('piedritas 6', 19.594426, -99.226538),
      new CoordenadasCamera('piedritas 7', 19.593869, -99.225901),
      new CoordenadasCamera('plazaDelSol 1', 19.591692, -99.229894),
      new CoordenadasCamera('plazaDelSol 2', 19.592166, -99.229983),
      new CoordenadasCamera('plazaDelSol 3', 19.592171, -99.229893)
     ];
  }

  ngOnInit() {

  }
}
