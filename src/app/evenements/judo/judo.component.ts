import { Component } from '@angular/core';
import { Evenement } from "src/model/evenement.model";
import { EvenementService } from 'src/app/services/evenement.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/model/categorie.model';

@Component({
  selector: 'app-judo',
  templateUrl: './judo.component.html',
  styleUrls: ['./judo.component.css']
})
export class JudoComponent {
 
    categorie : Categorie[]= []; //un tableau de chînes de caractères,
    evenements : Evenement[]= [];
    
    constructor(private evenementService: EvenementService, private router : Router) 
    {
      this.evenementService.listeEvenement().subscribe(evenements => {
      //  console.log(this.evenements);
        this.evenements = evenements;
        });
    }
  
    ngOnInit(): void {
      this.chargerEvenement();
    }
  
  
    chargerEvenement(){
      this.evenementService.listeEvenement().subscribe(e => {
      console.log(e);
      this.evenements = e;
      });
      }
      
  
  supprimerEvenement(e: Evenement)
      {
      // console.log(e);
      let conf = confirm("Êtes-vous sûr ?");
        
        if (conf)
          this.evenementService.supprimerEvenement(e).subscribe(() => {
            console.log("evenement supprimé");
            this.chargerEvenement();
            });
            
      }
  
      
}
