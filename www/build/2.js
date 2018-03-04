webpackJsonp([2],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab1__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Tab1PageModule = (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab1__["a" /* Tab1Page */]),
            ],
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());

//# sourceMappingURL=tab1.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
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


/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = (function () {
    function Tab1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab1Page');
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\tab1\tab1.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="card-background-page">\n    \n  <ion-card>\n    <img src="assets/imgs/students.jpg"/>\n    <ion-card-content>\n    <ion-card-title>Notícia 1</ion-card-title>\n    <p>No entanto, não podemos esquecer que o acompanhamento das preferências de consumo desafia a capacidade de equalização da gestão inovadora da qual fazemos parte.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/students1.jpg"/>\n    <ion-card-content>\n    <ion-card-title>\n    Notícia 2\n    </ion-card-title>\n    <p>\n        A certificação de metodologias que nos auxiliam a lidar com a constante divulgação das informações promove a alavancagem dos relacionamentos verticais entre as hierarquias.\n    </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/students2.jpg"/>\n    <ion-card-content>\n    <ion-card-title>Notícia 3</ion-card-title>\n    <p>É claro que o desenvolvimento contínuo de distintas formas de atuação pode nos levar a considerar a reestruturação dos níveis de motivação departamental.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/students3.jpg"/>\n    <ion-card-content>\n    <ion-card-title>Notícia 4</ion-card-title>\n    <p>É importante questionar o quanto a complexidade dos estudos efetuados obstaculiza a apreciação da importância dos procedimentos normalmente adotados.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-fab right top>\n      <button ion-fab color="primary"><ion-icon name="add"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Documents\IMT - Instituto Mauá de Tecnologia\Mauá 2018\TCC\Ionic_App\SmartCampus\src\pages\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ })

});
//# sourceMappingURL=2.js.map