import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: "evenements", component : EvenementsComponent},
  {path: "add-evenement", component : AddEvenementComponent},
  // {path: "", redirectTo: "evenements", pathMatch: "full" },
  {path: "updateEvenement/:id", component: UpdateEvenementComponent},
  {path: "login", component : LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "acceuil", component: AccueilComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
  
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  

})
export class AppRoutingModule { }
