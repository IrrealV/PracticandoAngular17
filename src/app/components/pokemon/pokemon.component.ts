import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {
  @Input() pokemonInfo!: Pokemon;
  urlImagenes: string = environment.officialArtwork;

  ngOnInit(): void {
    const identificador: string | null = this.urlNumber(
      this.pokemonInfo.url.toString()
    );
    this.urlImagenes = this.urlImagenes + identificador + '.png';
  }

  capFirstLetter(string: string): string {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  urlNumber(url: string): string | null {
    const match = url.match(/\/(\d+)\/?$/);
    return match ? match[1] : null;
  }
}
