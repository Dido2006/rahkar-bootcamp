import { Component } from '@angular/core';
import { PlaygroundComponent } from './playground/playground.component';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [PlaygroundComponent],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss'
})    
export class DiceComponent {

}
