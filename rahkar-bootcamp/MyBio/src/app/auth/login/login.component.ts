import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  public loginform:FormGroup
  myUsername: string = ""
  myPass: string = ""
  

  constructor(private fb: FormBuilder, private auth: AuthService ,private route:Router){
    this.loginform = this.fb.group({
      userName: '',
      pass: ''
    })
  }
  onclicklogin(){
    this.myUsername=this.loginform.get('userName')?.value;
    this.myPass=this.loginform.get('pass')?.value;
    this.auth.login(this.myUsername, this.myPass);
    console.log(this.auth.isLoggedIn);
    this.route.navigateByUrl("home");
       
  }  


}
