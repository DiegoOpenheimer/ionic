import { InfoItemPage } from './../info-item/info-item';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemProvider } from '../../providers/item/item';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { InfoPokemonPage } from '../info-pokemon/info-pokemon';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  public itemView
  public items
  public limitItems = 20
  public offsetItems = 0

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public itemProvider: ItemProvider, public toastController: ToastController,
  public loadController: LoadingController, public modalController: ModalController) {
  }

  ionViewDidLoad() {

    let load = this.loadController.create({
      content: 'Carregando',

    })

    load.present()


    let toast = this.toastController.create({
      message: 'Falha no servidor',
      duration: 3000,
      showCloseButton: true
    })

   this.itemProvider.getItems(this.limitItems, this.offsetItems)
       .then( data => {
          load.dismiss()
          this.itemView = this.items = data['results']
          
       })
       .catch( e => {
         load.dismiss()
         toast.present()
         this.navCtrl.setRoot(HomePage)
       })
  }


  openInfo(item) {
    this.navCtrl.push(InfoItemPage, {
      item: { name: item.name }
    })
  }

  doInfinite(infinityScroll) {
    this.offsetItems += 20
    this.itemProvider.getItems(this.limitItems, this.offsetItems)
        .then( data => {
          data['results'].map( data => this.items.push(data))
          this.itemView = this.items
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
    if(name == '' || name == undefined) this.itemView = this.items
    else this.itemView = this.items.filter( item => item.name.toLowerCase().includes(name.toLowerCase()))
  }

}
