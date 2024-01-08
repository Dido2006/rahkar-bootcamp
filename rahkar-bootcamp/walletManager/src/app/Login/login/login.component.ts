import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { LoginService } from '../../srv/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private formbuilder: FormBuilder,private loginservice:LoginService) {}
// users=[
//   {
//     id=0,
//     username='ali'
//     pass:'ali'

//   }
// ]


  userForm : FormGroup = this.formbuilder.group({
    //userId: this.palyerid,
    userName: ['',Validators.required],
    password: ['',Validators.required],
    //score: 0,
  });

   palyerid = 0;
      
   onSubmituser(){
         // console.log(this.userForm.valid)
      if(this.userForm.valid ){
         // console.log(this.userForm.value)
     this.loginservice.sendData(this.userForm.value).subscribe({
      next: ()=>{},
      error: ()=>{}
     })
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
//   user = new Player();
//   Player2 = new Player();
//   userForm: FormGroup; // Assign an instance of 'FormGroup'
//   player2Form: FormGroup; // Assign an instance of 'FormGroup'
//   playerId = 0;
//   form: any;

//   constructor(private formbuilder: FormBuilder) {
//     this.userForm = this.formbuilder.group({
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

//   onSubmituser() {
//     if (this.userForm.valid) {
//       console.log('Player 1 form is valid');
//     }
//   }
// }