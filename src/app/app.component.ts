import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from "./header/header.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserCreateComponent } from "./user-create/user-create.component";
import { ChatModelComponent } from "./chat-model/chat-model.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MatDividerModule, UserListComponent, UserCreateComponent, ChatModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AI Aggregator';
}


