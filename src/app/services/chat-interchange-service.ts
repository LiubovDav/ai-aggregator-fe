import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatResponse } from '../models/chat-response.model';

@Injectable({
  providedIn: 'root'
})
export class ChatInterchangeService {

  private apiUrl = 'https://ai-aggregator-c1e46fa70092.herokuapp.com/api/v1/chat_request';
  // private apiUrl = 'http://localhost:8080/api/v1/chat_request';

  private httpClient = inject(HttpClient);

  send(chatDialogId: number, temperature: number, text: string): Observable<ChatResponse> {
    return this.httpClient.post<ChatResponse>(this.apiUrl, {
      chatDialogId: chatDialogId,
      temperature: temperature,
      text: text
    });
  }
}
