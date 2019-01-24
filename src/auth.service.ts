import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  exists: boolean;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
          response => {
            this.router.navigate(['login']);
          }
      )
      .catch(
        error => {console.log(error);
          this.exists = true;
        }
      );
   }

   signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/dashboard']);
        firebase.auth().currentUser.getToken()
          .then(
            (token: string) => this.token = token
          );
      }
    )
    .catch(
      error => console.log(error)
    );
   }

   getToken() {
     firebase.auth().currentUser.getToken()
       .then(
         (token: string) => this.token = token
       );
       return this.token;
   }

   isAuthenticated() {
     return this.token != null;
   }

   logout() {
      firebase.auth().signOut();
      this.token = null;
   }

   getUserID() {
     const user = firebase.auth().currentUser;
     if (user) {
       return user.uid;
     }
   }


}
