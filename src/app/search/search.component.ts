import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  @Output() motCle = new EventEmitter<string>();
  @Output() prixMin = new EventEmitter<number>();
  @Output() prixMax = new EventEmitter<number>();

  recherche(value: string) {
    this.motCle.emit(value);
  }

  recherchePrixMin(prixMin: number) {
    this.prixMin.emit(prixMin);
  }

  recherchePrixMax(prixMax: number) {
    this.prixMax.emit(prixMax);
  }
}