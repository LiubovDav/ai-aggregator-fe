import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" crc="/assets/logo.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">

      </section>
  </main>
      `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AI Aggregator';
}


