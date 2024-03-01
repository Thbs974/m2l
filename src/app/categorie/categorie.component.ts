import { Component } from '@angular/core';
import { Categorie } from 'src/model/categorie.model';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  categorie : Categorie[]= [];
}
