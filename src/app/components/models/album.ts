export class Album {
    name: string;
    release_date: Date;
    album_type: string;
    artists: {
        nameArtist:string
    }

    constructor(
        name: string,
        release_date: Date,
        album_type: string,
        artists: {
            nameArtist:string
        }
    ) {
        this.name = name;
        this.release_date = release_date;
        this.album_type = album_type;
        this.artists = artists;
    }
}