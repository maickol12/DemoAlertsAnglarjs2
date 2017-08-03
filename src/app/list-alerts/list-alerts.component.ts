import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-alerts',
  templateUrl: './list-alerts.component.html',
  styleUrls: ['./list-alerts.component.css']
})
export class ListAlertsComponent implements OnInit {
  selector: string;
  constructor() {
    this.selector = '2';
  }

  ngOnInit() {
    window.document.querySelector('body').style.overflowY = 'scroll';
  }
  change(data: string) {
    this.selector = data;
  }
}
