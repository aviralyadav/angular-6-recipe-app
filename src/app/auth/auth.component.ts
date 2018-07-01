import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  //styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   onSignin (form: NgForm) {
//     const email = form.value.email;
//     const password = form.value.password;
//     this.authService.signinUser(email, password);
//   }

}
