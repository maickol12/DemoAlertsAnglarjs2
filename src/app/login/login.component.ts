import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'user' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  ngOnInit() {

  }
  login(data: any) {
      alert(data.user + data.password);
  }
}
