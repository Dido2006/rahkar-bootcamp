import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { HttpClientModule } from '@angular/common/http';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class telegramService {
  constructor(private http: HttpClient, private formbuilder: FormBuilder) {}
  mytelegramBotToken = '6873393931:AAF9kQ2j44Y3SPFNWPf_ymPS9xnOugVj-nU'; //my botToken On secend Line 
  mytelegramChatId = '6734453194';  //my Owne Id

//8888888888888888888888888888888888888888888888888888888888888888

   sendMassageToTelegram(chat_id:number[], text: string,reply_markup:any) {
    chat_id.forEach(element => {
      var msg = {                //incapsolation data as {chatid:[chatid],text:[textmasage]} 
        chat_id: element,
        text: text,
        reply_markup:{keyboard:reply_markup}
      
      };
      return this.http.post(
        `https://api.telegram.org/bot${this.mytelegramBotToken}/sendMessage`,msg).subscribe(
          response => 
          console.log('Text Massage sent to Telegram successfully')
          ,error=> 
          console.error('Error sending Text Massage to Telegram:', error)
          );
        });    
    }

  sendPhotoToTelegram(chat_id:number[],photoUrl: string ,caption: string) {
    chat_id.forEach(element => {
    const requestBody = {
    chat_id: element,
    photo: photoUrl,
    caption: caption
  };
    console.log(`https://api.telegram.org/bot${this.mytelegramBotToken}/sendPhoto`,
    requestBody);
    
    this.http
    .post(
      `https://api.telegram.org/bot${this.mytelegramBotToken}/sendPhoto`,
      requestBody
      )
      .subscribe(
        (response) => {
          console.log('Photo sent to Telegram successfully');
        },
        (error) => {
          console.error('Error sending photo to Telegram:', error);
        }
        );
        
      });
    }
  }
