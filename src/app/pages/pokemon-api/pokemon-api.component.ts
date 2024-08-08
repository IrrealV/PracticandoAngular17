import { Component, OnInit, TrackByFunction } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { Pokemon, PokemonResults } from '../../interfaces/pokemon';
import { EMPTY, Subscription, catchError, tap } from 'rxjs';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { environmentPokemon } from '../../../environments/environment.development';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-pokemon-api',
  standalone: true,
  imports: [PokemonComponent, ErrorMessageComponent, InfiniteScrollDirective],
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
    this.loadPokemon(environmentPokemon.apiUrlBase);
  }

  ngOnDestroy(): void {
    this.subscriptionsPokemon.unsubscribe();
  }

  loadPokemon(url: string): void {
    const subscription = this.service
      .getPokemonResults(url)
      .pipe(
        catchError((error) => {
          this.errorMessage = error;
          return EMPTY;
        }),
        tap((results: PokemonResults) => {
          this.pokemonList = [...this.pokemonList, ...results.results];
          this.nextUrl = results.next;
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
