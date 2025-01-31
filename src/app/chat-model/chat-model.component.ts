import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-model',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat-model.component.html',
  styleUrl: './chat-model.component.css'
})
export class ChatModelComponent {



  submitApplication() {
    console.log("chatModel form was submitted");
  }
}
