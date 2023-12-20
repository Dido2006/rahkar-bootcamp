import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DiceService {
  constructor(private http: HttpClient) {}

      // //userId: this.palyerid,
      // userName: ['',Validators.required],
      // password: ['',Validators.required],
      // //score: 0,
  // id:number=0;
  sendData() {
    const data = {userId:0 , userName: 'mohsen', password: '1234' ,score:0 };

    this.http.post('/api/User', data).subscribe(
      (response) => {
        console.log('Data sent successfully');
        this.id++;// increment Id index
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
  // constructor() { }
}
