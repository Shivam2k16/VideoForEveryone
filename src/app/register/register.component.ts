import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

angForm: FormGroup;

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private fb: FormBuilder,private auth: AuthenticationService, private router: Router) {
   
  }


 
  register() {
  console.log(this.credentials);
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      console.error(err);
    });
  }
}