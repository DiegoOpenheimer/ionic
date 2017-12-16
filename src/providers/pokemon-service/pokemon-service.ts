import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REST_API, REST_API_UNIQUE_POKEMON } from '../../restAPI';


/*
  Generated class for the PokemonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonServiceProvider {

  constructor(public http: HttpClient) {
  }

  public getPokemons(limit: number, offset: number) {
    let URI = `${REST_API}${limit}&offset=${offset}`
    return new Promise((resolve, reject) => {
      this.http.get(URI)
      .subscribe( data => {
        resolve(data)
      }, err => {
        reject(err)
      })
    })
          
            
  }

  public getUniquePokemon(name: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${REST_API_UNIQUE_POKEMON}${name}`)
               .subscribe( data => {
                 resolve(data)
               }, err => {
                 reject(err)
               }) 
      })
  }

}
