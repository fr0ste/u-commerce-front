import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../cart-context/cart.service';
import { Router } from '@angular/router';

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
  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

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
    // Aseguramos que el carrito se cierra correctamente
    this.cartService.closeCart();
  }

  onCheckout(): void {
    // Cerramos el carrito
    this.cartService.closeCart();
    
    // Emitimos un evento para el componente principal
    // o navegamos a la página de checkout
    // Si estás usando el Router de Angular:
    // this.router.navigate(['/checkout']);
    
    // Si estás usando una estrategia de páginas como en tu app.component:
    window.dispatchEvent(new CustomEvent('navigate-to-checkout'));
  }
}
