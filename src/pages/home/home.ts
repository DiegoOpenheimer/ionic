import { Component, EventEmitter } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   constructor(public navCtrl: NavController) {

  }

  openPokemons() {
    if(this.navCtrl.parent instanceof Tabs) {
      this.navCtrl.parent.select(1)
    }
  }

}
