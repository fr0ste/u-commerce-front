import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CartService } from '../cart-context/cart.service';
import { CartItem } from '../cart-context/cart.model';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

interface SortOption {
  key: string;
  label: string;
}

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule
],
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  @Input() categoryId!: number;
  @Output() back = new EventEmitter<void>();
  
  sortOrder = 'popular';
  currentPage = 1;
  productsPerPage = 8;
  category: any;
  products: Product[] = [];
  
  sortOptions: SortOption[] = [
    { key: 'popular', label: 'Most Popular' },
    { key: 'newest', label: 'Newest First' },
    { key: 'priceAsc', label: 'Price: Low to High' },
    { key: 'priceDesc', label: 'Price: High to Low' }
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.initCategory();
    this.generateProducts();
  }

  initCategory(): void {
    this.category = {
      id: this.categoryId,
      title: this.categoryId === 1 ? "Men's Fashion" :
             this.categoryId === 2 ? "Women's Collection" :
             this.categoryId === 3 ? "Accessories" :
             this.categoryId === 4 ? "Footwear" : "Category",
      description: "Browse our collection of high-quality products in this category.",
      banner: `https://img.heroui.chat/image/fashion?w=1200&h=400&u=${this.categoryId}00`
    };
  }

  generateProducts(): void {
    this.products = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: `${this.category.title} Product ${i + 1}`,
      price: 29.99 + (i * 10),
      originalPrice: i % 3 === 0 ? 39.99 + (i * 10) : undefined,
      image: `https://img.heroui.chat/image/${this.categoryId === 4 ? 'shoes' : 'fashion'}?w=300&h=400&u=${this.categoryId}${i + 1}`,
      rating: 3.5 + (Math.random() * 1.5),
      isNew: i % 5 === 0,
      isSale: i % 3 === 0,
      category: this.category.title
    }));
  }

  get sortedProducts(): Product[] {
    return [...this.products].sort((a, b) => {
      switch (this.sortOrder) {
        case 'priceAsc':
          return a.price - b.price;
        case 'priceDesc':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          // "popular" - default order
          return 0;
      }
    });
  }

  get currentProducts(): Product[] {
    const start = (this.currentPage - 1) * this.productsPerPage;
    const end = start + this.productsPerPage;
    return this.sortedProducts.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.productsPerPage);
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  setSortOrder(order: string): void {
    this.sortOrder = order;
    this.currentPage = 1;
  }

  onBackClick(): void {
    this.back.emit();
  }

  addToCart(product: Product): void {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  }

  getStarArray(rating: number): number[] {
    return [1, 2, 3, 4, 5].map(star => (star <= Math.floor(rating) ? 1 : 0));
  }
}