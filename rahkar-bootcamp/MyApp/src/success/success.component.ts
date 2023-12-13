import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  standalone: true,
  template: `<p>your Successed!</p>` ,
  styles: [
    `
      p { 
        padding:10px;
        background-color:green;
        border:2px solid black;
        }`,
  ],
})
export class SuccessComponent {}
