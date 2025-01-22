import { Route } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { WorkComponent } from './Pages/work/work.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },        // Default route (homepage)
  { path: 'about', component: AboutComponent }, // About page route
  { path: 'work', component: WorkComponent },   // Work page route
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route
];
