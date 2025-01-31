import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { ProjectCardComponent } from '../../Components/project-card/project-card.component'; // ✅ Import ProjectCardComponent

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  imports: [CommonModule, ProjectCardComponent] // ✅ Add imports
})
export class WorkComponent {
  projects = [
    { 
      title: 'Tale Bets', 
      description: 'A fake streaming service for fake movies', 
      imageUrl: 'assets/tale.png', 
      link: 'https://talebets.com', 
      customClass: 'tale-image'
    },
    { 
      title: 'InTheBlock', 
      description: 'App Store application that lets college kids find cheap eats', 
      imageUrl: 'assets/InTheBlock.png', 
      link: 'https://apps.apple.com/us/app/intheblock/id6464686322' 
    },
    { 
      title: 'Airport Codes', 
      description: 'Aesthetic visualization of airport codes', 
      imageUrl: 'assets/netflix.jpg', 
      link: 'https://airportcod.es' 
    },
    { 
      title: 'Airport Codes', 
      description: 'Aesthetic visualization of airport codes', 
      imageUrl: 'assets/netflix.jpg', 
      link: 'https://airportcod.es' 
    },
    { 
      title: 'Airport Codes', 
      description: 'Aesthetic visualization of airport codes', 
      imageUrl: 'assets/netflix.jpg', 
      link: 'https://airportcod.es' 
    },
    { 
      title: 'Airport Codes', 
      description: 'Aesthetic visualization of airport codes', 
      imageUrl: 'assets/netflix.jpg', 
      link: 'https://airportcod.es' 
    }
  ];
}
