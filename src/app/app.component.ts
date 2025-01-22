import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component'; // Adjust path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HeaderComponent], // Add HeaderComponent here
})
export class AppComponent {}
