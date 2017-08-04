import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.css']
})
export class MapContentComponent implements OnInit {
  lat: number = 19.62738964370519;
  lng: number = -99.23864364624023;

  @ViewChild('fillContentDiv') fillContentDiv;
  
  constructor() { }

  ngOnInit() {

  }
}
