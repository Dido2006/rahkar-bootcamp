import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
isShowning=true
name="Mohsen"
age=38
whois(name:string)
{
  return ("Welcome "+name)
}
constructor(){
  setTimeout(() => {  this.isShowning=false
  }, 5000);
}
  sub(a:number,b:number)
  {let temp=a-b
if(temp>0)
return temp;
else {
  return
}}

}

