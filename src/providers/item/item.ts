import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REST_API, REST_API_UNIQUE_ITEM } from './../../restAPI';
import {REST_API_ITEMS} from '../../restAPI'

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: HttpClient) {}

  public getItems(limit : number, offset: number): Promise<any> {
    let URI = `${REST_API_ITEMS}${limit}&offset=${offset}`
      return new Promise((resolve, reject) => {
        this.http.get(URI)
                 .subscribe( data => {
                   resolve(data)
                 }, err => {
                   reject(err)
                 })
      })
  }

  public getUniqueItem(name: string): Promise<any>{
    let URI = `${REST_API_UNIQUE_ITEM}${name}`
    return new Promise((resolve, reject) => {
      this.http.get(URI)
          .subscribe( data => resolve(data), err => reject(err))
    })
  }

}
