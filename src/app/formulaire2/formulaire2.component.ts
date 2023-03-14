import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-formulaire2',
  templateUrl: './formulaire2.component.html',
  styleUrls: ['./formulaire2.component.css']
})
export class Formulaire2Component {
  user = new User('', '')

  soumettre2() {
    console.log('formulaire soumis')
    console.log('Email saisi est ' + this.user.email)
    console.log('Mot de passe saisi est ' + this.user.password)
  }

}
