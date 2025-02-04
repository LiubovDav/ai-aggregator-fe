import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ChatDialogService, ChatRequest, ChatResponse } from '../services/chat-dialog-service';

@Component({
  selector: 'app-chat-model',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat-model.component.html',
  styleUrl: './chat-model.component.css'
})
export class ChatModelComponent {

  chatResponse = signal<ChatResponse | undefined>(undefined);

  private chatDialogService = inject(ChatDialogService);

  chatRequestForm = new FormGroup({
    text: new FormControl('')
  });

  onSubmit() {
    const chatRequest: ChatRequest = {
      chatDialogId: 15, // todo: implement
      text: this.chatRequestForm.value.text!
    };

    this.chatDialogService.send(chatRequest).subscribe({
      next: (response : ChatResponse) => {
        this.chatResponse.set(response);
        console.log('Success:', response);
      },
      error: (error: Error) => {
        console.error('Error:', error);
      }
    });
  }
}
