import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-model',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './image-model.component.html',
  styleUrl: './image-model.component.css'
})
export class ImageModelComponent {

  submitApplication() {
    console.log("imageModel form was submitted");
  }
}
