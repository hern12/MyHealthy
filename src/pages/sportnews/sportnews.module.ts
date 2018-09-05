import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportnewsPage } from './sportnews';

@NgModule({
  declarations: [
    SportnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(SportnewsPage),
  ],
})
export class SportnewsPageModule {}
