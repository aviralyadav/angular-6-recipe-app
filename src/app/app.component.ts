import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  featureLoaded = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLNT3N63vkUOQte3Bk9yogdRAds1hPCHw",
      authDomain: "recipe-book-3e63b.firebaseapp.com"
    });
  }

  onNavigate(feature: string, event) {
    this.featureLoaded = feature;
  }
}
