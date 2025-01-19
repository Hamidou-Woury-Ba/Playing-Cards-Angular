import { Component } from '@angular/core';
import { PlayingCardsComponent } from "./components/playing-cards/playing-cards.component";
import { Monster } from './model/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root', // c'est le nom de la balise HTML qui sera utilisée pour afficher le composant
  standalone: true, // le composant ne contient pas de template HTML (il n'est pas affiché)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardsComponent], // on importe le composant PlayingCardsComponent pour pouvoir l'utiliser dans le template
})
export class AppComponent {

  monsters! : Monster[];
  count : number = 0;
  search = ''
  selectedMonsterIndex = 0

  constructor(){

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Dragon";
    monster1.hp = 80;
    monster1.figureCaption = "N°002 Dragon";
    monster1.attackName = "Fire Breath";
    monster1.attackStrength = 100;
    monster1.attackDescription = "Lance une attaque de feu sur l'ennemi";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "/car.jpg";
    monster2.type = MonsterType.WATER;
    monster2.hp = 80;
    monster2.figureCaption = "N°003 Car";
    monster2.attackName = "Water";
    monster2.attackStrength = 50;
    monster2.attackDescription = "Lance une attaque d'eau sur l'ennemi";

    this.monsters.push(monster2);
  }

  toggleMonster(){
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length
  }

}
