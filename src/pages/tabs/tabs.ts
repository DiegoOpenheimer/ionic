import { Keyboard } from '@ionic-native/keyboard';
import { NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { PokemonPage } from '../pokemon/pokemon';
import { ItemPage } from '../item/item';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTab') myTab

  tab1Root = HomePage;
  tab2Root = PokemonPage;
  tab3Root = ItemPage;

  constructor(public keyboard: Keyboard) {
    this.keyboard.onKeyboardShow().subscribe( data => {
      this.myTab._elementRef.nativeElement.childNodes[0].hidden = true
    })

    this.keyboard.onKeyboardHide().subscribe( data => {
      this.myTab._elementRef.nativeElement.childNodes[0].hidden = false
    })
  }
  
}
