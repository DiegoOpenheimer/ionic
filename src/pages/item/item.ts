import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemProvider } from '../../providers/item/item';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  public items: Array<void>

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public itemProvider: ItemProvider, public toastController: ToastController,
  public loadController: LoadingController) {
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

   this.itemProvider.getItems(20)
       .then( data => {
          load.dismiss()
          this.items = data['results']
       })
       .catch( e => {
         toast.present()
         console.log(e)
         this.navCtrl.setRoot(HomePage)
       })
  }

}
