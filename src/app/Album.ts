import { Cancion } from "./Cancion";

export class Album{
    id: number;
    name: string;
    year: number;
    spotify_id: string;
    loved: boolean;
    image: string;
    tracks: Cancion[] = [];

    constructor(id: number, n: string, year: number, spotify_id: string, loved: boolean, image: string) {   
        this.id = id;
        this.name = n;
        this.year = year;
        this.spotify_id = spotify_id;
        this.loved = loved;
        this.image = image;
    }
    
}