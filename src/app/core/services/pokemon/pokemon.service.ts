import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PokemonData,
  PokemonResults,
  PokemonSpecies,
} from '../../../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonResults(string: string): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(string);
  }

  getPokemonSpecies(string: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(string);
  }

  getPokemonData(string: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(string);
  }

  getRequest<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
