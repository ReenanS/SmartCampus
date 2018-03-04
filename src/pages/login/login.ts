import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SideMenuPage } from '../sidemenu/sidemenu';
import { SignupPage } from '../signup/signup';
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { RecoverpassPage } from '../recoverpass/recoverpass';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // global from group object
  public loginForm: FormGroup;

  // input controls
  public password: AbstractControl;
  public email: AbstractControl;


  constructor(public fb: FormBuilder,
    private alertCtrl: AlertController,
    public navCtrl: NavController) {
  }

  public ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });

    // to get a direct handle to the AbstractControl, use "email" in the View
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];

  }


  public login() {

    if (!this.loginForm.valid) {
      return;
    }

    this.alertCtrl.create({
      title: 'Sucesso',
      message: 'Parabéns! Você está logado no sistema.',
      buttons: ['OK']

    }).present();

    this.navCtrl.push(SideMenuPage,{},{animate: false});

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


  public signUp(): void {
    this.navCtrl.push(SignupPage,{},{animate: false});
  }


  public recoverPassword(): void {
    this.navCtrl.push(RecoverpassPage,{},{animate: false});
  }

}
