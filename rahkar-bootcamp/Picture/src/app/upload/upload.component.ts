import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  uploadForm: FormGroup;

  constructor(private http: HttpClient ,private formBuilder:FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      pic:[''],
      title:''
    });
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('pic')!.setValue(file);
    }
  }

  onSubmit() {
    console.log(this.uploadForm.value)
    const formData = new FormData();
    formData.append('picBytes', this.uploadForm.get('pic')!.value);

    this.http.post<any>('http://localhost:3000/uploadimage', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}