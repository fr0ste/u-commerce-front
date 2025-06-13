import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NewsletterService } from '../services/newsletter.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isSubscribing = false;
  
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
  
  constructor(
    private newsletterService: NewsletterService,
    private snackBar: MatSnackBar
  ) {}
  
  subscribeToNewsletter(email: string): void {
    if (!email || !this.validateEmail(email)) {
      this.snackBar.open('Por favor, introduce un email válido', 'Cerrar', {
        duration: 3000
      });
      return;
    }
    
    this.isSubscribing = true;
    
    this.newsletterService.subscribe(email).subscribe({
      next: (response) => {
        console.log('Suscripción exitosa:', response);
        this.isSubscribing = false;
        this.snackBar.open('¡Gracias por suscribirte a nuestro newsletter!', 'Cerrar', {
          duration: 5000
        });
      },
      error: (error) => {
        console.error('Error en la suscripción:', error);
        this.isSubscribing = false;
        this.snackBar.open('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.', 'Cerrar', {
          duration: 5000
        });
      }
    });
  }
  
  private validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
}
