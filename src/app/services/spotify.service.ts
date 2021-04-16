import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../components/models/pais.model';
import { Album } from '../components/models/album';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  paises:Pais[] = []
  albums: Album[] = []
  resultado:any;
  constructor(
    private http: HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBBrgNAeHua8-C2YE2ojzibW_Pq201Vc5iuVr9REA014nkRuu5OuTLawi8asktv3ecLy_eoDiS1a1wbC6M'
    });
    //Se tiene que pasar como header de la peticion http la Authorization que nos pidio al hacer el GET en postman(el Bearer mas el token)
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}) //Con el limit determinamos la cantidad de registros que queremos recibir
              .subscribe(data =>{
                this.resultado = data
                console.log(this.resultado)
                for (let index = 0; index < this.resultado.length; index++) {
                  this.albums.push(new Album(this.resultado[index].items[index].name,this.resultado.items[index].release_date,this.resultado.items[index].album_type,this.resultado.items[index].artists[0].name))
                }
              })
              console.log(this.albums)
              return this.albums
  }
   getPaises(){
    this.http.get('https://restcountries.eu/rest/v2/lang/es') //Recibimos informacion, con un GET de, la API
              .subscribe(informacionObtenida =>{
                console.log(informacionObtenida)
                this.resultado = informacionObtenida;
                console.log(this.resultado)
                for (let index = 0; index < this.resultado.length; index++){
                  this.paises.push(new Pais(this.resultado[index].name,this.resultado[index].nataliti,this.resultado[index].capital,this.resultado[index].currencie,this.resultado[index].lenguages))
                }
                console.log(this.paises)
              })
              return this.paises
  }
}
