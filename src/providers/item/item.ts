import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { REST_API } from './../../restAPI';
import {REST_API_ITEMS} from '../../restAPI'

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: HttpClient) {}

  public getItems(limit : number): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(`${REST_API_ITEMS}${limit}`)
                 .subscribe( data => {
                   resolve(data)
                 }, err => {
                   reject(err)
                 })
      })
  }

}
