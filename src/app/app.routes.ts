import { BookComponent } from './book/book.component';
import { LandpageComponent } from './landpage/landpage.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthenticateGuard } from './authenticate.guard';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LandpageComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'book',   component: BookComponent, canActivate: [AuthenticateGuard]},
  { path: '**',     component: LandpageComponent },
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);