import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminData } from '../../Models/admin.interface';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  admin = {} as AdminData;

  constructor(public navCtrl: NavController) {

  }
  Login(admin : AdminData)
  {
    if(admin.email == "admin@gmail.com" && admin.Password == "admin123")
    {
      this.navCtrl.setRoot('TabsPage');
    }
  }
}
