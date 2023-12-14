import { Component } from '@angular/core';
import { telegramService } from '../srv/telegram.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormArray, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl:'./telegram.component.html',
  styleUrl: './telegram.component.scss'
})
export class TelegramComponent {
  chatids=[6734453194]

  constructor(
         private telegram:telegramService, 
         private formbuilder:FormBuilder
    ){}
  ngOnInit(){
   this.addBox();
    }
      form: FormGroup =this.formbuilder.group({
      massage:'',//['',Validators.required],
      picurl:'',
      picname:'',
      rownumber: Number,
      colnumber: Number,
      btn:this.formbuilder.array([])
      
    });
    listFormatDecorator(list:any[]){
      this.btn.removeAt(0);// ngoinit made an emty item an it most be removed 

      console.log(list);
      
      var arrayofarray:any=[]
      
      for (let i = 0; i < this.form.value.rownumber; i++) {
        const rowArray = list.slice(i * this.form.value.colnumber, (i + 1) * this.form.value.colnumber);
        arrayofarray.push(rowArray);
      }
        list.forEach((btn,i) => {
        arrayofarray.push(
          [
           {text:btn.name,callback_data:btn.name}
          ]
        )
  
      });
      return arrayofarray;
}
get btn():FormArray{
      return this.form.get('btn') as FormArray;}

    addBox(){//console.log(`addNewBox`);
      this.btn.push(this.formbuilder.group({
        text:"",
        callback_data: ""
     }))
     }
  removeBox(index:number){console.log(`remove`,index);
   this.btn.removeAt(index);}

    onSubmit(){
       this.Sendmsg();
       this.SendPhoto();

    }
  Sendmsg(){
    let btns=this.listFormatDecorator(this.btn.value)
    console.log(btns);    
   // this.telegram.sendMassageToTelegram(this.chatids,this.form.value.massage,btns)   //parss data directly from formbuilder
  }
  SendPhoto(){
  // var data={
  //   chat_id:this.chatids,
  //   photourl:this.form.value.picurl, // ?? is there any other way to get data like use get() "i have to ask " or somthinge
     
    // photourl:`https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png`
   // }
  
 // return this.telegram.sendPhotoToTelegram(this.chatids,this.form.value.picurl,this.form.value.picname)    //parss data directly from formbuilder
}
}
