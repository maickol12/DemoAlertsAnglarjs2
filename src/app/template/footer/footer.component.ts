import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @Output() emit: EventEmitter<string>  = new EventEmitter();

  Color1 = '#888888';
  Color2 = '#59C0D2';
  Color3 = '#888888';



  constructor() { }

  ngOnInit() {
  }



  clicboton( tipo ) {
    this.Color3 = '#888888';
    this.Color1 = '#888888';
    this.Color2 = '#888888';
     if (tipo === 'uno')
     {
       this.emit.emit('1');
       this.Color1 = '#59C0D2';

     }
    if (tipo === 'dos')
    {
      this.emit.emit('2');
      this.Color2 = '#59C0D2';

    }
    if (tipo === 'tres') {
      this.emit.emit('3');
      this.Color3 = '#59C0D2' ;

    }
  }


}
