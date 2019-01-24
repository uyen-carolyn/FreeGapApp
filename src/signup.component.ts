import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordMatch: boolean;
  accountExists: boolean;

  constructor(private authService: AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onSignup( form: NgForm ) {
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    if ( password !== confirmPassword) {
      this.passwordMatch = false;
    }  else {
      this.passwordMatch = true;
      this.authService.signupUser(email, password);
    }
    if (!this.authService.exists) {
      this.accountExists = true;
      form.reset();
    }


  }

}
