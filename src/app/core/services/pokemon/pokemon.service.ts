import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResults } from '../../../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonObsevable(string: string): Observable<PokemonResults> {
    return this.http.get<PokemonResults>(string);
  }
}
