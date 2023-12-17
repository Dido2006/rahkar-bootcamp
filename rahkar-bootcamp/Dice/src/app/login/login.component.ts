import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Player } from '../PlayerModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  Player1 = new Player();
  Player2 = new Player();
  player1Form = FormGroup;
  player2Form = FormGroup;
  palyerid = 0;

  constructor(private formbuilder: FormBuilder) {}
  player1form = this.formbuilder.group({
    userId: this.palyerid,
    userName: ['',Validators.required],
    password: ['',Validators.required],
    score: 0,
  });
  player2form = this.formbuilder.group({
    userId: this.palyerid,
    userName: ['',Validators.required],
    password: ['',Validators.required],
    score: 0,
  });


}
