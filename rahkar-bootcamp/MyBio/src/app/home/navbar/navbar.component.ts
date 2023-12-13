import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router, private auth: AuthService) {}
  
  menuitem: any[] = [
    {
      name: 'Home',
      link: 'home',
    },
    {
      name: 'Shop',
      link: 'shop',
    },
    {
      name: 'Login',
      link: 'auth/login',
    },
  ];
  ngoninit() {
    console.log(1111);

    console.log(this.menuitem);
    console.log(22);
  }
}
