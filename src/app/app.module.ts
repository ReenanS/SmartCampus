import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { RecoverpassPage } from '../pages/recoverpass/recoverpass';
import { SideMenuPage } from '../pages/sidemenu/sidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    RecoverpassPage,
    SideMenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
    }),
    BrowserAnimationsModule,
    LottieAnimationViewModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    RecoverpassPage,
    SideMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
