import { Component } from '@angular/core';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'M2LEventApp';
categories: Categorie[] = [
  {idCategorie: 1, nomCategorie: 'Judo', descriptionCategorie: 'Catégorie pour les événénements de Judo'},
  {idCategorie: 2, nomCategorie: 'Boxe', descriptionCategorie: 'Catégorie pour les événénements de Boxe'},
  {idCategorie: 3, nomCategorie: 'Lutte', descriptionCategorie: 'Catégorie pour les événénements de Lutte'},
];
  

}

