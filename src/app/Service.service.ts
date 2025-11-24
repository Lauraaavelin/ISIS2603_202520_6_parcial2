import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artista } from './Artista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  private apiUrl= 'http://localhost:8080/artists';

constructor(private http: HttpClient) { }

getArtists(): Observable<Artista[]> {
  return this.http.get<Artista[]>(this.apiUrl);
}

marcarComoAmadaCancion(cancionId: number): void {
  const url = this.apiUrl+`/loveTrack?id=${cancionId}`;
 this.http.put(url, {});
}


marcarComoAmadoAlbum(albumId: number): void {
  const url = this.apiUrl+`/loveAlbum?id=${albumId}`;
 this.http.put(url, {});
}

}
