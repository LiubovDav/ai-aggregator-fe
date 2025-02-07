import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ChatInterchangeService, ChatRequest, ChatResponse } from '../services/chat-interchange-service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-chat-model',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatCheckboxModule],
  templateUrl: './chat-model.component.html',
  styleUrl: './chat-model.component.css'
})
export class ChatModelComponent {
  interchanges = signal<Interchange[] | undefined>(undefined);
  dialogId = signal(null);

  private chatInterchangeService = inject(ChatInterchangeService);

  form = new FormGroup({
    text: new FormControl('')
  });

  onSubmit() {
    const chatRequest : ChatRequest = {
      chatDialogId: 1, // todo: implement
      text: this.form.value.text!
    };

    this.chatInterchangeService.send(chatRequest.chatDialogId!, chatRequest.text!).subscribe({
      next: (response : ChatResponse) => {
        const interchange: Interchange = {
          chatRequest: chatRequest,
          chatResponse: response
        };

        if (this.interchanges()) {
          this.interchanges.update((currentArray) => [...currentArray!, interchange]);
        } else {
          this.interchanges.set([interchange]);
        }

        console.log('Success:', response);

        this.form.reset();
      },
      error: (error: Error) => {
        console.error('Error:', error);
      }
    });
  }

  startNewDialog() {
    this.interchanges.set([]);
    this.form.reset();
    this.dialogId.set(null);
    // todo: create new dialog in DB, store dialog Id
  }
}

export interface Interchange {
  chatRequest: ChatRequest;
  chatResponse: ChatResponse;
}
