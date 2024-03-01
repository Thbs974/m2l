import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JudoComponent } from './evenements/judo/judo.component';
import { BoxeComponent } from './evenements/boxe/boxe.component';
import { LutteComponent } from './evenements/lutte/lutte.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
// import { UserEntity } from './user-entity/user-entity.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
  path:'login', component:LoginComponent
},
{
  path:'signup', component:SignupComponent
},
{
  path:'evenement', component:EvenementsComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    AddEvenementComponent,
    UpdateEvenementComponent,
    CategorieComponent,
    NavbarComponent,
    JudoComponent,
    BoxeComponent,
    LutteComponent,
    AccueilComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    // UserEntity,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
