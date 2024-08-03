import { Component, OnInit, TrackByFunction } from '@angular/core';
import { RickMortyComponent } from '../../components/rick-morty/rick-morty.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { RickMorty, RickMortyResult } from '../../interfaces/rick-morty';
import { EMPTY, Subscription, catchError, tap } from 'rxjs';
import { RickMortyService } from '../../core/services/rick-morty/rick-morty.service';
import { environmentRickMorty } from '../../../environments/environment.development';
import { GameIndex } from '../../interfaces/pokemon';

@Component({
  selector: 'app-rick-morty-api',
  standalone: true,
  imports: [RickMortyComponent, ErrorMessageComponent],
  templateUrl: './rick-morty-api.component.html',
  styleUrl: './rick-morty-api.component.css',
})
export class RickMortyAPIComponent implements OnInit {
  rickmortyList: RickMortyResult[] = [];
  errorMessage!: string;
  nextUrl?: string;
  prevUrl?: string;
  subscriptionsRickMorty = new Subscription();

  constructor(private service: RickMortyService) {}

  ngOnInit(): void {
    this.loadRickMorty(environmentRickMorty.apiUrlBase);
  }

  ngOnDestroy(): void {
    this.subscriptionsRickMorty.unsubscribe();
  }

  loadRickMorty(url: string): void {
    const subscription = this.service
      .getRickMortyAllCharacters(url)
      .pipe(
        catchError((error) => {
          this.errorMessage = error;
          return EMPTY;
        }),
        tap((results) => {
          this.rickmortyList = results.results;
          this.nextUrl = results.info.next;
          this.prevUrl = results.info.prev;
        })
      )
      .subscribe();

    this.subscriptionsRickMorty.add(subscription);
  }

  nextPage(): void {
    if (this.nextUrl) {
      this.loadRickMorty(this.nextUrl);
    }
  }

  prevPage(): void {
    if (this.prevUrl) {
      this.loadRickMorty(this.prevUrl);
    }
  }

  trackByPersjId: TrackByFunction<any> = (index: number, persj: any) =>
    persj.id;
}
