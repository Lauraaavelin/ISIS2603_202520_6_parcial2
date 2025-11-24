import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Album } from '../Album';
import { Artista } from '../Artista';
import { ServiceService } from '../Service.service';

@Component({
  selector: 'app-Albumes',
  templateUrl: './Albumes.component.html',
  styleUrls: ['./Albumes.component.css']
})
export class AlbumesComponent implements OnChanges {

  @Input() artista: Artista = new Artista(0, "", "", "", []);
  @Output() abrirAlbum = new EventEmitter<Album>();
  albumnes: Album[] = [];

  constructor(private s: ServiceService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['artista']) {
      this.albumnes = this.artista.albums || [];
    }
  }

  darAmado(album: Album): void {
    album.loved = !album.loved;
    
    this.s.marcarComoAmadoAlbum(album.id);
  }

  abrirTracks(album: Album): void {
    this.abrirAlbum.emit(album);
  }
}
