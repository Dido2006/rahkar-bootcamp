import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-show-users-information',
  standalone: true,
  imports: [CommonModule , NgFor ],
  templateUrl: './show-users-information.component.html',
  styleUrl: './show-users-information.component.scss'
})
export class ShowUsersInformationComponent {
  users:any[]=[
    // { 
    // id:0,
    // firstname: '',
    // lastname:'',
    // mobile:[]='',
    // picture:'./assets/images/users/user.png'
    // }
    {
      id: 1,
      name: "Alireza",
      lastname: "Ebrahimkhanie",
      mobile:'0912',
      email:'a@a.com',
      image:"./assets/images/users/user.png"
    },
    {
      id: 2,
      name: "Kamal",
      lastname: "Gharajaloo",
      mobile:'0912',
      email:'a@a.com',
      image:"./assets/images/users/user.png"
    },
    {
      id:3,
      name:"bijan",
      lastname:"habibi",
      mobile:'0912',
      email:'a@a.com',
      image:"./assets/images/users/user.png"
    }
  ]
  OnClickUserDetail(index :number){
    console.log(index)
  }
  ngOnInit(): void {
    console.log("this is ng on Init");
     }


}

