export class Cancion {
    id: number;
    name: string;
    spotify_id: string;
    minutes: number;
    seconds: number;
    loved: boolean;

    constructor(id: number, n: string, spotify_id: string, minutes: number, seconds: number, loved: boolean) {
        this.id = id;
        this.name = n;
        this.spotify_id = spotify_id;
        this.minutes = minutes;
        this.seconds = seconds;
        this.loved = loved;
    }
}