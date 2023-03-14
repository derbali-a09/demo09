import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  users: User[] = []
  index = -1

  //injecter une classe de type ActivatedRoute dans le constructeur
  constructor(private route: ActivatedRoute) {
    this.users.push(new User('test@test.com', 'test1'))
    this.users.push(new User('test2@test.com', 'test2'))
    this.users.push(new User('test3@test.com', 'test3'))
    this.users.push(new User('test4@test.com', 'test4'))

    //permet de recupérer le numéro saisi dans URL de la route
    let numero = this.route.snapshot.paramMap.get('numero')
    console.log('Le numero est ' + numero)
    if (numero != null) {
      this.index = parseInt(numero)
      console.log(this.users.at(this.index)?.email)
    }
  }


}
