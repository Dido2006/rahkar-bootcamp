import { Component } from '@angular/core';
import { telegramService } from '../srv/telegram.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormArray,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl:'./telegram.component.html',
  // template: ``,
  styleUrl: './telegram.component.scss',
})
export class TelegramComponent {
  chatids = [6734453194];

  constructor(
    private telegram: telegramService,
    private formbuilder: FormBuilder
  ) {}
  ngOnInit() {
  //  this.onSubmit();
 this.addBox();
  }

  form: FormGroup = this.formbuilder.group({
    massage: '', //['',Validators.required],
    picurl: '',
    picname: '',
    rownumber: Number,
    colnumber: Number,
    btn: this.formbuilder.array([
      // { text: 'a', callback_data: 'a' },
      // { text: 'b', callback_data: 'b' },
      // { text: 'c', callback_data: 'c' },
      // { text: 'd', callback_data: 'd' },
      // { text: 'e', callback_data: 'e' },
      // { text: 'f', callback_data: 'f' },
    ]),
  });

  listFormatDecorator(list: any[], col: number, row: number) {
    console.log(list);
    var arrayofarray: any = [];
    for (let i = 0; i < row; i++) {
      const rowArray = list.slice(i * col, i * col + col);
      console.log(i * col, i * row + col);
      arrayofarray.push(rowArray);
    }
    console.log('array out of loop', arrayofarray);
    return arrayofarray;
  }
  get btn(): FormArray {
    return this.form.get('btn') as FormArray;
  }

  addBox() {
    //console.log(`addNewBox`);
    this.btn.push(
      this.formbuilder.group({
        text: '',
        callback_data: '',
      })
    );
  }
  removeBox(index: number) {
    console.log(`remove`, index);
    this.btn.removeAt(index);
  }

  onSubmit() {
    this.Sendmsg();
    this.SendPhoto();
  }
  Sendmsg() {
   let btns =
  // this.listFormatDecorator(this.btn.value, 2, 3);
    this.listFormatDecorator(this.btn.value,
    this.form.value.colnumber,this.form.value.rownumber)
  //  console.log(btns);
   this.telegram.sendMassageToTelegram(this.chatids,this.form.value.massage,btns)   //parss data directly from formbuilder
  }
  SendPhoto() {
    return this.telegram.sendPhotoToTelegram(this.chatids,this.form.value.picurl,this.form.value.picname)    //parss data directly from formbuilder
  }
}
