import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDialogService {

  private apiUrl = 'https://ai-aggregator-c1e46fa70092.herokuapp.com/api/v1/chat_request';
  // private apiUrl = 'http://localhost:8080/api/v1/chat_request';

  private httpClient = inject(HttpClient);

  send(chatRequest: ChatRequest) {
    return this.httpClient.post<ChatResponse>(this.apiUrl, {
      chatDialogId: chatRequest.chatDialogId,
      text: chatRequest.text
    });
  }
}

export interface ChatRequest {
  chatDialogId: number | null;
  text: string
}

export interface ChatResponse {
  textRequestId: number | null;
  textChatGPT: string;
  textGemini: string;
  textMistral: string;
  textAnthropic: string
}
