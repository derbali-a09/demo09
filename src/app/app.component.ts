import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sol-travail09';

  chiffre:number = 3.14156793282082;
  unAutreChiffre = 0.221762792;

  unPrix = 55378.99;

  aujourdhui = Date.now();
}
