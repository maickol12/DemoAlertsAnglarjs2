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
      let email;
      let password;

      email = data.user;
      password = data.password;

      let info = localStorage.getItem(email);
      info = JSON.parse( info );


      if ( info ) {
         if ( info['password'] === password ) {
            alert('Login iniciado con exito');
         }else{
           alert('Ocurrio un error al iniciar');
        }
      }
  }
}
