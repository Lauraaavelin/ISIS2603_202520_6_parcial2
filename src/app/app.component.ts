import { Component } from '@angular/core';
import { ServiceService } from './Service.service';
import { Artista } from './Artista';
import { Album } from './Album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_examen2';
  artistas: Artista[] = [];
  ArtistaSeleccionado: Artista |any = null;
  HayArtistaSeleccionado: boolean = false;
  AlbumSeleccionado: Album|any = null;
  HayAlbumSeleccionado: boolean = false;


  constructor(private service: ServiceService) {}

  
  ngOnInit() {
    this.service.getArtists().subscribe( {
      next: (data) => {
        this.artistas = data;
        console.log(this.artistas);
      }
      
    });
  }

  seleccionarArtista(artista: Artista) {
    this.ArtistaSeleccionado = artista;
    this.HayArtistaSeleccionado = true;
  }

  seleccionarAlbum(album: Album) {
  this.AlbumSeleccionado = album;
  this.HayAlbumSeleccionado = true;
}


}
