import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {register} from "ts-node/dist";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {

  }
  singup(data: any ) {
     this.register( data.username, data.email, data.password );
   }

   register(username: string, email: string, password: string){
    if (username && email && password) {

      let data = localStorage.getItem(email);
      data = JSON.parse(data);

      if ( data ==  null ) {

        const jsonData = {'username' : username, 'email' : email , password : password };

        localStorage.setItem(email, JSON.stringify(jsonData) );

        alert('Gracias por registrarte en nuestra demo!!! ');
      }else {
        alert('el usuario ya existe');
      }

      this.router.navigate(['/login']);


    }

   }

}
