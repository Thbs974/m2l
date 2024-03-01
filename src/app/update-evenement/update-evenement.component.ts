import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../services/evenement.service';
import { Evenement } from 'src/model/evenement.model';
import { Router } from '@angular/router';
import { Categorie } from 'src/model/categorie.model';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit { 
  
  currentEvenement: Evenement = [] as Evenement;
  evenements: Evenement[] = [];
  
  categories: Categorie[] = [] as Categorie[];

updatedCatId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, 
              private evenementService: EvenementService, 
              private router: Router) {}
    
  
          ngOnInit(): void {
            // console.log(this.route.snapshot.params.id);
            this.evenementService.listeEvenement().subscribe(e => {
              this.evenements = e;
              console.log(e);
            });
            this.evenementService.consulterEvenement(this.activatedRoute.snapshot.params['id']).subscribe(evenement => {
              this.currentEvenement = evenement;
              this.updatedCatId = this.currentEvenement.categorie?.idCategorie || 0;
            });
          } 

  updateEvenement()

  { console.log(this.currentEvenement); 
    this.evenementService.updateEvenement(this.currentEvenement).subscribe(e => {
      this.router.navigate(['evenements']); }
      )
  }





}
