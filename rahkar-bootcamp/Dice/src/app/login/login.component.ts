import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Player } from '../PlayerModel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private formbuilder: FormBuilder) {}
  Player1 = new Player();
  Player2 = new Player();
  player1Form : FormGroup = this.formbuilder.group({
    //userId: this.palyerid,
    userName: ['',Validators.required],
    password: ['',Validators.required],
    //score: 0,
  });
  player2Form : FormGroup = this.formbuilder.group({
    // userId: this.palyerid,
     userName: ['',Validators.required],
     password: ['',Validators.required],
   //  score: 0,
   });
   palyerid = 0;
      
   onSubmitPlayer1(){
          console.log(this.player1Form.valid)
      if(this.player1Form.valid){
          console.log(this.player1Form.value)
  }}
   onSubmitPlayer2(){
          console.log(this.player2Form.valid)
      if(this.player2Form.valid){
          console.log(this.player2Form.value)
  }}
  
}

//}

// }
// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { Player } from '../PlayerModel';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
  //   selector: 'app-login',
  //   standalone: true,
  //   imports: [CommonModule],
  //   templateUrl: './login.component.html',
  //   styleUrls: ['./login.component.scss'], // Use 'styleUrls' instead of 'styleUrl'
// })
// export class LoginComponent {
//   Player1 = new Player();
//   Player2 = new Player();
//   player1Form: FormGroup; // Assign an instance of 'FormGroup'
//   player2Form: FormGroup; // Assign an instance of 'FormGroup'
//   playerId = 0;
//   form: any;

//   constructor(private formbuilder: FormBuilder) {
//     this.player1Form = this.formbuilder.group({
//       userId: [this.playerId],
//       userName: ['', Validators.required],
//       password: ['', Validators.required],
//       score: [0],
//     });
//     this.player2Form = this.formbuilder.group({
//       userId: [this.playerId],
//       userName: ['', Validators.required],
//       password: ['', Validators.required],
//       score: [0],
//     });
//   }

//   onSubmitPlayer1() {
//     if (this.player1Form.valid) {
//       console.log('Player 1 form is valid');
//     }
//   }
// }