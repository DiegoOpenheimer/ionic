import { PokemonServiceProvider } from './../../providers/pokemon-service/pokemon-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-info-pokemon',
  templateUrl: 'info-pokemon.html',
})
export class InfoPokemonPage {



  public pokemonInfo

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController,
  public pokemonService : PokemonServiceProvider, public loadController:LoadingController) {
  }

  ngOnInit(){
    let load = this.loadController.create({
      content: 'Carregando'
    })

    load.present()

    this.pokemonService.getUniquePokemon(this.navParams.get('pokemon').name)
                       .then( data => {
                         load.dismiss()
                         this.pokemonInfo = data
                        })
                       .catch( err => {
                         console.log(err)
                       })
  }

  voltarTela() {
    this.viewController.dismiss()
  }

}
