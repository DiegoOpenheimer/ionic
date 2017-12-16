import { ItemProvider } from './../../providers/item/item';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-info-item',
  templateUrl: 'info-item.html',
})
export class InfoItemPage {

  public infoItem

  /**
 * 
 * @param navCtrl the nav controller
 * @param navParams the navParams controller
 * @param loadCtrl the loadCtrl controller
 * @param toastCtrl the toast controller
 * @param itemService provider to do request to api
 */
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController,
    public itemService: ItemProvider
) {
  }

  ngOnInit() {
   let load =  this.loadCtrl.create({
      spinner: 'bubbles',
      content: 'Carregando...'
    })
  
   let toast = this.toastCtrl.create({
     message: 'Erro com conexão',
     duration: 3000,
     position: 'top'
   })
  
    load.present()

    this.itemService.getUniqueItem(this.navParams.get('item').name)
    .then( data => {
      load.dismiss()
      this.infoItem = data
     
    })
    .catch( err => {
      toast.present()
      this.navCtrl.pop()
      load.dismiss()
      console.log(err)
    })
  }

}
