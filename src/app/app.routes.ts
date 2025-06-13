import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'categories-page',
        loadComponent: () => import('./categories-page/categories-page.component').then(m => m.CategoriesPageComponent)
    },
    {
        path: 'categories-details',
        loadComponent: () => import('./category-detail/category-detail.component').then(m => m.CategoryDetailComponent)
    },
    {
        path: 'checkout-page',
        loadComponent: () => import('./checkout-page/checkout-page.component').then(m => m.CheckoutPageComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
    },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
