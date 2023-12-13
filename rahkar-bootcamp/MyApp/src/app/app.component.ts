import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { SuccessComponent } from '..//success/success.component';
import { FailComponent } from "../fail/fail.component";
import { GetUserInformationComponent } from "../users/get-user-information/get-user-information.component";
import { ShowUsersInformationComponent } from "../users/show-users-information/show-users-information.component";
import { notfound404 } from '../not-found404/not-found404.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent, HeaderComponent, SuccessComponent, FailComponent, GetUserInformationComponent, ShowUsersInformationComponent, RouterModule, notfound404]
})
export class AppComponent {
  title = 'MyApp';
}
