webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.main_category = "Select Main Category";
        this.sub_category1 = "Select Sub Category";
        this.sub_category2 = "Select Sub Category";
        this.is_main_selected = false;
        this.is_sub_selected = false;
        this.is_category_image = false;
        this.is_error = false;
        this.error_text = "This is sample error";
        this.image = "../assets/imgs/397.jpg";
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected) {
            this.main_category = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option.category;
            this.is_main_selected = true;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            this.sub_category1 = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category;
            this.is_sub_selected = true;
            console.log(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.id + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.category + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category);
        }
    }
    CategoryPage.prototype.clear = function () {
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1 = null;
        this.is_sub_selected = false;
        this.is_main_selected = false;
        this.main_category = "Select Main Category";
        this.sub_category1 = "Select Sub Category";
        this.sub_category2 = "Select Sub Category";
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
    };
    CategoryPage.prototype.ioViewDidReload = function () {
        console.log('ionViewDidResume CategoryPage');
    };
    CategoryPage.prototype.getMainCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */]);
    };
    CategoryPage.prototype.getSubCategory = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */], type);
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/'<ion-content padding class="page-category">\n  <ion-card>\n\n    <ion-card-header>\n      Choose Post Category\n      <button class="dp_button" (click)="clear()" ion-button clear end>clear\n       \n        </button>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <button ion-button (click)="getSubCategory(0)" color="light" round icon-end full>{{main_category}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_main_selected">\n        <button ion-button (click)="getSubCategory(1)" color="light" round icon-end full>{{sub_category1}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_sub_selected">\n          <button ion-button (click)="getSubCategory(2)" color="light" round icon-end full>{{sub_category2}}\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-header>\n        <ion-item>\n            <ion-label floating>Enter new category name</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n       \n      <ion-row *ngIf="is_category_image">\n        <div class="container">\n          <img class="post_image" src="{{image}}" />\n          <ion-row class="btn" align-items-center>\n            <ion-col col-2>\n              <button class="dp_button" margin ion-button icon-only clear>\n                <ion-icon name="heart"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col offset-7 col-2>\n              <button class="dp_button" margin ion-button icon-only clear>\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-row>\n      <ion-row>\n          <button ion-button color="light" round icon-end full>Add Category image\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-label *ngIf="is_error" class="error_text">\n    {{error_text}}\n  </ion-label>\n  <button ion-button color="light" round full>Done\n    </button>\n\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object])
    ], CategoryPage);
    return CategoryPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerUtil = /** @class */ (function () {
    function ServerUtil(http) {
        this.http = http;
        this.data = {};
        console.log(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].BASE_URL);
    }
    ServerUtil.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //       headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ServerUtil.prototype.getSubCategory = function (parent_id) {
    };
    ServerUtil.prototype.addPost = function (post_data) {
        var _this = this;
        var link = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].POST_API;
        var myData = JSON.stringify(post_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        //       headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(link, myData, options)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
            console.log(_this.data.response);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ServerUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ServerUtil);
    return ServerUtil;
    var _a;
}());

//# sourceMappingURL=serverUtil.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 230:
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
webpackEmptyAsyncContext.id = 230;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterestPage = /** @class */ (function () {
    function InterestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.my_variable = 'light';
        this.selected_categories = new Array();
        this.items = [
            { data: "ABC", color: "light", isChecked: false },
            { data: "XYZ", color: "light", isChecked: false },
            { data: "XYZ234234545", color: "light", isChecked: false },
            { data: "XYZdcsv sdv", color: "light", isChecked: false },
            { data: "XYZwddcwqevscsdvcvvfvfdv", color: "light", isChecked: false },
            { data: "XYZ2e3", color: "light", isChecked: false },
            { data: "XYZ3e2", color: "light", isChecked: false },
            { data: "XYZ3e3d3", color: "light", isChecked: false },
            { data: "XYZe3d", color: "light", isChecked: false }
        ];
    }
    InterestPage.prototype.validation = function (item) {
        if (item.isChecked) {
            item.isChecked = false;
            item.color = 'light';
            this.selcted_category_string = this.selected_categories.splice(this.selected_categories.indexOf(item.data), 1).toString();
        }
        else {
            item.isChecked = true;
            item.color = 'dark';
            this.selected_categories.push(item.data);
        }
        this.selcted_category_string = this.selected_categories.toString();
    };
    InterestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestPage');
    };
    InterestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interest',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/interest/interest.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Categories you like</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let item of items" col-auto>\n        <button ion-button (click)="validation(item)" color={{item.color}} round> {{item.data}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5 *ngIf="selcted_category_string">\n          Selected Categories:\n        </h5>\n        <h6>\n            {{selcted_category_string}}\n        </h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n      <button  ion-fab>\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/interest/interest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InterestPage);
    return InterestPage;
}());

//# sourceMappingURL=interest.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(413);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_server_util_serverUtil__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_category_category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__["a" /* BasicDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__["a" /* AddBlogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__["a" /* ChatMainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__["a" /* ChatListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__["a" /* MatchupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__["a" /* ViewBlogPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__["a" /* ViewPostPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__["a" /* SubcategoryPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_category_category__["a" /* CategoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    statusbarPadding: true,
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */], name: 'welcome', segment: 'welcome' },
                        { component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__["a" /* BasicDetailPage */], name: 'basic', segment: 'basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */], name: 'account', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__["a" /* AddBlogPage */], name: 'addblog', segment: 'addblog' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__["a" /* AddPostPage */], name: 'addpost', segment: 'addpost' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__["a" /* ChatMainPage */], name: 'chat', segment: 'chat' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__["a" /* ChatListPage */], name: 'chatlist', segment: 'chatlist' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__["a" /* CommentPage */], name: 'comment', segment: 'comment' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__["a" /* InterestPage */], name: 'interest', segment: 'interest' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__["a" /* MatchupPage */], name: 'matchup', segment: 'matchup' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__["a" /* NotificationPage */], name: 'notification', segment: 'notification' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */], name: 'search', segment: 'search' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__["a" /* ViewBlogPage */], name: 'viewblog', segment: 'viewblog' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__["a" /* ViewPostPage */], name: 'viewpost', segment: 'viewpost' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */], name: 'matchupplay', segment: 'matchupplay' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__["a" /* BasicDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__["a" /* AddBlogPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__["a" /* AddPostPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__["a" /* ChatMainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__["a" /* ChatListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__["a" /* MatchupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__["a" /* ViewBlogPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__["a" /* ViewPostPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__["a" /* SubcategoryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Slides */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_24__providers_server_util_serverUtil__["a" /* ServerUtil */],
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(deeplinks, platform, statusBar, splashScreen) {
        this.deeplinks = deeplinks;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'interest', component: __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__["a" /* InterestPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    BASE_URL: "http://localhost:8080/",
    POST_API: "post",
    CATEGORY_API: "category",
    PARENT_CATEGORY_PARAMS: "?type=main&parent=0"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// @IonicPage({
//   name: 'welcome'
// })
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slideIndex = 0;
        this.slides = [
            {
                title: 'Dream\'s Adventure',
                imageUrl: 'assets/imgs/397.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'For the Weekend',
                imageUrl: 'assets/imgs/1683.jpg',
                description: 'Take a look at our amazing options',
            },
            {
                title: 'Family Time',
                imageUrl: 'assets/imgs/8281.jpg',
                description: 'Take a look at our amazing options',
            }
        ];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToApp = function () {
        console.log('Go to App clicked');
    };
    WelcomePage.prototype.skip = function () {
        console.log('Skip clicked');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/welcome/welcome.html"*/'\n\n<ion-content fullscreen="true" class="no-padding-top"> \n    \n       \n\n  <ion-slides #slider pager="true" autoplay="2500" loop="true" effect="fade" >\n    <ion-slide *ngFor="let slide of slides"\n               class="slide-background"\n               [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n      <div class="text-wrapper">\n        <div class="slide-text">\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n          <p [innerHTML]="slide.description"></p>\n          \n        </div>\n        <div class="floating-buttons  pop-in">\n          <ion-grid  >\n            <ion-row align-items-justify>\n              <ion-col text-center>\n                  <button ion-button color="light"  round>Guest Login</button>\n              </ion-col>\n              <ion-col text-center>\n                \n                      <div *ngIf="isLoggedIn; else facebookLogin">\n                        <h2>Hi, {{users.name}} ({{users.email}})</h2>\n                        <p>\n                          Gender: {{users.gender}}\n                        </p>\n                        <p>\n                          <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n                        </p>\n                        <p>\n                          <button ion-button icon-right (click)="logout()">\n                            Logout\n                          </button>\n                        </p>\n                      </div>\n                      <ng-template #facebookLogin>\n                        <button ion-button icon-right (click)="login()">\n                          Login with \n                          <ion-icon name="logo-facebook"></ion-icon>\n                        </button>\n                      </ng-template>\n                   \n              </ion-col>\n              <ion-col text-center>\n                  <button ion-button block color="danger" (click)="loginUser()" *ngIf="!userProfile">\n                      <ion-icon name="logo-googleplus"></ion-icon>\n                       Login\n                    </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n    \n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicDetailPage = /** @class */ (function () {
    function BasicDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isImage = true;
        this.colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];
        this.slides = [
            {
                email: "lavpalsingh4890@gmail.com",
                imageUrl: 'https://lorempixel.com/1200/1200/nature/1',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/2',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/3',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/4',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/5',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/6',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/7',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/8',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/9',
            }, {
                imageUrl: 'https://lorempixel.com/1200/1200/nature/10',
            },
        ];
        this.color = this.colors[0];
    }
    BasicDetailPage.prototype.onSlideChanged = function () {
        this.random_int = Math.floor(Math.random() * (this.colors.length - 0 + 1)) + 0;
        this.color = this.colors[this.random_int];
    };
    BasicDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasicDetailPage');
    };
    // @ViewChild('myInput') myInput: ElementRef;
    // resize() {
    //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    //     var scrollHeight = element.scrollHeight;
    //     element.style.height = scrollHeight + 'px';
    //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    // }
    BasicDetailPage.prototype.change = function () {
        // get elements
        var element = document.getElementById('messageInputBox');
        var textarea = element.getElementsByTagName('textarea')[0];
        // set default style for textarea
        textarea.style.minHeight = '0';
        textarea.style.height = '0';
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 96)
            scroll_height = 96;
        // apply new style
        element.style.height = scroll_height + "px";
        textarea.style.minHeight = scroll_height + "px";
        textarea.style.height = scroll_height + "px";
    };
    BasicDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basic-detail',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/basic-detail/basic-detail.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 align-items-center>\n            <button class="dp_button" ion-button icon-only>\n              <ion-icon name="google-md"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <p class="email">{{slide.email}}</p>\n          </ion-col>\n          <ion-col>\n            <button class="dp_button" ion-button icon-only>\n              <ion-icon name="star"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-fab center middle>\n        <button *ngIf="!isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-fab right bottom>\n        <button *ngIf="isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- <div class="slides_container" > \n    <ion-slides #slider  autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()">\n      <ion-slide *ngFor="let slide of slides" class="slide_transition"   [style.background-color]="color" >\n       \n      </ion-slide>\n    </ion-slides>\n  </div> -->\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row radio-group [(ngModel)]="Gender">\n\n              <ion-col>\n                <ion-item>\n                  <ion-label>Male <ion-icon name="man"></ion-icon>\n                  </ion-label>\n\n                  <ion-radio value="male">\n\n                  </ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Female <ion-icon name="woman"></ion-icon>\n                  </ion-label>\n                  <ion-radio value="female"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row radio-group [(ngModel)]="AgeGroup">\n\n              <ion-col col-12>\n                <ion-label>Age Group</ion-label>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>0-18</ion-label>\n                  <ion-radio value="18"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>19-30</ion-label>\n                  <ion-radio value="30"></ion-radio>\n                </ion-item>\n              </ion-col>\n\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>31-60</ion-label>\n                  <ion-radio value="60"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>61+</ion-label>\n                  <ion-radio value="60plus"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10>\n            <p>Country</p>\n          </ion-col>\n          <ion-col col-2>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="locate"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-item>\n                   <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n                </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p class="userid">userid</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button color="light" round full>Continue</button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/basic-detail/basic-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BasicDetailPage);
    return BasicDetailPage;
}());

//# sourceMappingURL=basic-detail.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AddBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddBlogPage = /** @class */ (function () {
    function AddBlogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddBlogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddBlogPage');
    };
    AddBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-blog',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-blog/add-blog.html"*/'<!--\n  Generated template for the AddBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-blog/add-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddBlogPage);
    return AddBlogPage;
}());

//# sourceMappingURL=add-blog.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPostPage = /** @class */ (function () {
    function AddPostPage(server, navCtrl, navParams) {
        this.server = server;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
        var opt1 = this.createOption(1, "option1", true);
        var opt2 = this.createOption(2, "option2", false);
        var opt3 = this.createOption(3, "option3", false);
        var opts = [opt1, opt2, opt3];
        var post = this.createPost("My title", "My description", "My media path", 1, 1, "My post category", 1, opts);
        this.server.addPost(post);
        console.log(post);
    };
    AddPostPage.prototype.createPost = function (title, description, media_path, post_type, post_category_id, post_category, blogger_id, options) {
        var post_data = {
            "title": title,
            "options": options,
            "post_type": post_type,
            "post_desc": description,
            "post_category_id": post_category_id,
            "category_name": post_category,
            "post_media_url": media_path,
            "blogger_id": blogger_id
        };
        return post_data;
    };
    AddPostPage.prototype.createOption = function (id, data, is_true) {
        var post_opt = {
            "post_option": data,
            "id": id,
            "is_correct": is_true,
            "poll_count": 0
        };
        return post_opt;
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ChatMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatMainPage = /** @class */ (function () {
    function ChatMainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatMainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatMainPage');
    };
    ChatMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-main',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/chat-main/chat-main.html"*/'<!--\n  Generated template for the ChatMainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat-main</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/chat-main/chat-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChatMainPage);
    return ChatMainPage;
}());

//# sourceMappingURL=chat-main.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ChatListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatListPage = /** @class */ (function () {
    function ChatListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatListPage');
    };
    ChatListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-list',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/chat-list/chat-list.html"*/'<!--\n  Generated template for the ChatListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat-list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/chat-list/chat-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChatListPage);
    return ChatListPage;
}());

//# sourceMappingURL=chat-list.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>comment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MatchupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchupPage = /** @class */ (function () {
    function MatchupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchupPage');
    };
    MatchupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matchup',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/matchup/matchup.html"*/'<!--\n  Generated template for the MatchupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/matchup/matchup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MatchupPage);
    return MatchupPage;
}());

//# sourceMappingURL=matchup.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ViewBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewBlogPage = /** @class */ (function () {
    function ViewBlogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewBlogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewBlogPage');
    };
    ViewBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-blog',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-blog/view-blog.html"*/'<!--\n  Generated template for the ViewBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view-blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-blog/view-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViewBlogPage);
    return ViewBlogPage;
}());

//# sourceMappingURL=view-blog.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ViewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPostPage = /** @class */ (function () {
    function ViewPostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPostPage');
    };
    ViewPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-post',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-post/view-post.html"*/'<!--\n  Generated template for the ViewPostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view-post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-post/view-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ViewPostPage);
    return ViewPostPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MatchupPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchupPlayPage = /** @class */ (function () {
    function MatchupPlayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchupPlayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchupPlayPage');
    };
    MatchupPlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matchup-play',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/matchup-play/matchup-play.html"*/'<!--\n  Generated template for the MatchupPlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup-play</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/matchup-play/matchup-play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MatchupPlayPage);
    return MatchupPlayPage;
}());

//# sourceMappingURL=matchup-play.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubcategoryPage = /** @class */ (function () {
    function SubcategoryPage(http, navCtrl, navParams, server) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.searchQuery = '';
        this.data = {};
        this.type = navParams.data;
        console.log("type: " + this.type);
        this.initializeItems();
    }
    SubcategoryPage_1 = SubcategoryPage;
    SubcategoryPage.prototype.log = function (item) {
        switch (this.type) {
            case 0:
                SubcategoryPage_1.main_option = item;
                SubcategoryPage_1.main_option2 = item;
                SubcategoryPage_1.is_main_selected = true;
                SubcategoryPage_1.sub_option1 = null;
                SubcategoryPage_1.is_sub1_selected = false;
                SubcategoryPage_1.sub_option2 = null;
                SubcategoryPage_1.is_sub2_selected = false;
                break;
            case 1:
                SubcategoryPage_1.sub_option1 = item;
                SubcategoryPage_1.is_sub1_selected = true;
                break;
            case 2:
                SubcategoryPage_1.main_option2 = SubcategoryPage_1.sub_option1;
                SubcategoryPage_1.is_main_selected = true;
                SubcategoryPage_1.sub_option1 = item;
                SubcategoryPage_1.is_sub1_selected = true;
                break;
            default:
                break;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]);
    };
    SubcategoryPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SubcategoryPage.prototype.getSubCategory = function () {
        var _this = this;
        switch (this.type) {
            case 0:
                var link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PARENT_CATEGORY_PARAMS;
                break;
            case 1:
                var link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.main_option2.id;
                break;
            case 2:
                var link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.sub_option1.id;
                break;
            default:
                break;
        }
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            console.log(_this.data.response);
            var data_array = JSON.stringify(d.json());
            var cat = JSON.parse(data_array);
            _this.category_data = cat.data;
        }, function (error) {
            console.log("Oooops!");
        });
    };
    SubcategoryPage.prototype.initializeItems = function () {
        this.getSubCategory();
    };
    SubcategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaincategoryPage');
    };
    SubcategoryPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SubcategoryPage.is_sub1_selected = false;
    SubcategoryPage.is_sub2_selected = false;
    SubcategoryPage.is_main_selected = false;
    SubcategoryPage = SubcategoryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subcategory',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/subcategory/subcategory.html"*/'<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item (click)="log(item)" *ngFor="let item of category_data">\n       <ion-label>\n        {{ item.category }}\n       </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-row>\n        <button ion-button (click)="back()" color="light" round full>Back\n          \n        </button>\n      </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/subcategory/subcategory.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */]) === "function" && _d || Object])
    ], SubcategoryPage);
    return SubcategoryPage;
    var SubcategoryPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=subcategory.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map