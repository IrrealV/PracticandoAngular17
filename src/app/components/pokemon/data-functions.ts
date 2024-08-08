// src/app/components/pokemon/fetch-functions.ts
import { Subscription, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PokemonService } from '../../core/services/pokemon/pokemon.service';
import { PokemonSpecies, PokemonData } from '../../interfaces/pokemon';
import { typeTranslations } from './pokemon-types/type-translations';

interface FetchContext {
  subscriptions: Subscription;
  service: PokemonService;
  setErrorMessage: (error: string) => void;
}

interface SpeciesContext extends FetchContext {
  urlSpecies: string;
  setLatestDescription: (description: string) => void;
  setPokemonSpecies: (species: PokemonSpecies) => void;
}

interface PokemonContext extends FetchContext {
  urlPokemon: string;
  setPokemonData: (data: PokemonData) => void;
  setTypesArray: (types: string[]) => void;
}

export function fetchPokemonData(
  speciesContext: SpeciesContext,
  pokemonContext: PokemonContext
): void {
  fetchSpeciesData(speciesContext);
  fetchPokemonDetails(pokemonContext);
}

export function capFirstLetter(string: string): string {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function fetchSpeciesData(context: SpeciesContext): void {
  makeRequest<PokemonSpecies>(
    context.urlSpecies,
    (results: PokemonSpecies) => {
      handleSpeciesData(
        results,
        context.setLatestDescription,
        context.setPokemonSpecies
      );
    },
    context
  );
}

function fetchPokemonDetails(context: PokemonContext): void {
  makeRequest<PokemonData>(
    context.urlPokemon,
    (results: PokemonData) => {
      handlePokemonData(results, context.setPokemonData, context.setTypesArray);
    },
    context
  );
}

function handleSpeciesData(
  results: PokemonSpecies,
  setLatestDescription: (description: string) => void,
  setPokemonSpecies: (species: PokemonSpecies) => void
): void {
  const spanishDescriptions = results.flavor_text_entries.filter(
    (entry) => entry.language.name === 'es'
  );
  const latestDescription =
    spanishDescriptions[0]?.flavor_text ||
    'No se ha recibido ninguna descripción';
  setLatestDescription(latestDescription);
  setPokemonSpecies(results);
}

function handlePokemonData(
  results: PokemonData,
  setPokemonData: (data: PokemonData) => void,
  setTypesArray: (types: string[]) => void
): void {
  setPokemonData(results);
  const typesArray = results.types.map((tipo) =>
    capFirstLetter(typeTranslations[tipo.type.name] || tipo.type.name)
  );
  setTypesArray(typesArray);
}

function makeRequest<T>(
  url: string,
  onSuccess: (results: T) => void,
  context: FetchContext
): void {
  const subscription = context.service
    .getRequest<T>(url)
    .pipe(
      catchError((error) => {
        context.setErrorMessage(error);
        return EMPTY;
      }),
      tap(onSuccess)
    )
    .subscribe();

  context.subscriptions.add(subscription);
}
