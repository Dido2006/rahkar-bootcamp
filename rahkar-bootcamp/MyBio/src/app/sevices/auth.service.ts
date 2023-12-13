import { Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: Boolean = false;

  users: any[] = [
    {
      name: 'John',
      username: 'admin',
      password: '1234',
    },
    {
      name: 'John',
      username: 'admin1',
      password: '12344',
    },
  ];
  login(username: string, password: string): boolean {
    let user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      this.isLoggedIn = true;

      return true;
    } else {
      return false;
    }
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
