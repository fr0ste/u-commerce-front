import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { CartService } from '../cart-context/cart.service';
import { Router } from '@angular/router';

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  saveInfo: boolean;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  days: string;
}

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule
  ],
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  @Output() back = new EventEmitter<void>();
  
  isSubmitting = false;
  currentStep: 'shipping' | 'payment' | 'confirmation' = 'shipping';
  orderComplete = false;
  
  // Datos simulados del carrito
  items: CartItem[] = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2, image: 'https://img.heroui.chat/image/fashion?w=300&h=400&u=101' },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 1, image: 'https://img.heroui.chat/image/fashion?w=300&h=400&u=102' }
  ];
  
  formData: CheckoutFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    paymentMethod: 'credit',
    saveInfo: true
  };
  
  shippingMethods: ShippingMethod[] = [
    { id: 'standard', name: 'Standard Shipping', price: 4.99, days: '3-5' },
    { id: 'express', name: 'Express Shipping', price: 9.99, days: '1-2' },
    { id: 'free', name: 'Free Shipping', price: 0, days: '5-7' }
  ];
  
  selectedShipping = 'standard';
  
  constructor(private cartService: CartService, private router: Router) {
    // Obtener los items del carrito
    this.cartService.items$.subscribe(items => {
      this.items = items;
    });
  }
  
  handleInputChange<K extends keyof CheckoutFormData>(field: K, value: CheckoutFormData[K]): void {
    this.formData[field] = value;
  }
  
  submitShipping(): void {
    this.currentStep = 'payment';
    window.scrollTo(0, 0);
  }
  
  submitPayment(): void {
    this.isSubmitting = true;
    
    // Simular llamada a API
    setTimeout(() => {
      this.isSubmitting = false;
      this.currentStep = 'confirmation';
      window.scrollTo(0, 0);
    }, 1500);
  }
  
  completeOrder(): void {
    this.isSubmitting = true;
    
    // Simular llamada a API
    setTimeout(() => {
      this.isSubmitting = false;
      this.orderComplete = true;
      this.cartService.clearCart();
      window.scrollTo(0, 0);
    }, 1500);
  }
  
  // Los métodos para cálculos pueden ser reemplazados por observables del servicio
  get totalItems(): number {
    return this.cartService.totalItems;
  }
  
  get totalPrice(): number {
    return this.cartService.totalPrice;
  }
  
  get shippingCost(): number {
    return this.shippingMethods.find(method => method.id === this.selectedShipping)?.price || 0;
  }
  
  get finalTotal(): number {
    return this.totalPrice + this.shippingCost;
  }
  
  goBack(): void {
    // En lugar de emitir un evento, usamos el router para navegar
    this.router.navigate(['/home']);
  }
  
  getRandomOrderNumber(): string {
    return 'BM' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  }
  
  get selectedShippingMethod(): ShippingMethod | undefined {
    return this.shippingMethods.find(method => method.id === this.selectedShipping);
  }
}
