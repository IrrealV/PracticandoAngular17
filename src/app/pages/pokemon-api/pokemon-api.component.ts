import { Component, OnInit, TrackByFunction } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { Pokemon, PokemonResults } from '../../interfaces/pokemon';
import { EMPTY, Subscription, catchError, tap } from 'rxjs';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { environment } from '../../../environments/environment.development';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pokemon-api',
  standalone: true,
  imports: [PokemonComponent, ErrorMessageComponent, InfiniteScrollModule],
  templateUrl: './pokemon-api.component.html',
  styleUrl: './pokemon-api.component.css',
})
export class PokemonApiComponent implements OnInit {
  public pokemonList: Pokemon[] = [];
  public errorMessage!: string;
  private nextUrl?: string;
  private subscriptionsPokemon = new Subscription();

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon(environment.pokemonApiUrlBase); // Recibe la url desde el envionment
  }

  ngOnDestroy(): void {
    this.subscriptionsPokemon.unsubscribe(); // Se desubscribe para evitar fuga en la memoria
  }

  loadPokemon(url: string): void {
    const subscription = this.service
      .getPokemonObsevable(url)
      .pipe(
        catchError((error) => {
          this.errorMessage = error;
          return EMPTY;
        }),
        tap((results: PokemonResults) => {
          this.pokemonList = [...this.pokemonList, ...results.results];
          this.nextUrl = results.next; // Guarda la próxima URL para la paginación
        })
      )
      .subscribe();

    this.subscriptionsPokemon.add(subscription); // Agrega la suscripción al conjunto de suscripciones para una gestión adecuada
  }

  nextPage(): void {
    if (this.nextUrl) {
      this.loadPokemon(this.nextUrl);
    }
  }

  trackByPokemonName: TrackByFunction<any> = (index: number, character: any) =>
    character.name;
}
