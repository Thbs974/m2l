import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../../model/categorie.model'; 

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://localhost:4200/mlEvent/api/cat'; 

  constructor(private http: HttpClient) {}

  getCategorie(idCategorie: number): Observable<Categorie> {
    const url = `${this.apiUrl}/${idCategorie}`;
    return this.http.get<Categorie>(url);
  }}