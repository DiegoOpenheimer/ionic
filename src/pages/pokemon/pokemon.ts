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
  public pokemonView
  public offsetPokemons = 0
  public limitPokemons = 20
 
  constructor(public navCtrl: NavController, public pokemonProvider: PokemonServiceProvider,
  public loadingController: LoadingController, public toastController: ToastController ) {
  }

  ionViewDidLoad(){

    let loading = this.loadingController.create({
      content: 'Carregando'
    })
    loading.present()
    
    this.pokemonProvider.getPokemons(this.limitPokemons, this.offsetPokemons)
    .then( data => {
      this.pokemons = data['results']
      this.pokemonView = this.pokemons
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
      return false
    })
  }

  doInfinite(infinityScroll) {
    this.offsetPokemons += 20
    this.pokemonProvider.getPokemons(this.limitPokemons, this.offsetPokemons)
        .then( data => {
          data['results'].map( data => this.pokemons.push(data))
          this.pokemonView = this.pokemons
          infinityScroll.complete()
        })
        .catch( err => {
          infinityScroll.complete()
          let toast = this.toastController.create({
            message: 'Erro com conexão',
            duration: 3000,
            position: 'top'
          })
          toast.present()
        })
  }

  filterItems(event) {
    let name = event.target.value
    if(name == '' || name == undefined) this.pokemonView = this.pokemons
    else this.pokemonView = this.pokemons.filter( pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()))
  }

 
}
