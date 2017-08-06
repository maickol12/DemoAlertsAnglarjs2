import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder, public router: Router) {
    this.form = fb.group({
      'user' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  ngOnInit() {
    window.document.querySelector('body').style.overflowY = 'hidden';
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
            this.router.navigateByUrl('/listalerts');
         }else{
           alert('Ocurrio un error al iniciar');
        }
      }else{
        alert("el usuario no se encuentra en la base de datos...");
      }
  }
}
