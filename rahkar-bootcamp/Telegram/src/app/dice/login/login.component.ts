import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private formbuilder:FormBuilder){}
form=new FormControl(
{ Player1Name:'',
  Player1Score:Number,
  Player2Name:'',
  Player2Score:Number,
})
}
