import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { InfoPokemonPage } from '../../pages/info-pokemon/info-pokemon';

@Component({
  selector: 'unique-pokemon',
  templateUrl: 'unique-pokemon.html'
})
export class UniquePokemonComponent {

  @Input() public pokemon

  constructor(public navController:NavController) {
  }

  ionViewDidLoad(){
    console.log(this.pokemon)
  }

  getInfoPagePokemon(event) {
    this.navController.push(InfoPokemonPage, {
      pokemon: this.pokemon
    })
  }

}
