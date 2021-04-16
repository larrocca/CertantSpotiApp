import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../components/models/pais.model';
import { Album } from '../components/models/album.model';
import {map} from 'rxjs/operators'
import { Artists } from '../components/models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  paises:Pais[] = []
  albums: Album[] = []
  names: string[] =[]
  resultado:any;

  constructor(
    private http: HttpClient,
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCAzH1ugIv45Lgek033uRriCFRAXnGMwZJIxV6UJQmIYdz6uByr5rm7SUI_9HnLJbW58XL9b5wM3NbV_ro'
    });
    //Se tiene que pasar como header de la peticion http la Authorization que nos pidio al hacer el GET en postman(el Bearer mas el token)
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}) //Con el limit determinamos la cantidad de registros que queremos recibir
              .subscribe((data:any) =>{
                console.log(data.albums)
                console.log(data.albums.items[0].artists)
                this.resultado = data.albums.items
                for (let index = 0; index < this.resultado.length; index++){
                  for (let index2 = 0; index2 < this.resultado[index].artists.length; index2++) {
                    //(this.resultado[index].artists[index2].name)
                    //this.names[index2] = (this.resultado.items[index].artists[index2].name[index2])
                    this.names[index2] =  this.resultado[index].artists[index2].name
                  }
                  this.albums.push(new Album(this.resultado[index].name,this.resultado[index].release_date,this.resultado[index].album_type,this.names))
                  //Error con los artistas
                }
              })
             console.log(this.albums)
              return this.albums
  }
   getPaises(){
    this.http.get('https://restcountries.eu/rest/v2/lang/es') //Recibimos informacion, con un GET de, la API
              .subscribe(informacionObtenida =>{
                this.resultado = informacionObtenida;
                for (let index = 0; index < this.resultado.length; index++){
                  this.paises.push(new Pais(this.resultado[index].name,this.resultado[index].nataliti,this.resultado[index].capital,this.resultado[index].currencie,this.resultado[index].lenguages))
                }
              })
              return this.paises
  }
}
