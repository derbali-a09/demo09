import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { UtilisteursComponent } from './utilisteurs/utilisteurs.component';

const routes: Routes = [
  {path:"form1", component:FormulaireComponent},
  {path:"form2", component:Formulaire2Component},
  {path:"users/:numero", component:DetailsComponent} /*une route paramètrée*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
