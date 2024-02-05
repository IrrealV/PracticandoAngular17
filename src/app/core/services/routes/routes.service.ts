import { Injectable } from '@angular/core';
import { Allroutes } from '../../../interfaces/allroutes';
import { TodoListComponent } from '../../../pages/todo-list/todo-list.component';
import { RickMortyAPIComponent } from '../../../pages/rick-morty-api/rick-morty-api.component';
import { TheCatAPIComponent } from '../../../pages/the-cat-api/the-cat-api.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { PokemonApiComponent } from '../../../pages/pokemon-api/pokemon-api.component';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  rutas: Allroutes[] = [
    { path: 'home', title: 'Home', component: HomeComponent },
    {
      path: 'todo-list',
      title: 'Lista de tareas',
      component: TodoListComponent,
    },
    {
      path: 'pokemon-api',
      title: 'Pokemon API',
      component: PokemonApiComponent,
    },
    {
      path: 'rick-morty-api',
      title: 'API Rick&Morty',
      component: RickMortyAPIComponent,
    },
    {
      path: 'the-cat-api',
      title: 'API Gatos',
      component: TheCatAPIComponent,
    },
  ];

  constructor() {}

  getRoutes(): Allroutes[] {
    return this.rutas;
  }
}
