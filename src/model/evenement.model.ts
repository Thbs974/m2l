import { Categorie } from './categorie.model';

export class Evenement {
    idEvenement? : number;
    nomEvenement? : string;
    descriptionEvenement? : string;
    dateFinEvenement? : Date;
    dateDebutEvenement? : Date ;
    categorie? : Categorie;
    // prixEvenement? : number;
    }