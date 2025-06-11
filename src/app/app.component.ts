import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';

import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CheckoutPageComponent } from "./checkout-page/checkout-page.component";
import { FeaturedCategoriesComponent } from "./featured-categories/featured-categories.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CartService } from "./cart-context/cart.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    CategoriesPageComponent, 
    CheckoutPageComponent, 
    FeaturedCategoriesComponent, 
    FooterComponent, 
    HeroSectionComponent, 
    ProductGridComponent, 
    ShoppingCartComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatSidenavModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BlueMart';
  currentPage: 'home' | 'shop' | 'categories' | 'deals' | 'checkout' = 'home';
  selectedCategoryId: number | null = null;
  searchQuery = '';

  constructor(public cartService: CartService, public router: Router) {}

  ngOnInit(): void {
    // Initialization if needed
  }

  toggleCart(): void {
    this.cartService.toggleCart();
  }

  navigateTo(page: 'home' | 'shop' | 'categories' | 'deals' | 'checkout'): void {
    this.currentPage = page;
    this.selectedCategoryId = null;
    window.scrollTo(0, 0);
  }

  onViewAllCategories(): void {
    this.navigateTo('categories');
  }

  onCategorySelect(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  onCategoryBack(): void {
    this.selectedCategoryId = null;
  }

  onCheckoutBack(): void {
    this.navigateTo('home');
  }

  search(): void {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality
  }

  get isHomePage(): boolean {
    return this.currentPage === 'home';
  }

  get isShopPage(): boolean {
    return this.currentPage === 'shop';
  }

  get isCategoriesPage(): boolean {
    return this.currentPage === 'categories';
  }

  get isDealsPage(): boolean {
    return this.currentPage === 'deals';
  }

  get isCheckoutPage(): boolean {
    return this.currentPage === 'checkout';
  }
}