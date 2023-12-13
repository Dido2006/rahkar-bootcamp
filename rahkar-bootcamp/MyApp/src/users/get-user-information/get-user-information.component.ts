import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUsersInformationComponent } from '../show-users-information/show-users-information.component';


@Component({
    selector: 'app-get-user-information',
    standalone: true,
    templateUrl: './get-user-information.component.html',
    styleUrl: './get-user-information.component.scss',
    imports: [CommonModule, ShowUsersInformationComponent]
})
export class GetUserInformationComponent {
  users:any[]=[
    // { 
    // id:0,
    // firstname: '',
    // lastname:'',
    // mobile:[]='',
    // picture:'assets/images/users/user.png'
    // }
    {
      id: 1,
      firstname: "Alireza",
      lastname: "Ebrahimkhanie",
      mobile:'0912',
      image:"assets/images/users/user.png"
    },
    {
      id: 2,
      name: "Kamal",
      lastname: "Gharajaloo",
      mobile:'0912',
      image:"assets/images/users/user.png"
    },
    {
      id:3,
      name:"bijan",
      lastname:"habibi",
      mobile:'0912',
      image:"assets/images/users/user.png"
    }
  ]
}
