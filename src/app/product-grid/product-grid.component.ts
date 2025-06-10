import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { CartService } from '../cart-context/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule
  ],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Inicializar productos de ejemplo
    this.products = [
      {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://img.heroui.chat/image/clothing?w=300&h=400&u=21",
        rating: 4.5,
        isSale: true
      },
      {
        id: 2,
        name: "Classic Denim Jacket",
        price: 89.99,
        image: "https://img.heroui.chat/image/clothing?w=300&h=400&u=22",
        rating: 4.8,
        isNew: true
      },
      {
        id: 3,
        name: "Casual Sneakers",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://img.heroui.chat/image/shoes?w=300&h=400&u=23",
        rating: 4.2,
        isSale: true
      },
      {
        id: 4,
        name: "Leather Watch",
        price: 129.99,
        image: "https://img.heroui.chat/image/fashion?w=300&h=400&u=24",
        rating: 4.7,
        isNew: true
      }
    ];
  }

  addToCart(product: Product): void {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    console.log('Añadido al carrito:', product);
  }

  addToWishlist(product: Product): void {
    console.log('Añadido a favoritos:', product);
  }

  quickView(product: Product): void {
    console.log('Vista rápida:', product);
  }

  getStarArray(rating: number): number[] {
    return [1, 2, 3, 4, 5].map(star => (star <= Math.floor(rating) ? 1 : 0));
  }
}
