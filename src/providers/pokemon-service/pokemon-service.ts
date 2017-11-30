import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REST_API } from '../../restAPI';


/*
  Generated class for the PokemonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonServiceProvider {

  constructor(public http: HttpClient) {
  }

  public getPokemons(limit: number) {
    console.log(`${REST_API}${limit}`)
    return new Promise((resolve, reject) => {
      this.http.get(`${REST_API}${limit}`)
      .subscribe( data => {
        resolve(data)
      }, err => {
        reject(err)
      })
    })
                   
            
  }

}
