import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp
    ({
        apiKey: "AIzaSyDZyLA2OIbLxZKZr3UXAIF4saPL6qO7Kp4",
        authDomain: "elderly-project-f8c95.firebaseapp.com",
        databaseURL: "https://elderly-project-f8c95.firebaseio.com",
        projectId: "elderly-project-f8c95",
        storageBucket: "elderly-project-f8c95.appspot.com",
        messagingSenderId: "343779263934"
      }),
      AngularFireDatabaseModule,
      AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
