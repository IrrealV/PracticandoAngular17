// src/app/components/pokemon/pokemon.component.ts
import { Component, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Pokemon, PokemonSpecies, PokemonData } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { environmentPokemon } from '../../../environments/environment.development';
import { fetchPokemonData, capFirstLetter } from './data-functions';
import { typeColors } from './pokemon-types/type-colors';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit, OnDestroy {
  @Input() pokemonInfo!: Pokemon;
  public latestDescription: string = 'No se ha recibido ninguna descripción';
  public pokemonSpecies!: PokemonSpecies;
  public pokemonData!: PokemonData;
  public urlSpecies: string = '';
  public urlImagen: string = '';
  private urlPokemon: string = '';
  public errorMessage!: string;
  public showPopUp = false;
  public typesArray: string[] = [];
  public animationClass = '';
  private subscriptions = new Subscription();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.initializeUrls();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initializeUrls(): void {
    const identificador = this.extractIdFromUrl(
      this.pokemonInfo.url.toString()
    );
    this.urlSpecies = `${environmentPokemon.species}${identificador}`;
    this.urlImagen = `${environmentPokemon.officialArtwork}${identificador}.png`;
    this.urlPokemon = `${environmentPokemon.pokemon}${identificador}`;
  }

  private extractIdFromUrl(url: string): string | null {
    const match = url.match(/\/(\d+)\/?$/);
    return match ? match[1] : null;
  }

  private fetchData(): void {
    const speciesContext = {
      urlSpecies: this.urlSpecies,
      subscriptions: this.subscriptions,
      service: this.pokemonService,
      setErrorMessage: (error: string) => (this.errorMessage = error),
      setLatestDescription: (description: string) =>
        (this.latestDescription = description),
      setPokemonSpecies: (species: PokemonSpecies) =>
        (this.pokemonSpecies = species),
    };

    const pokemonContext = {
      urlPokemon: this.urlPokemon,
      subscriptions: this.subscriptions,
      service: this.pokemonService,
      setErrorMessage: (error: string) => (this.errorMessage = error),
      setPokemonData: (data: PokemonData) => (this.pokemonData = data),
      setTypesArray: (types: string[]) => (this.typesArray = types),
    };

    fetchPokemonData(speciesContext, pokemonContext);
  }

  togglePopUp(): void {
    this.showPopUp = !this.showPopUp;
    this.animationClass = this.showPopUp
      ? 'animationPopDown'
      : 'animationPopUp';

    if (!this.showPopUp) {
      this.closePopup();
    }
  }

  getTypeClass(): string {
    for (const type of this.typesArray) {
      if (typeColors[type]) {
        return typeColors[type];
      }
    }
    return 'bg-normal'; // Valor por defecto si no se encuentra ningún tipo
  }

  closePopup(): void {
    this.animationClass = 'animationPopUp';
    setTimeout(() => {
      this.showPopUp = false;
    }, 450);
  }

  capFirstLetter(string: string): string {
    return capFirstLetter(string);
  }
}
