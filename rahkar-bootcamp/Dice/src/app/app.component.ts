import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { LoginComponent } from './login/login.component';
import { GameOverComponent } from './game-over/game-over.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PlayGroundComponent,LoginComponent,GameOverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

StatusCode=0;
  title = 'Dice';
}
