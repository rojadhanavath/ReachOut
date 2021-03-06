
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'

export const router: Routes = [
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}



];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
