import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
    },

    {
        path: 'invoices',
        loadComponent: () => import('./features/invoices/invoice-list/invoice-list').then(m => m.InvoiceList)
    },

    {
        path: 'invoices/create',
        loadComponent: () => import('./features/invoices/invoice-create/invoice-create').then(m => m.InvoiceCreate)
    },

    {
        path: 'invoices/:id',
        loadComponent: () => import('./features/invoices/invoice-detail/invoice-detail').then(m => m.InvoiceDetail)
    },

    {
        path: 'customers',
        loadComponent: () => import('./features/customers/customer-list/customer-list').then(m => m.CustomerList)
    },

    {
        path: 'products',
        loadComponent: () => import('./features/products/product-list/product-list').then(m => m.ProductList)
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
