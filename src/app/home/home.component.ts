import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FeaturedCategoriesComponent } from '../featured-categories/featured-categories.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { FooterComponent } from "../footer/footer.component";
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    HeroSectionComponent,
    FeaturedCategoriesComponent,
    ProductGridComponent,
    FooterComponent,
    ShoppingCartComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  onViewAllCategories(): void {
    // Este método será llamado desde el componente hijo cuando se haga clic en "Ver todas"
  }
}
