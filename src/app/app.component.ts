import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoriesPageComponent, CheckoutPageComponent, FeaturedCategoriesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'u-commerce-front';
}
