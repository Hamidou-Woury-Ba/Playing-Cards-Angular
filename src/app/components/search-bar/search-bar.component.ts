import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  // @Input() search = 'Initial' // on crée une propriété pour stocker la valeur du champ de recherche

  // search = input<string>('Initial')


  search = model<string>('Initial')

  // @Output('submit') searchButtonClick = new EventEmitter(); // on crée un événement pour prévenir le composant parent que le bouton a été cliqué 
  
  searchButtonClick = output({alias : 'submit'})

  // searchChange = new EventEmitter<string>(); // on crée un événement pour prévenir le composant parent que la valeur du champ de recherche a changé

  // searchChange = output<string>()

  searchClick(){
    this.searchButtonClick.emit(); // on émet un événement pour prévenir le composant parent que le bouton a été cliqué
  }

  // updateSearch(value : string){
  //   this.searchChange.emit(value); // on émet un événement pour prévenir le composant parent que la valeur du champ de recherche a changé
  // }
  
  // updateSearch(value : string){
  //   this.search.set(value); // on émet un événement pour prévenir le composant parent que la valeur du champ de recherche a changé
  // }

}
