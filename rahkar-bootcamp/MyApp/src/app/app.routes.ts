import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { SettingsComponent } from '../settings/settings.component';
import { UsersComponent } from '../users/users.component';
import { notfound404 } from '../not-found404/not-found404.component';
import { ShowUsersInformationComponent } from '../users/show-users-information/show-users-information.component';
import { GetUserInformationComponent } from '../users/get-user-information/get-user-information.component';



export const routes: Routes = [
    {path:"",
    component: UsersComponent,
children:[{
        path: "UserDeatials",
        component: ShowUsersInformationComponent,},
        {
        path: "AddUser",
        component: GetUserInformationComponent,
    }
]}
    ,{
        path:"home",
        component:HomeComponent
    },
    {path:"Settings",
    component:SettingsComponent},
    {
    path: "**",
    component: notfound404
      }
];
