import { Routes } from '@angular/router';
import { notfoundComponent } from './notfound';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:"auth",
        loadChildren: () => import("./auth/auth.routes")
        .then((m) => m.AuthRoutes)
      },
      {
        path:"shop",
        loadChildren: () => import("./shop/shop.routes")
        .then((m) => m.shopRouts)
      },
      {
        path:"home",
        component:HomeComponent,
      }

    ]
  }, 
  {
    path:'**',
    component:notfoundComponent
  }
]