import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LottieAnimationViewModule } from 'ng-lottie';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [

    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(65px)', offset: .3}),
        style({transform: 'translateX(0)', offset: 1})
      ])))
    ])
  ]
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Pular";
  state: string = 'x';

  // lotie config
  lottieConfig:any;
  lottieConfig1:any;
  lottieConfig2:any;

  constructor(public navCtrl: NavController) {
    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
      path: 'assets/js/done.json',
      autoplay: true,
      loop: true
                        }

    this.lottieConfig1 = {
      path: 'assets/js/trophy.json',
      autoplay: true,
      loop: true
                          }

    this.lottieConfig2 = {
        path: 'assets/js/bell.json',
        autoplay: true,
        loop: true
                           }
  }

  skip() {
    this.navCtrl.push(LoginPage,{},{animate: false});
  }

  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Pronto";
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = 'rightSwipe';
    else
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }

}
