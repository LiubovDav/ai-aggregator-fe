import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDialogService {

  private apiUrl = 'https://ai-aggregator-c1e46fa70092.herokuapp.com/api/v1/chat_dialog';
  // private apiUrl = 'http://localhost:8080/api/v1/chat_dialog';

  private httpClient = inject(HttpClient);

  createDialog(userId: number) {
    let params = new HttpParams()
      .set('userId', userId);

    return this.httpClient.post<ChatDialog>(this.apiUrl, { params });
  }
}

export interface ChatDialog {
  chatDialogId: number | null;
  userId: number;
}
