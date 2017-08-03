import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() emit: EventEmitter<string>  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  item1() {
    this.emit.emit('1');
  }
  item2() {
    this.emit.emit('2');
  }
  item3() {
    this.emit.emit('3');
  }


}
