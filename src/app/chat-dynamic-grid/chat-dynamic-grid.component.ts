import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-chat-dynamic-grid',
  imports: [MatGridListModule],
  templateUrl: './chat-dynamic-grid.component.html',
  styleUrl: './chat-dynamic-grid.component.css'
})
export class ChatDynamicGridComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Six', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Seven', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Eight', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Nine', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Ten', cols: 1, rows: 1, color: 'lightgreen'}
  ];
}
