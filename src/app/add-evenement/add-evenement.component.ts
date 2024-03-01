import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/model/evenement.model';
import { EvenementService } from '../services/evenement.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/model/categorie.model';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})

export class AddEvenementComponent implements OnInit {

  //evenement : Evenement[]; //un tableau de Produit
  newEvenement = new Evenement();
  evenements : Evenement[]= [];
  // categories : Categorie[]= [];
  

  //categorie = Categorie;
 
  constructor(private evenementService: EvenementService, private router: Router) { }
  ngOnInit(): void {
    this.evenementService.listeEvenement()
    .subscribe(e => {
      this.evenements = e; 
      console.log(e);
    });
  }
 
  addEvenement(){
    // console.log(this.newEvenement);
  this.evenementService.ajouterEvenement(this.newEvenement)
  .subscribe(evenement => {
    console.log(evenement);
    this.router.navigate(['evenements']);
  });
 
}
}   
