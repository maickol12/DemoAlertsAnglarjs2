import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back-top-menu',
  templateUrl: './back-top-menu.component.html',
  styleUrls: ['./back-top-menu.component.css']
})
export class BackTopMenuComponent implements OnInit {
  Color1 = '#59C0D2';
  @Output() emit:EventEmitter<string> =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clicflecha() {

    this.emit.emit('1')

  }
}
