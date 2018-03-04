webpackJsonp([7],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideMenuPage = (function () {
    function SideMenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
            { title: 'Grades', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'stats' },
            { title: 'Moodle', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'school' },
            { title: 'Calendar', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 3, icon: 'calendar' },
            { title: 'Logout', pageName: 'TabsPage', tabComponent: 'Tab5Page', index: 4, icon: 'log-out' }
        ];
    }
    SideMenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    SideMenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], SideMenuPage.prototype, "nav", void 0);
    SideMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sidemenu',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\sidemenu\sidemenu.html"*/'<ion-menu [content]="content">\n  <ion-content>\n      <ion-avatar>\n        <img src="assets/imgs/renan.jpeg">\n      </ion-avatar>\n      <h3>Renan Souza Silva</h3>\n    <ion-list>\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n \n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\sidemenu\sidemenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SideMenuPage);
    return SideMenuPage;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lottie__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(fb, alertCtrl, navCtrl) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        __WEBPACK_IMPORTED_MODULE_4_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot();
        this.lottieConfig = {
            path: 'assets/js/user.json',
            autoplay: true,
            loop: true
        };
    }
    SignupPage.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            username: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            password: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        // to get a direct handle to the AbstractControl, use "email" in the View
        this.email = this.signupForm.controls['email'];
        this.name = this.signupForm.controls['name'];
        this.username = this.signupForm.controls['username'];
        this.password = this.signupForm.controls['password'];
    };
    SignupPage.prototype.signup = function () {
        if (!this.signupForm.valid) {
            return;
        }
        this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Parabéns! Você criou uma conta. Agora faça o login',
            buttons: ['OK']
        }).present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
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
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\signup\signup.html"*/'<ion-content scrool="false" padding>\n\n    \n\n  <lottie-animation-view [options]="lottieConfig" [width]="250" [height]="250">\n\n\n\n  </lottie-animation-view>\n\n\n\n    <h3 ion-text\n\n        color="white"\n\n        style="margin-bottom:22px;"\n\n        margin-bottom>\n\n        <code>$smartcampus</code><span class="blink">&#9608;</span>\n\n    </h3>\n\n  \n\n    <form [formGroup]="signupForm"\n\n          margin-top\n\n          novalidate>\n\n  \n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-input placeholder="Email"\n\n                     formControlName="email"\n\n                     type="email"\n\n                     spellcheck="false"\n\n                     autocapitalize="off"\n\n                     required></ion-input>\n\n        </ion-item>\n\n        <ion-item margin-top>\n\n          <ion-input placeholder="Nome"\n\n                     formControlName="name"\n\n                     type="name"\n\n                     spellcheck="false"\n\n                     autocapitalize="off"\n\n                     required></ion-input>\n\n        </ion-item>\n\n        <ion-item margin-top>\n\n            <ion-input placeholder="Usuário"\n\n                       formControlName="username"\n\n                       type="username"\n\n                       spellcheck="false"\n\n                       autocapitalize="off"\n\n                       required></ion-input>\n\n          </ion-item>\n\n          <ion-item margin-top>\n\n            <ion-input placeholder="Senha"\n\n                       formControlName="password"\n\n                       type="password"\n\n                       spellcheck="false"\n\n                       autocapitalize="off"\n\n                       required></ion-input>\n\n          </ion-item>\n\n      </ion-list>\n\n  \n\n      <button (click)="signup()"\n\n              [disabled]="!signupForm.valid"\n\n              color="white"\n\n              type="button"\n\n              ion-button\n\n              block\n\n              outline\n\n              margin-bottom>Registrar</button>\n\n  \n\n    </form>\n\n  </ion-content>\n\n  \n\n  <ion-footer>\n\n    <ion-toolbar color="white-transparent"\n\n                 text-center>\n\n  \n\n      <ion-buttons>\n\n        <button (click)="login()"\n\n                ion-button\n\n                color="white">\n\n                <small>Já tem uma conta? <strong>Faça login.</strong>\n\n                </small>\n\n          </button>\n\n      </ion-buttons>\n\n  \n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_lottie__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RecoverpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverpassPage = (function () {
    function RecoverpassPage(fb, alertCtrl, navCtrl) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        __WEBPACK_IMPORTED_MODULE_4_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot();
        this.lottieConfig = {
            path: 'assets/js/simple_outline_lock_.json',
            autoplay: true,
            loop: true
        };
    }
    RecoverpassPage.prototype.ngOnInit = function () {
        this.recoverpassForm = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        // to get a direct handle to the AbstractControl, use "email" in the View
        this.email = this.recoverpassForm.controls['email'];
    };
    RecoverpassPage.prototype.signup = function () {
        if (!this.recoverpassForm.valid) {
            return;
        }
        this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Um email de recuperação foi enviado para você. Olhe seu email!',
            buttons: ['OK']
        }).present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
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
    };
    RecoverpassPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RecoverpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recoverpass',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\recoverpass\recoverpass.html"*/'<ion-content scrool="false" padding>\n\n  <lottie-animation-view [options]="lottieConfig" [width]="150" [height]="150">\n\n  </lottie-animation-view>\n\n    <h3 ion-text color="white" style="margin-bottom:22px;" margin-bottom>\n      <code>Esqueceu sua senha? Digite seu email abaixo para receber as instruções para recuperação de senha.</code>\n      <span class="blink">&#9608;</span>\n    </h3>\n\n  <form [formGroup]="recoverpassForm" margin-top novalidate>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-input placeholder="Email" formControlName="email" type="email" spellcheck="false" autocapitalize="off" required></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button (click)="signup()" [disabled]="!recoverpassForm.valid" color="white" type="button" ion-button block outline margin-bottom>Enviar senha</button>\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="white-transparent" text-center>\n\n    <ion-buttons>\n      <button (click)="login()" ion-button color="white">\n        <small>Não recebeu o email de recuperação?\n          <strong>Clique aqui.</strong>\n        </small>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\recoverpass\recoverpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], RecoverpassPage);
    return RecoverpassPage;
}());

//# sourceMappingURL=recoverpass.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		282,
		6
	],
	"../pages/recoverpass/recoverpass.module": [
		283,
		5
	],
	"../pages/sidemenu/sidemenu.module": [
		284,
		4
	],
	"../pages/signup/signup.module": [
		287,
		3
	],
	"../pages/tab1/tab1.module": [
		285,
		2
	],
	"../pages/tab2/tab2.module": [
		288,
		0
	],
	"../pages/tabs/tabs.module": [
		286,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lottie__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.skipMsg = "Pular";
        this.state = 'x';
        __WEBPACK_IMPORTED_MODULE_3_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot();
        this.lottieConfig = {
            path: 'assets/js/done.json',
            autoplay: true,
            loop: true
        };
        this.lottieConfig1 = {
            path: 'assets/js/trophy.json',
            autoplay: true,
            loop: true
        };
        this.lottieConfig2 = {
            path: 'assets/js/bell.json',
            autoplay: true,
            loop: true
        };
    }
    HomePage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], {}, { animate: false });
    };
    HomePage.prototype.slideChanged = function () {
        if (this.slides.isEnd())
            this.skipMsg = "Pronto";
    };
    HomePage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    HomePage.prototype.animationDone = function () {
        this.state = 'x';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\home\home.html"*/'<ion-content scroll="false">\n  <ion-slides pager (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-content padding>\n          <lottie-animation-view [options]="lottieConfig" [width]="250" [height]="250">\n         \n          </lottie-animation-view>\n        </ion-content>\n      </div>\n      <div [@bounce]=\'state\'>\n        <h2>Por que se cadastrar?</h2>\n        <p>Ao se cadastrar, seus dados serão mineirados.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-content padding>\n          <lottie-animation-view [options]="lottieConfig1" [width]="250" [height]="250">\n         \n          </lottie-animation-view>\n        </ion-content>\n      </div>\n      <div>\n        <h2>Conheça as suas notas</h2>\n        <p>Utilize o aplicativo, sincronize com a web e acesse todos as suas notas além dos calendários de provas e mapa de salas.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-content padding>\n          <lottie-animation-view [options]="lottieConfig2" [width]="200" [height]="200">\n         \n          </lottie-animation-view>\n        </ion-content>\n      </div>\n      <div>\n        <h2>Mantenha-se informado</h2>\n        <p>Notícias da Mauá no seu celular.</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <button (click)="skip()" id="skip">{{ skipMsg }}</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\home\home.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(-65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recoverpass_recoverpass__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sidemenu_sidemenu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_lottie__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recoverpass_recoverpass__["a" /* RecoverpassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sidemenu_sidemenu__["a" /* SideMenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false,
                }, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recoverpass/recoverpass.module#RecoverpassPageModule', name: 'RecoverpassPage', segment: 'recoverpass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SideMenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng_lottie__["a" /* LottieAnimationViewModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recoverpass_recoverpass__["a" /* RecoverpassPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sidemenu_sidemenu__["a" /* SideMenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recoverpass_recoverpass__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(fb, alertCtrl, navCtrl) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            password: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
        });
        // to get a direct handle to the AbstractControl, use "email" in the View
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    };
    LoginPage.prototype.login = function () {
        if (!this.loginForm.valid) {
            return;
        }
        this.alertCtrl.create({
            title: 'Sucesso',
            message: 'Parabéns! Você está logado no sistema.',
            buttons: ['OK']
        }).present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__["a" /* SideMenuPage */], {}, { animate: false });
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
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { animate: false });
    };
    LoginPage.prototype.recoverPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recoverpass_recoverpass__["a" /* RecoverpassPage */], {}, { animate: false });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\login\login.html"*/'  <ion-content scrool="false" padding>\n    \n    <img class="logo" src="assets/imgs/logo.png">\n\n    <h3 ion-text\n        color="white"\n        style="margin-bottom:22px;"\n        margin-bottom>\n        <code>$smartcampus</code><span class="blink">&#9608;</span>\n    </h3>\n  \n    <form [formGroup]="loginForm"\n          margin-top\n          novalidate>\n  \n      <ion-list no-lines>\n        <ion-item>\n          <ion-input placeholder="Email ou nome de usuário"\n                     formControlName="email"\n                     type="email"\n                     spellcheck="false"\n                     autocapitalize="off"\n                     required></ion-input>\n        </ion-item>\n        <ion-item margin-top>\n          <ion-input placeholder="Senha"\n                     formControlName="password"\n                     type="password"\n                     spellcheck="false"\n                     autocapitalize="off"\n                     required></ion-input>\n        </ion-item>\n      </ion-list>\n  \n      <button (click)="login()"\n              [disabled]="!loginForm.valid"\n              color="white"\n              type="button"\n              ion-button\n              block\n              outline\n              margin-bottom>Entrar</button>\n  \n      <button (click)="recoverPassword()"\n              color="white"\n              type="button"\n              ion-button\n              block\n              clear>\n              <small>Esqueceu seus dados de login? <strong>Obtenha ajuda para entrar.</strong></small></button>\n  \n    </form>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-toolbar color="white-transparent"\n                 text-center>\n  \n      <ion-buttons>\n        <button (click)="signUp()"\n                ion-button\n                color="white">\n                <small>Não tem uma conta? <strong>Cadastra-se.</strong>\n                </small>\n          </button>\n      </ion-buttons>\n  \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map