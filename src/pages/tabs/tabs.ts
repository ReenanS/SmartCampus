import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'Tab1Page';
  tab2Root: any = 'Tab2Page';
  //tab3Root: any = 'Tab1Page';
  //tab4Root: any = 'TimelinePage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}