import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading';
import { CardbuttonComponent } from './cardbutton/cardbutton';
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [LoadingComponent,
    CardbuttonComponent],
	imports: [CommonModule,IonicModule,BrowserAnimationsModule],
	exports: [LoadingComponent,
    CardbuttonComponent]
})
export class ComponentsModule {}
