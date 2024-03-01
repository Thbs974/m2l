import { Injectable } from '@angular/core';
import { Evenement } from '../../model/evenement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { UserEntity } from '../user-entity/user-entity.component';

@Injectable({
providedIn: 'root'
})

export class EvenementService {
evenements? : Evenement[]; //un tableau de Produit
evenement! : Evenement;
// user
// users?: UserEntity[];
// user!: UserEntity;
//categorie : Categorie;

// URL de l'API
apiURL: string = 'http://localhost:4200/mlEvent/api/evenement';
 
// Liste d'événements
constructor(private http : HttpClient,) {

}

  // Récupérer la liste d'événements depuis l'API
listeEvenement(): Observable<Evenement[]>
{
  const url = `${this.apiURL}/all`
  return this.http.get<Evenement[]>(url);
}
// Retourner le tableau d'événements



  // Ajouter un événement
ajouterEvenement( evenement: Evenement): Observable<Evenement>
{
  const url = `${this.apiURL}/save`
  return this.http.post<Evenement>(this.apiURL, evenement, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
}

  // Supprimer un événement
supprimerEvenement( ev: Evenement): Observable<any>
{
  //supprimer le produit prod du tableau produits 
  const url = `${this.apiURL}/${ev.idEvenement}`; 
  {
    return this.http.delete(url, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      });
  }

}

  consulterEvenement(id: number): Observable<Evenement>
{
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Evenement>(url);
}


updateEvenement(e :Evenement): Observable<Evenement>

{ //console.log(this.currentProduit); 
return  this.http.put<Evenement>(this.apiURL, e, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}
}



