import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../cart-context/cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatBadgeModule
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    // No es necesario suscribirse manualmente si usamos el pipe async en la plantilla
  }

  onRemoveItem(id: number): void {
    this.cartService.removeItem(id);
  }

  onUpdateQuantity(id: number, quantity: number): void {
    this.cartService.updateQuantity(id, quantity);
  }

  onToggleCart(): void {
    this.cartService.toggleCart();
  }

  onCheckout(): void {
    // Navegar a checkout
    this.cartService.toggleCart();
    // Aquí debería implementarse la navegación (puede usar Router)
  }
}
