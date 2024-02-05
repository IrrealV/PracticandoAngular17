import { Routes } from '@angular/router';
import { RoutesService } from './core/services/routes/routes.service';
import { Allroutes } from './interfaces/allroutes';

let allRutes = new RoutesService().getRoutes();

function convertRoutes(allRoutes: Allroutes[]): Routes {
  return allRoutes.map((route) => ({
    path: route.path.replace('./', ''), // Remover './' del inicio
    component: route.component,
  }));
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...convertRoutes(allRutes),
];
