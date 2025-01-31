import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from "./menubar/menubar.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AI Aggregator';
}


