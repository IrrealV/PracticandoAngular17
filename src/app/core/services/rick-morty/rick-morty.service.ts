import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RickMorty } from '../../../interfaces/rick-morty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  constructor(private http: HttpClient) {}

  getRickMortyAllCharacters(string: string): Observable<RickMorty> {
    return this.http.get<RickMorty>(string);
  }
}
