import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalbmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calbmi',
  templateUrl: 'calbmi.html',
})
export class CalbmiPage {

  weight: any;
  height: any;
  result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.weight = 0;
    this.height = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalbmiPage');
  }

  bmiCalculate(){
    if(this.weight > 0 && this.height > 0){
      var convertHeight = this.height/100
      this.result = (this.weight / (convertHeight * convertHeight)).toFixed(2)
    }
  }

}
