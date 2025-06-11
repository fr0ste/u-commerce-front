import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem, CartState } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private initialState: CartState = {
    items: [],
    isOpen: false
  };

  private cartState = new BehaviorSubject<CartState>(this.initialState);
  private isBrowser: boolean;
  
  // Observables públicos
  readonly state$: Observable<CartState> = this.cartState.asObservable();
  readonly items$: Observable<CartItem[]> = this.state$.pipe(map(state => state.items));
  readonly isOpen$: Observable<boolean> = this.state$.pipe(map(state => state.isOpen));
  readonly totalItems$: Observable<number> = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0))
  );
  readonly totalPrice$: Observable<number> = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.price * item.quantity, 0))
  );

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    // Solo intentar cargar desde localStorage si estamos en el navegador
    if (this.isBrowser) {
      this.loadCartFromStorage();
      
      // Guarda los cambios del carrito en localStorage
      this.state$.subscribe(state => {
        localStorage.setItem('cart', JSON.stringify(state.items));
      });
    }
  }

  private loadCartFromStorage(): void {
    if (!this.isBrowser) return;
    
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        this.cartState.next({ ...this.initialState, items });
      } catch (e) {
        console.error('Error loading cart from storage', e);
      }
    }
  }

  private get currentState(): CartState {
    return this.cartState.getValue();
  }

  // Modificado para aceptar un parámetro de cantidad opcional
  addItem(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
    const currentState = this.currentState;
    const existingItemIndex = currentState.items.findIndex(i => i.id === item.id);
    
    if (existingItemIndex > -1) {
      // Item exists, update quantity
      const updatedItems = [...currentState.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity
      };
      this.cartState.next({ ...currentState, items: updatedItems });
    } else {
      // New item
      this.cartState.next({
        ...currentState,
        items: [...currentState.items, { ...item, quantity }]
      });
    }
  }

  removeItem(id: number): void {
    const currentState = this.currentState;
    this.cartState.next({
      ...currentState,
      items: currentState.items.filter(item => item.id !== id)
    });
  }

  updateQuantity(id: number, quantity: number): void {
    const currentState = this.currentState;
    
    if (quantity <= 0) {
      this.removeItem(id);
      return;
    }
    
    this.cartState.next({
      ...currentState,
      items: currentState.items.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    });
  }

  toggleCart(): void {
    const currentState = this.currentState;
    this.cartState.next({
      ...currentState,
      isOpen: !currentState.isOpen
    });
  }

  // Nuevo método específico para cerrar el carrito
  closeCart(): void {
    const currentState = this.currentState;
    this.cartState.next({
      ...currentState,
      isOpen: false
    });
  }

  // Nuevo método específico para abrir el carrito
  openCart(): void {
    const currentState = this.currentState;
    this.cartState.next({
      ...currentState,
      isOpen: true
    });
  }

  clearCart(): void {
    const currentState = this.currentState;
    this.cartState.next({
      ...currentState,
      items: []
    });
  }

  // Métodos para obtener datos derivados de forma sincrónica
  get totalItems(): number {
    return this.currentState.items.reduce((total, item) => total + item.quantity, 0);
  }
  
  get totalPrice(): number {
    return this.currentState.items.reduce(
      (total, item) => total + item.price * item.quantity, 
      0
    );
  }
}
