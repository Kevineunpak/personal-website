import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Import Router and NavigationEnd
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent], // Add CommonModule here
})
export class AppComponent {
  showHeader = true; // Default to true

  constructor(private router: Router) {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the homepage
        this.showHeader = event.urlAfterRedirects !== '/';
      }
    });
  }
}
