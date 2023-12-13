import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewComponent } from './new/new.component';
import { outputAst } from '@angular/compiler';
import { CaComponent } from './ca/ca.component';
import { CbComponent } from './cb/cb.component';
import { CcComponent } from './cc/cc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,SidebarComponent,NewComponent ,CaComponent,CbComponent,CcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appear : boolean = true;
constructor()
{setTimeout(() => {this.appear=false
  
}, 2000);}
todolist : any[] =[{}];
//  [ {
//   title : 'test' ,
//   Finished: false ,
//   id:0
// }
// ];
  title = 'bootcamp';
    Clickcounter : number = 0;
    ontype(e:any ){
      console.log(e);
     }
     onClick(e:any){
      this.Clickcounter=this.Clickcounter+1;
     }
     onchangegetdata(event : any)   {
       let data={
         title:event.target.value ,
         Finished: false 
        }
        console.log(data);
       this.todolist.push(data);
       console.log(this.todolist);
       
      }
      onclick()
      {
      var datamine={
        title:'' ,
        Finished: false 
      } ;
      this.todolist.push(datamine)
  }
  onRemove()
  {
    this.todolist.pop()
  }
  ondid()
  {
   this.todolist[1].Finished=true;
   console.log(this.todolist[1]);
  }
}
