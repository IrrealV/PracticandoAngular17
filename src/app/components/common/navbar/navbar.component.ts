import { Component, inject } from '@angular/core';

import { Allroutes } from '../../../interfaces/nav-routes';
import { RouterLink } from '@angular/router';
import { RoutesService } from '../../../core/services/routes/routes.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  routesService: RoutesService = inject(RoutesService);
  allroutes: Allroutes[] = this.routesService.getRoutes();
}
