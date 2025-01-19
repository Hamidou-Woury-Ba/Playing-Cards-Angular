import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../model/monster.model';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {

  @Input()
  monster: Monster = new Monster();
  backgroundColor = ""
}
