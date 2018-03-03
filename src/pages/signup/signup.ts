import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { LoginPage } from '../login/login';
import { LottieAnimationViewModule } from 'ng-lottie';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  // global from group object
  public signupForm: FormGroup;

  // input controls
  public email: AbstractControl;
  public name: AbstractControl;
  public username: AbstractControl;
  public password: AbstractControl;
  
  // lotie config
  lottieConfig:any;

  constructor(public fb: FormBuilder,
    private alertCtrl: AlertController,
    public navCtrl: NavController) {

  LottieAnimationViewModule.forRoot();

  this.lottieConfig = {
    path: 'assets/js/user.json',
    autoplay: true,
    loop: true
                      }
                                  }

  public ngOnInit(): void {

    this.signupForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });

    // to get a direct handle to the AbstractControl, use "email" in the View
    this.email = this.signupForm.controls['email'];
    this.name = this.signupForm.controls['name'];
    this.username = this.signupForm.controls['username'];
    this.password = this.signupForm.controls['password'];

  }


  public signup() {

    if (!this.signupForm.valid) {
      return;
    }

    this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Parabéns! Você criou uma conta. Agora faça o login',
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

  public login(){
    this.navCtrl.setRoot(LoginPage);
  }

}
