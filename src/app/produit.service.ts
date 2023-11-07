import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produit } from './model/produit.model';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {
    constructor(private http:HttpClient) { }
      
    getProduits () : Observable<Produit[]> {
      return this.http.get<Produit[]>(environment.backendClient);
    }

}

