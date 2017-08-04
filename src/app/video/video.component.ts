import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {VgAPI} from 'videogular2/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
 @Output() emite: EventEmitter<string> =new EventEmitter();
  api: VgAPI;
  constructor() { }
  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.playVideo.bind(this)
    );
  }

  playVideo() {
    this.api.play();
  }
  ngOnInit() {
  }

  change($event)
  {
    this.emite.emit($event);
  }

}
