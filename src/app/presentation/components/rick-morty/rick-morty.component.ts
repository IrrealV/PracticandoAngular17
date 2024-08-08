import { Component, Input, OnInit } from '@angular/core';
import { RickMortyResult, Status } from '../../../interfaces/rick-morty';

@Component({
  selector: 'app-rick-morty',
  standalone: true,
  imports: [],
  templateUrl: './rick-morty.component.html',
  styleUrl: './rick-morty.component.css',
})
export class RickMortyComponent implements OnInit {
  @Input() persj!: RickMortyResult;
  public urlImagen!: string;
  public persjStatus!: string;

  ngOnInit(): void {
    this.urlImagen = this.persj.image;
    this.persjStatus = this.translateStatus(this.persj.status);
  }

  translateStatus(status: Status): string {
    const statusMap: { [key in Status]: string } = {
      Alive: 'Vivo',
      Dead: 'Muerto',
      unknown: 'Desconocido',
    };
    return statusMap[status];
  }
}
