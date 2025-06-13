import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  currentYear = new Date().getFullYear();
}
