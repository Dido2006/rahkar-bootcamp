import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class prodService {
  
  prodect: any[] = [
    {
      id:1,
      name: 'chair',
      //cat: '',
      price: '24564465',
      image:'',
      description:'dbdmnsbdsmn',
    },
    {
        id:2,
        name: 'table',
        //cat: 'admin',
        price: 'dnkjdsk',
        image:'',
        description:'nsan,msan',
      },
      {
        id:3,
        name: 'table',
        //cat: 'admin',
        price: 'dnkjdsk',
        image:'',
        description:'nsan,msan',
      },
      {
        id:4,
        name: 'table',
        //cat: 'admin',
        price: 'dnkjdsk',
        image:'',
        description:'nsan,msan',
      }
    
    
  ];

  ngoninit(){
    console.log(this.prodect);
    
    }
 
  //   loggedin(b boolean) {
  //     let user = this.users.find(user => user.username === username && user.password === password)
  //     if (user) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
}
