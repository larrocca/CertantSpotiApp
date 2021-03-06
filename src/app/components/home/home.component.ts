import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Pais } from '../models/pais.model';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises:Pais[] = []
  nuevosAlbums: Album[] = []

  constructor(
    private _spotifyService: SpotifyService
  ) {
    this.paises = this._spotifyService.getPaises()
    this.nuevosAlbums = this._spotifyService.getNewReleases()
    console.log(this.nuevosAlbums)
   }
   
  ngOnInit(): void {
  }

}
