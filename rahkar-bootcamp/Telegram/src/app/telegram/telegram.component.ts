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
  // this.addBox();
    }
      form: FormGroup =this.formbuilder.group({
      massage:'',//['',Validators.required],
      picurl:'',
      picname:'',
      btn:this.formbuilder.array([])
    });
    listFormatDecorator(list:any[]){
      var finalArray:any=[]
        list.forEach((btn,i) => {
        finalArray.push(
          [
            {text:btn.name,callback_data:btn.name}
          ]
        )
  
      });
      return finalArray;
  
    }



    get btn():FormArray{
      return this.form.get('btn') as FormArray;}

    addBox(){//console.log(`addNewBox`);
      this.btn.push(this.formbuilder.group({
       btnname:"",
       btncode: ""
     }))
     }
  removeBox(index:number){console.log(`remove`,index);
   this.btn.removeAt(index);}

    onSubmit(){
      //  this.Sendmsg();
        this.SendPhoto();
    }
  Sendmsg(){
    this.telegram.sendMassageToTelegram(this.chatids,this.form.value.massage)   //parss data directly from formbuilder
  }
  SendPhoto(){
  // var data={
  //   chat_id:this.chatids,
  //   photourl:this.form.value.picurl, // ?? is there any other way to get data like use get() "i have to ask " or somthinge
     
    // photourl:`https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png`
   // }
  
  return this.telegram.sendPhotoToTelegram(this.chatids,this.form.value.picurl,this.form.value.picname)    //parss data directly from formbuilder
}
}
