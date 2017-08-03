import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-camera',
  templateUrl: './list-camera.component.html',
  styleUrls: ['./list-camera.component.css']
})
export class ListCameraComponent implements OnInit {
  selector: string;
  Color2 = '#888888';
  Color1 = '#59C0D2';
  border = '4px solid #59C0D2';
  border2 = '4px solid #FFFFFF';

  constructor() {
    this.selector = '1';
  }

  ngOnInit() {
  }

  change(data: string) {
    this.Color2 = '#888888';
    this.Color1 = '#888888';
    this.border = '4px solid #FFFFFF';
    this.border2 = '4px solid #FFFFFF';

    this.selector = data;
    if (data === '1')
    {
      this.Color1 = '#59C0D2';
      this.border = '4px solid #59C0D2';

    }
    if (data === '2') {

      this.Color2 = '#59C0D2' ;
      this.border2 = '4px solid #59C0D2';

    }
  }

}
