import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Enlaces rápidos para la navegación
  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'Shop', route: '/shop' },
    { label: 'Categories', route: '/categories' },
    { label: 'Deals', route: '/deals' },
    { label: 'About Us', route: '/about' }
  ];
  
  // Enlaces para el servicio al cliente
  customerServiceLinks = [
    { label: 'Contact Us', route: '/contact' },
    { label: 'FAQs', route: '/faqs' },
    { label: 'Shipping Policy', route: '/shipping' },
    { label: 'Returns & Exchanges', route: '/returns' },
    { label: 'Track Order', route: '/track-order' }
  ];
  
  // Redes sociales
  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com' },
    { icon: 'instagram', url: 'https://instagram.com' },
    { icon: 'twitter', url: 'https://twitter.com' },
    { icon: 'pinterest', url: 'https://pinterest.com' }
  ];
  
  // Métodos de pago
  paymentMethods = [
    { name: 'Visa', icon: 'assets/icons/visa.svg' },
    { name: 'Mastercard', icon: 'assets/icons/mastercard.svg' },
    { name: 'PayPal', icon: 'assets/icons/paypal.svg' }
  ];
  
  subscribeToNewsletter(email: string): void {
    // Implementación para suscribirse al newsletter
    console.log('Suscrito con email:', email);
  }
}
