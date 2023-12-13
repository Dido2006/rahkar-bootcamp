import { Component,Input , Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cc.component.html',
  styleUrl: './cc.component.scss'
})
export class CcComponent {
  @Output() LastName = new EventEmitter();

  // FName : string ="Mohsen"
   LName : string ='';
  // ClickHandler(e:any)
  // {
  // this.Name.emit(this.FName)
  // }
  onChangeFName(event :any){
    console.log(event.target.value);
  }
  onChangeLName(event :any){
    this.LName=event.target.value;
  }
  ClickHandler()
  {
    this.LastName.emit(this.LName)
  }
}
