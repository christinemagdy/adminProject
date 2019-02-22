import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ElderData } from '../../Models/elders.interface';



/**
 * Generated class for the EldersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elders',
  templateUrl: 'elders.html',
})
export class EldersPage {

  
  elderRef : FirebaseListObservable<ElderData[]>;
  elderList : ElderData[];

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private afDatabase: AngularFireDatabase) {
      
      this.elderRef = this.afDatabase.list('ElderData');
      this.elderRef.subscribe((Items) => {
        this.elderList = Items;
      });
       
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EldersPage');
  }

}
