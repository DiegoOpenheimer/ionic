import { Component } from '@angular/core';

import { PokemonPage } from '../pokemon/pokemon';
import { ItemPage } from '../item/item';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PokemonPage;
  tab3Root = ItemPage;

  constructor() {

  }
}
