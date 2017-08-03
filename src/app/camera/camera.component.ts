import { Component,Input, OnInit } from '@angular/core';
import { CascaronCamera } from '../cascaronCamera';
import {Router} from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @Input() alert: CascaronCamera;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
