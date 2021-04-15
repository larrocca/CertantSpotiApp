import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises :any = []

  constructor(
    private http: HttpClient,
    private _spotifyService: SpotifyService
  ) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es') //Recibimos informacion, con un GET de, la API
              .subscribe(informacionObtenida =>{
                this.paises = informacionObtenida
                console.log(informacionObtenida)
              })

    this._spotifyService.getNewReleases();
   }

  ngOnInit(): void {
  }

}
