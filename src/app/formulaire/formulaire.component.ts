import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {


  soumettre() {
    console.log('formulaire soumis')
    //adaptation à la syntaxe de TypeScript
    const email = document.getElementById('exampleInputEmail1') as HTMLInputElement | null;
    let pwd = document.getElementById('exampleInputPassword1') as HTMLInputElement | null;
    //traitement
    if (email != null) {
      console.log('Email saisi est ' + email.value)
    }
    if (pwd != null) {
      console.log('Mot de passe saisi est ' + pwd.value)
    }
  }

}
