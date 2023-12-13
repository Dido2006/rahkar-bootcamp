import { Routes } from "@angular/router";
import { notfoundComponent } from "../notfound";
import { ShopComponent } from "./shop.component";


export const shopRouts: Routes = [
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
