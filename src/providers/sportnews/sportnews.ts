import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
/*
  Generated class for the SportNewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SportNewsProvider {
  public data: any;
  constructor(public http: HttpClient) {
    console.log('Hello SportNewsProvider Provider');
  }

  load(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
  return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      const url = 'https://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=eeb94dcc5ac245658f82eb900488eccf';
      this.http.get(url)
        .map(res => res)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

}
