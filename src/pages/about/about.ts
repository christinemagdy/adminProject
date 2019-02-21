import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  name : string;
  age : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get('StudentName');
    this.age = this.navParams.get('StudentAge');
  }

  goBack()
  {
    this.navCtrl.pop();
  }

}
