import { Component,Input, OnInit } from '@angular/core';
import { CascaronCamera } from '../cascaronCamera';
import {Router} from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  Color1 = '#59C0D2';
  @Input() alert: CascaronCamera;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
