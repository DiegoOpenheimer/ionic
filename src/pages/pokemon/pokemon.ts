import { PokemonServiceProvider } from './../../providers/pokemon-service/pokemon-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';


@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage {

  public pokemons: any
  public pokemonName: string

  constructor(public navCtrl: NavController, public pokemonProvider: PokemonServiceProvider,
  public loadingController: LoadingController, public toastController: ToastController ) {

  }

  ionViewDidLoad(){

    let loading = this.loadingController.create({
      content: 'Carregando'
    })
    loading.present()
    
    this.pokemonProvider.getPokemons(20)
    .then( data => {
      this.pokemons = data['results']
      loading.dismiss()
    })
    .catch( e => {
      loading.dismiss()

      let toast = this.toastController.create({
        message: 'Falha no servidor',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      })

      toast.present()

      this.navCtrl.setRoot(HomePage)
    })
  }

  getObject(item) {
    this.pokemonName = item.target.innerText

  }

  

}
