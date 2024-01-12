import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-get-picture-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './get-picture-component.component.html',
  styleUrl: './get-picture-component.component.scss'
})

export class GetPictureComponentComponent {
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  imageUploadForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    image: [null, Validators.required] // Use null for initial value
  });

  onSubmit() {
    const formData = new FormData(this.imageUploadForm.getRawValue());

    this.http.post('/images', formData) // Replace with your backend endpoint
      .subscribe(response => {
        console.log('Image uploaded successfully:', response);
        // Handle success response (e.g., clear form, display success message)
      }, error => {
        console.error('Error uploading image:', error);
        // Handle error gracefully
      });
  }
  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.imageUploadForm.get('image')!.setValue(file);
  //   }
  // }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageUploadForm.get('image')!.setValue(file);
    }
  }
  
}