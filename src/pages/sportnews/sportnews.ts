import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SportNewsProvider } from '../../providers/sportnews/sportnews';
/**
 * Generated class for the SportnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sportnews',
  templateUrl: 'sportnews.html',

})
export class SportnewsPage {

  public news: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sportService: SportNewsProvider) {
    this.loadNews();
  }

  loadNews(){
    this.sportService.load()
    .then(data => {
      this.news = data.articles.map((item,index) => {
        if(item.title && item.description && item.urlToImage){
          return {
            author:item.author,
            title:item.title.length > 30 ? this.cutString(item.title,30) : item.title,
            description: item.description.length > 50 ? this.cutString(item.description,50) : item.description,
            urlToImage: item.urlToImage,
            url:item.url
          }
        }else{
          return ''
        }
      })
    });
  }

  cutString(textData:string,numSlice:number): string{
    return textData.slice(0,numSlice)+"..."
  }

}
