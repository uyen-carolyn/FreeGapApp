import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnGzyw2DIsCSDBcOHFbDD2QjiNfywNu7Y',
      authDomain: 'ng-free-gap-app.firebaseapp.com',
    });
  }

}
