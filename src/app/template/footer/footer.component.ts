import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Color1="#888888";
  Color2="#59C0D2";
  Color3="#888888";
  public conten= '<app-map-content></app-map-content>';

  constructor() { }

  ngOnInit() {
  }

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

}
