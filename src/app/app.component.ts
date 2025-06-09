import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesPageComponent } from './categories-page/categories-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoriesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'u-commerce-front';
}
