import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PokemonPage } from '../pages/pokemon/pokemon';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemPage } from '../pages/item/item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PokemonServiceProvider } from '../providers/pokemon-service/pokemon-service';
import {HttpClientModule} from '@angular/common/http'
import { ItemProvider } from '../providers/item/item';



@NgModule({
  declarations: [
    MyApp,
    PokemonPage,
    HomePage,
    TabsPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PokemonPage,
    HomePage,
    TabsPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PokemonServiceProvider,
    ItemProvider,
    
  ]
})
export class AppModule {}
