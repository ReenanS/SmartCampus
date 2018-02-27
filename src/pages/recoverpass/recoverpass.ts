import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { LoginPage } from '../login/login';
import { LottieAnimationViewModule } from 'ng-lottie';

/**
 * Generated class for the RecoverpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recoverpass',
  templateUrl: 'recoverpass.html',
})
export class RecoverpassPage {

  // global from group object
  public recoverpassForm: FormGroup;

  // input controls
  public email: AbstractControl;

  // lotie config
  lottieConfig:any;

  constructor(public fb: FormBuilder,
    private alertCtrl: AlertController,
    public navCtrl: NavController) {

    LottieAnimationViewModule.forRoot();

    this.lottieConfig = {
        path: 'assets/js/simple_outline_lock_.json',
        autoplay: true,
        loop: true
                        }  
  }

  public ngOnInit(): void {

    this.recoverpassForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])]
    });

    // to get a direct handle to the AbstractControl, use "email" in the View
    this.email = this.recoverpassForm.controls['email'];

  }


  public signup() {

    if (!this.recoverpassForm.valid) {
      return;
    }

    this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Um email de recuperação foi enviado para você. Olhe seu email!',
      buttons: ['OK']

    }).present();

    this.navCtrl.setRoot(LoginPage);

    // example login procedure...

    // this
    //   .authService
    //   .signInWithEmailAndPassword(this.email.value, this.password.value)
    //   .catch((error: Error) => {

    //    there you have it a generic way of catching errors, for more details see:
    //    https://www.ionicrun.com/http-error-handling-informing-the-user-in-an-ionic-2-app/

    //     this
    //       .events
    //       .publish(ENV.EVENTS.ERROR, error);

    //   });

  }

  public login() {
    this.navCtrl.setRoot(LoginPage);
  }


}
