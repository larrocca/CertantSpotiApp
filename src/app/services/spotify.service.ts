import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCMMnPSWETbZvVNuPmY2oK6gxTpgOQWundksXQSr0PqIG6rHnzsXOhEOSYjHWUeXqYuBBq7bhEqjA3_Z9xd5WmzOf-cLu_EXRSuyHvwWT5j3nM0iR4PTLwlD6g8OWnlkmffYWYvzJPToQ'
    });
    //Se tiene que pasar como header de la peticion http la Authorization que nos pidio al hacer el GET en postman(el Bearer mas el token)

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers}) //Con el limit determinamos la cantidad de registros que queremos recibir
             .subscribe( data=>{
                console.log(data)
              })
  }
}
