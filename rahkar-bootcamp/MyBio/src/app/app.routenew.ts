import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { notfoundComponent } from './notfound';
import { ShopComponent } from './shop/shop.component';
import { RootComponent } from './root.component';
import { LoginComponent } from './auth/login/login.component';

export const routesnew: Routes = [
    // loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  {
    path: '',
    component: ShopComponent,
    children:[
    
        {
          path: 'detail:id',
          component: notfoundComponent,
        },
      
    ]
  },

];
