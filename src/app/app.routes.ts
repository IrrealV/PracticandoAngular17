import { Routes } from '@angular/router';
import { RoutesService } from './core/services/routes/routes.service';
import { Allroutes } from './interfaces/nav-routes';

let allRutes = new RoutesService().getRoutes();

function convertRoutes(allRoutes: Allroutes[]): Routes {
  return allRoutes.map((route) => ({
    path: route.path.replace('./', ''),
    component: route.component,
  }));
}

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...convertRoutes(allRutes),
];
