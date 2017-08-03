import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
<<<<<<< HEAD
  @Output() emit: EventEmitter<string>  = new EventEmitter();
=======
  Color1="#888888";
  Color2="#59C0D2";
  Color3="#888888";
  public conten='<app-map-content></app-map-content>';

>>>>>>> 28fbcd34c14ff292fc49b4f4db9cee6c946ecccc
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  item1() {
    this.emit.emit('1');
  }
  item2() {
    this.emit.emit('2');
  }
  item3() {
    this.emit.emit('3');
  }

=======
  public clicboton( tipo )
  {
    this.Color3="#888888";
    this.Color1="#888888";
    this.Color2="#888888";
     if (tipo==="uno")
     {
       this.Color1="#59C0D2";
       this.conten='<app-list-alerts></app-list-alerts>';
     }
    if (tipo==="dos")
    {
      this.Color2="#59C0D2";
      this.conten="<app-map-content></app-map-content>";
    }
    if (tipo==="tres")
    {
      this.Color3="#59C0D2";
      this.conten="<app-settings></app-settings>";
    }
  }
>>>>>>> 28fbcd34c14ff292fc49b4f4db9cee6c946ecccc

}
