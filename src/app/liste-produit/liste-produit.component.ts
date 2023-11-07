import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})

export class ListeProduitComponent implements OnInit {

  produits: Produit[] = [];

  filteredProduits : Produit[] = [];

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
      this.filteredProduits = [...this.produits]; // Copie par défaut pour que sans filtre, elle affiche tout.
    })
  }

  onMotCleChange(value: string) {
    this.filteredProduits = this.produits.filter((produit) =>
      produit.nom.toLowerCase().includes(value.toLowerCase()) || produit.categorie.toLowerCase().includes(value.toLowerCase())
    );
  }

  onPrixMin(prixMin: number) {
    this.filteredProduits = this.produits.filter((produit) => prixMin <= produit.prix);
  }
  
  onPrixMax(prixMax: number) {
    this.filteredProduits = this.produits.filter((produit) => prixMax >= produit.prix);
  }
  
}
