import { Album } from "./Album";

export class Artista {
    id: number;
    name: string;
    spotify_id: string;
    image: string;
    albums: Album[];

    constructor(id: number, n: string, spotify_id: string, image: string, albums: Album[]) {
        this.id = id;
        this.name = n;
        this.spotify_id = spotify_id;
        this.image = image;
        this.albums = albums;
    }
}