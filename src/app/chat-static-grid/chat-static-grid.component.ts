import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';

import { ChatInterchangeService, ChatRequest, ChatResponse } from '../services/chat-interchange-service';

@Component({
  selector: 'app-chat-static-grid',
  imports: [MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat-static-grid.component.html',
  styleUrl: './chat-static-grid.component.css'
})
export class ChatStaticGridComponent {

  chatRequest = signal<ChatRequest | undefined>(undefined);
  chatResponse = signal<ChatResponse | undefined>(undefined);

  private chatInterchangeService = inject(ChatInterchangeService);

  chatRequestForm = new FormGroup({
    text: new FormControl('')
  });

  onSubmit() {
    this.chatRequest.set({
      chatDialogId: 15, // todo: implement
      text: this.chatRequestForm.value.text!
    });

    this.chatInterchangeService.send(this.chatRequest()?.chatDialogId!, this.chatRequest()?.text!).subscribe({
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
