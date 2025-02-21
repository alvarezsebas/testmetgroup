import { Routes } from '@angular/router';
import { Exercise1Component } from './pages/exercise1/exercise1.component';
import { Exercise2Component } from './pages/exercise2/exercise2.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './helpers/auth.guard';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: 'exercise1',
                loadComponent: () => import('./pages/exercise1/exercise1.component').then(m => m.Exercise1Component),
                canActivate: [authGuard]
            },
            {
                path: 'exercise2',
                loadComponent: () => import('./pages/exercise2/exercise2.component').then(m => m.Exercise2Component),
                canActivate: [authGuard]
            },
            {
                path: 'shop',
                loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent),
                canActivate: [authGuard]
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
                canActivate: [authGuard]
            },
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
            },
            
        ],
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
