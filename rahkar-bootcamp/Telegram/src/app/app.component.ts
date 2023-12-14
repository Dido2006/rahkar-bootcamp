import { Component ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { telegramService } from './srv/telegram.service';
import { HttpClientModule } from '@angular/common/http'
import { TelegramComponent } from "./telegram/telegram.component";
import { DiceComponent } from "./dice/dice.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TelegramComponent, DiceComponent]
})
export class AppComponent {
  title = 'Telegram';
 

  

}

