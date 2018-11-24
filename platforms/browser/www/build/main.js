webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(109);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ServerUtil);
    return ServerUtil;
}());

//# sourceMappingURL=serverUtil.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Context = /** @class */ (function () {
    function Context() {
    }
    Context_1 = Context;
    Context.set = function (key, val) {
        Context_1.contextObject.set(key, val);
    };
    Context.get = function (key) {
        return Context_1.contextObject.get(key);
    };
    Context.contextObject = new Map();
    Context = Context_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Context);
    return Context;
    var Context_1;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(184);
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
    function CategoryPage(imagePicker, navCtrl, navParams, modalCtrl) {
        this.imagePicker = imagePicker;
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
    CategoryPage.prototype.pickImage = function () {
        var options = {};
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
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
            selector: 'page-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/'<ion-content padding class="page-category">\n  <ion-card>\n\n    <ion-card-header>\n      Choose Post Category\n      <button class="dp_button" (click)="clear()" ion-button clear end>clear\n       \n        </button>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <button ion-button (click)="getSubCategory(0)" color="light" round icon-end full>{{main_category}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_main_selected">\n        <button ion-button (click)="getSubCategory(1)" color="light" round icon-end full>{{sub_category1}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_sub_selected">\n          <button ion-button (click)="getSubCategory(2)" color="light" round icon-end full>{{sub_category2}}\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-header>\n        <ion-item>\n            <ion-label floating>Enter new category name</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n       \n      <ion-row *ngIf="is_category_image">\n        <div class="container">\n          <img class="post_image" src="{{image}}" />\n          <ion-row class="btn" align-items-center>\n            <ion-col col-2>\n              <button class="dp_button" margin ion-button icon-only clear>\n                <ion-icon name="heart"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col offset-7 col-2>\n              <button class="dp_button" margin ion-button icon-only clear>\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-row>\n      <ion-row>\n          <button (click)="pickImage()" ion-button color="light" round icon-end full>Add Category image\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-label *ngIf="is_error" class="error_text">\n    {{error_text}}\n  </ion-label>\n  <button ion-button color="light" round full>Done\n    </button>\n    <!-- <input type="file" (change)="onFileChanged($event)"> -->\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 240:
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
webpackEmptyAsyncContext.id = 240;

/***/ }),

/***/ 282:
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
webpackEmptyAsyncContext.id = 282;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        this.items = [
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2>\n            <button ion-button menuToggle icon-only>\n              <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-only>\n              <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n  \n            <button ion-button icon-only>\n              <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n  \n            <button ion-button icon-only>\n              <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n  \n            <button ion-button icon-only>\n              <ion-icon name="search"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n  \n            <button ion-button icon-only>\n              <ion-icon ios="ios-person" md="md-person"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n  \n  \n        </ion-row>\n      </ion-grid>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let item of items" >\n        <ion-card>\n          <img src="assets/imgs/397.jpg" />\n          <ion-card-content no-padding>\n             <ion-card-title>\n              Nine Inch Nails Live\n            </ion-card-title> \n           \n            <ion-grid>\n              <ion-row>\n              <ion-col col-6 *ngFor="let item of items"  text-wrap no-padding >\n                  <p class="item-text-wrap" no-padding>\n                      The most popular industrial group ever, and largely\n                      responsible for bringing the music to a mass audience.\n                    </p>\n              </ion-col>\n           \n              </ion-row>\n            </ion-grid>\n           </ion-card-content> \n          <ion-row no-padding>\n              <ion-col>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'star\'></ion-icon>\n                  Favorite\n                </button>\n              </ion-col>\n              <ion-col text-center>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'musical-notes\'></ion-icon>\n                  Listen\n                </button>\n              </ion-col>\n              <ion-col text-right>\n                <button ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'share-alt\'></ion-icon>\n                  Share\n                </button>\n              </ion-col>\n            </ion-row>\n  \n  \n        </ion-card>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InterestPage);
    return InterestPage;
}());

//# sourceMappingURL=interest.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_text_util_text_util__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_firebaseDataProvider__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_ImageUtil__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_crop__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_context__ = __webpack_require__(119);
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
    function AddPostPage(cropService, imageUtil, alertCtrl, toastCtrl, dataProvider, platform, camera, server, navCtrl, navParams, textUtil, http) {
        this.cropService = cropService;
        this.imageUtil = imageUtil;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.platform = platform;
        this.camera = camera;
        this.server = server;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.textUtil = textUtil;
        this.http = http;
        this.option = "Test";
        this.items = [];
        this.post_type = "quiz";
        this.isImage = false;
        this.data = {};
        this.isquiz = true;
        this.isImageUploading = false;
        this.image = "../assets/imgs/397.jpg";
        this.data.username = 'Love';
        this.data.response = '';
        this.http = http;
    }
    AddPostPage.prototype.getInfo = function () {
        this.dataProvider.getPath("files2/1543066535346.txt").subscribe(function (data) { return console.log(data); });
    };
    AddPostPage.prototype.addFile = function () {
        var _this = this;
        var inputAlert = this.alertCtrl.create({
            title: 'Store new information',
            inputs: [
                {
                    name: 'info',
                    placeholder: 'Lorem ipsum dolor...'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Store',
                    handler: function (data) {
                        _this.uploadInformation(data.info);
                    }
                }
            ]
        });
        inputAlert.present();
    };
    AddPostPage.prototype.uploadInformation = function (text) {
        var _this = this;
        var upload = this.dataProvider.uploadToStorage(text);
        // Perhaps this syntax might change, it's no error here!
        upload.then().then(function (res) {
            _this.dataProvider.storeInfoToDatabase(res.metadata).then(function () {
                console.log(res);
                var toast = _this.toastCtrl.create({
                    message: 'New File added!' + res,
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    AddPostPage.prototype.removeImage = function () {
        this.isImage = false;
        this.image = null;
        this.imageUtil.removeImage();
    };
    AddPostPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 1024,
            targetHeight: 768,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.isImage = true;
            if (_this.platform.is('ios'))
                _this.image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(imageData);
            else
                _this.image = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    AddPostPage.prototype.submit = function () {
        var _this = this;
        var link = 'http://localhost/api.php';
        var myData = JSON.stringify({ username: this.data.username });
        this.http.post(link, myData)
            .subscribe(function (data) {
            _this.data.response = data["_body"];
            console.log(_this.data.response);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    AddPostPage.prototype.chooseCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */]);
    };
    AddPostPage.prototype.addOption = function () {
        if (this.option.length != 0) {
            if (this.items.indexOf(this.option) == -1) {
                this.items.push(this.option);
                console.log(this.items.toString());
                this.option = "";
            }
            else {
                console.log("item already exists");
            }
        }
        else {
            console.log("item empty");
        }
    };
    AddPostPage.prototype.deleteOption = function (item) {
        if (this.items.indexOf(item) != -1) {
            this.items.splice(this.items.indexOf(item), 1);
            console.log(this.items.toString());
        }
        else {
            console.log("item doesn't exist");
        }
    };
    AddPostPage.prototype.change = function (index) {
        this.textUtil.change(index);
    };
    AddPostPage.prototype.post = function () {
        var post_type = this.post_type;
        var question = this.question;
        var options = this.items;
        var description = this.description;
        var image = this.image;
        var correct_option = this.correct_option;
        var post = {
            "post_type": post_type,
            "question": question,
            "options": options,
            "description": description,
            "image": image,
            "correct_option": correct_option
        };
        console.log(post);
    };
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
        var opt1 = this.createOption(1, "option1", true);
        var opt2 = this.createOption(2, "option2", false);
        var opt3 = this.createOption(3, "option3", false);
        var opts = [opt1, opt2, opt3];
        var post = this.createPost("My title", "My description", "My media path", 1, 1, "My post category", 1, opts);
        // this.server.addPost(post);
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
    AddPostPage.prototype.test = function () {
        if (!__WEBPACK_IMPORTED_MODULE_10__providers_context__["a" /* Context */].get("isImageUploading")) {
            __WEBPACK_IMPORTED_MODULE_10__providers_context__["a" /* Context */].set("isImageUploading", true);
            this.imageUtil.uploadImageToFirebase(this.image);
        }
    };
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/'<ion-content class="page-add-post">\n    <div class="container">\n      <div id="post_image_container" >\n        \n          <img  id="post_image" *ngIf="isImage" src="{{image}}" />\n      </div>\n      <ion-row  *ngIf="isImage" class="btn" align-items-center >  \n          <ion-col col-2>\n              <button class="dp_button" (click)="getImage()" margin ion-button icon-only clear>\n                <ion-icon name="add-circle"></ion-icon>\n              </button>\n            </ion-col>\n        <ion-col offset-7 col-2>\n          <button class="dp_button" (click)="removeImage()" margin ion-button icon-only clear>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-fab id="post_image_fab" *ngIf="!isImage" end middle>\n          <button (click)="getImage()"  ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n    </div>\n  <div id="post_detail"> \n\n\n    <ion-row *ngIf="isImage">\n        <button ion-button  (click)="test()"  full clear light>\n           Upload Image\n          </button>\n    </ion-row>\n    <ion-row *ngIf="!isImage">\n        <ion-item>\n            <ion-label floating>Add Media Url</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n    </ion-row>\n    <ion-row radio-group [(ngModel)]="post_type">\n  \n      <ion-col>\n        <ion-item>\n          <ion-label>Quiz\n          </ion-label>\n          <ion-radio value="quiz" (click)="isquiz=true; post_type=\'quiz\';">\n          </ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Poll<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="poll" (click)="isquiz=false; post_type=\'poll\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Fact<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="fact" (click)="isquiz=false; post_type=\'fact\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n    <div id="container">\n      <ion-list >\n  \n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Add Question" (input)="change(1)" [(ngModel)]="question" required></ion-textarea>\n        </ion-item>\n        <div *ngIf="post_type!=\'fact\'" >\n          \n        \n        <div *ngFor="let item of items">\n          <ion-row>\n            <ion-col col-8>\n              <ion-item>\n                <ion-textarea rows="1" id="messageInputBox" value={{item}} (input)="change()" required></ion-textarea>\n              </ion-item>\n            </ion-col>\n            <ion-col  col-2>\n            \n            </ion-col>\n            <ion-col col-2>\n              <button ion-button icon-only (click)="deleteOption(item)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n  \n        <ion-item class="rounded" id="option">\n          <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Add Option"  [(ngModel)]="option"\n            required></ion-textarea>\n        </ion-item>\n       \n        <ion-item>\n          <button ion-button icon-start full (click)="addOption()">\n            <ion-icon name="md-add"></ion-icon>\n            Add Option\n          </button>\n        </ion-item>\n      \n          <ion-row *ngIf="items.length>1&&isquiz" justify-content-center> \n            <ion-col>\n                <ion-select [(ngModel)]="correct_option" multiple="false" placeholder="Choose correct option" style="width:100%">  \n                    <ion-option *ngFor="let item of items" value="{{item}}" selected="{{item}}">{{item}}</ion-option>\n                </ion-select>\n            </ion-col>\n          </ion-row>\n        \n        <ion-item class="rounded" id="question">\n            <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)" [(ngModel)]="description" required></ion-textarea>\n          </ion-item>\n        </div>\n      </ion-list>\n  \n      <ion-row>\n          <button (click)="chooseCategory()" ion-button color="light" full>Select Category</button>\n      </ion-row>\n      <ion-row justify-content-center>\n          <ion-col>\n              <button ion-button color="dark" round full (click)="submit()">Cancel</button>\n          </ion-col>\n        <ion-col>\n            <button ion-button color="dark" round full (click)="submit()">Draft</button>\n        </ion-col>\n        <ion-col>\n            <button ion-button color="dark" round full (click)="post()">Post</button>\n        </ion-col>\n      </ion-row>\n  \n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_8__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_firebaseDataProvider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_text_util_text_util__["a" /* TextUtilProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 329:
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextUtilProvider = /** @class */ (function () {
    function TextUtilProvider() {
        console.log('Hello TextUtilProvider Provider');
    }
    TextUtilProvider.prototype.change = function (index) {
        // get elements
        var element = document.getElementById('messageInputBox' + index);
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
    TextUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TextUtilProvider);
    return TextUtilProvider;
}());

//# sourceMappingURL=text-util.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(109);
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
        console.log("constructor");
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
        var link;
        switch (this.type) {
            case 0:
                link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].PARENT_CATEGORY_PARAMS;
                break;
            case 1:
                link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.main_option2.id;
                break;
            case 2:
                link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.sub_option1.id;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */]])
    ], SubcategoryPage);
    return SubcategoryPage;
    var SubcategoryPage_1;
}());

//# sourceMappingURL=subcategory.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(377);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = /** @class */ (function () {
    function DataProvider(db, afStorage) {
        this.db = db;
        this.afStorage = afStorage;
    }
    DataProvider.prototype.getFiles = function () {
        var ref = this.db.list('files2');
        return ref.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    DataProvider.prototype.uploadToStorage = function (information) {
        var newName = new Date().getTime() + ".txt";
        return this.afStorage.ref("files2/" + newName).putString(information);
    };
    DataProvider.prototype.storeInfoToDatabase = function (metainfo) {
        var toSave = {
            created: metainfo.timeCreated,
            url: metainfo.downloadURLs[0],
            fullPath: metainfo.fullPath,
            contentType: metainfo.contentType
        };
        return this.db.list('files').push(toSave);
    };
    DataProvider.prototype.getPath = function (storagePath) {
        return this.afStorage.ref(storagePath).getDownloadURL();
    };
    DataProvider.prototype.deleteFile = function (file) {
        var key = file.key;
        var storagePath = file.fullPath;
        var ref = this.db.list('files');
        ref.remove(key);
        return this.afStorage.ref(storagePath).delete();
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=firebaseDataProvider.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ImageUtil = /** @class */ (function () {
    function ImageUtil(imagePicker, cropService, toastCtrl, firebaseService) {
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.toastCtrl = toastCtrl;
        this.firebaseService = firebaseService;
    }
    ImageUtil.prototype.uploadImageToFirebase = function (image) {
        var _this = this;
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(image);
        //uploads img to firebase storage
        this.firebaseService.uploadImage(image)
            .then(function (photoURL) {
            __WEBPACK_IMPORTED_MODULE_5__context__["a" /* Context */].set("isImageUploading", false);
            __WEBPACK_IMPORTED_MODULE_5__context__["a" /* Context */].set("photoURL", photoURL);
            console.log(photoURL);
            var toast = _this.toastCtrl.create({
                message: 'Image was uploaded successfully',
                duration: 3000
            });
            toast.present();
        });
    };
    ImageUtil.prototype.removeImage = function () {
        var image_name = __WEBPACK_IMPORTED_MODULE_5__context__["a" /* Context */].get("uploaded_image_key");
        this.firebaseService.removeImage(image_name).then(function (msg) {
            console.log(msg);
        });
    };
    ImageUtil.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.uploadImageToFirebase(results[i]);
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ImageUtil.prototype.openImagePickerCrop = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.uploadImageToFirebase(newImage);
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    ImageUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */]])
    ], ImageUtil);
    return ImageUtil;
}());

//# sourceMappingURL=ImageUtil.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
    }
    FirebaseService.prototype.encodeImageUri = function (imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    };
    ;
    FirebaseService.prototype.uploadImage = function (imageURI) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
            var newName = "" + new Date().getTime();
            var imageRef = storageRef.child('image').child('post').child(newName);
            __WEBPACK_IMPORTED_MODULE_4__context__["a" /* Context */].set("uploaded_image_key", newName);
            _this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    resolve(snapshot.downloadURL);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    FirebaseService.prototype.removeImage = function (name) {
        var storagePath = "image/post/" + name;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref(storagePath).delete();
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageUtilProvider = /** @class */ (function () {
    function StorageUtilProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('Hello StorageUtilProvider Provider');
    }
    StorageUtilProvider.prototype.executeSQL = function (database, sql) {
        var database_name = database + ".db";
        this.sqlite.create({
            name: database_name,
            location: 'default'
        })
            .then(function (db) {
            db.executeSql(sql, [])
                .then(function () { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    StorageUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], StorageUtilProvider);
    return StorageUtilProvider;
}());

//# sourceMappingURL=storage-util.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_session__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SessionUtilProvider = /** @class */ (function () {
    function SessionUtilProvider(appCtrl, fb, googlePlus, storage) {
        this.appCtrl = appCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.initialize_session();
        this.check_login_state();
    }
    SessionUtilProvider.prototype.initialize_session = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "N");
    };
    SessionUtilProvider.prototype.get_login_state = function () {
        return this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE);
    };
    SessionUtilProvider.prototype.set_login_state = function () {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "Y");
    };
    SessionUtilProvider.prototype.clear_login_state = function () {
        this.session_obj = null;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_OBJECT, this.session_obj);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "N");
    };
    SessionUtilProvider.prototype.check_login_state = function () {
        var _this = this;
        this.get_login_state().then(function (val) {
            if (val == 'N') {
                console.log('Hello SessionUtilProvider Provider');
                _this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */]);
                //this.navCtrl.push(AccountPage);
                // this.navUtil.navigateTo('Account_page');
            }
        });
    };
    SessionUtilProvider.prototype.set_login_data = function (name, email, imageurl, login_type, bday, gender) {
        this.session_obj = new __WEBPACK_IMPORTED_MODULE_5__pojo_session__["a" /* session */](name, email, imageurl, login_type, bday, gender);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_OBJECT, this.session_obj);
    };
    SessionUtilProvider.prototype.googleLogin = function () {
        this.googlePlus.login({
            'scopes': '',
        })
            .then(function (res) {
            console.log(JSON.stringify(res));
            console.log(res.imageUrl);
        })
            .catch(function (err) { return console.error(err); });
    };
    SessionUtilProvider.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
            .then(function (res) {
            if (res.status == "connected") {
                var fb_id = res.authResponse.userID;
                var fb_token = res.authResponse.accessToken;
                _this.fb.api("/me?fields=name,gender,birthday,email", []).then(function (user) {
                    var gender = user.gender;
                    var birthday = user.birthday;
                    var name = user.name;
                    var email = user.email;
                    console.log("=== USER INFOS ===");
                    console.log("Gender : " + gender);
                    console.log("Birthday : " + birthday);
                    console.log("Name : " + name);
                    console.log("Email : " + email);
                });
            }
            else {
                console.log("An error occurred...");
            }
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
        });
    };
    SessionUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SessionUtilProvider);
    return SessionUtilProvider;
}());

//# sourceMappingURL=session-util.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
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
    AccountPage.prototype.onSlideChanged = function () {
        this.random_int = Math.floor(Math.random() * (this.colors.length - 0 + 1)) + 0;
        this.color = this.colors[this.random_int];
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BasicDetailPage');
    };
    // @ViewChild('myInput') myInput: ElementRef;
    // resize() {
    //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    //     var scrollHeight = element.scrollHeight;
    //     element.style.height = scrollHeight + 'px';
    //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    // }
    AccountPage.prototype.change = function () {
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
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/account/account.html"*/'<ion-header>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n      <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n  \n        <ion-grid>\n          <ion-row>     \n            <ion-col>\n              <p class="email">{{slide.email}}</p>\n            </ion-col>\n            <ion-col>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n    </ion-slides>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-2>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n        <ion-col col-2 offset-1>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n        <ion-col col-2 offset-1>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        <p style="color:black">Name</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row radio-group [(ngModel)]="Gender">\n  \n            <ion-col>\n              <ion-item>\n                <ion-label>Male <ion-icon name="man"></ion-icon>\n                </ion-label>\n  \n                <ion-radio value="male">\n  \n                </ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Female <ion-icon name="woman"></ion-icon>\n                </ion-label>\n                <ion-radio value="female"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row radio-group [(ngModel)]="AgeGroup">\n  \n            <ion-col col-12>\n              <ion-label>Age Group</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>0-18</ion-label>\n                <ion-radio value="18"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>19-30</ion-label>\n                <ion-radio value="30"></ion-radio>\n              </ion-item>\n            </ion-col>\n  \n            <ion-col col-6>\n              <ion-item>\n                <ion-label>31-60</ion-label>\n                <ion-radio value="60"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>61+</ion-label>\n                <ion-radio value="60plus"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10>\n          <p>Country</p>\n        </ion-col>\n        <ion-col col-2>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="locate"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <p class="userid">userid</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button color="light" round full>Continue</button>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n    <!-- </ion-card-content>\n    </ion-card> -->\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(530);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_server_util_serverUtil__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_category_category__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_emoji__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_text_util_text_util__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_storage_util_storage_util__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_sqlite__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_session_util_session_util__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_image_picker__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_database__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2_storage__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_firebaseDataProvider__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_context__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_crop__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_ImageUtil__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_firebase_service__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var firebaseConfig = {
    apiKey: "AIzaSyAh1EyYPn6Uhn8R9e9AT7wqfPA4aWp8IB4",
    authDomain: "quizator-be795.firebaseapp.com",
    databaseURL: "https://quizator-be795.firebaseio.com",
    projectId: "quizator-be795",
    storageBucket: "quizator-be795.appspot.com",
    messagingSenderId: "556459777006"
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
                __WEBPACK_IMPORTED_MODULE_39_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_40_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_41_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'quizator',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Slides */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_28__providers_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_sqlite__["a" /* SQLite */],
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                __WEBPACK_IMPORTED_MODULE_29__providers_text_util_text_util__["a" /* TextUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_storage_util_storage_util__["a" /* StorageUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_session_util_session_util__["a" /* SessionUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_server_util_serverUtil__["a" /* ServerUtil */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_46__providers_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_42__providers_firebaseDataProvider__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_context__["a" /* Context */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_45__providers_ImageUtil__["a" /* ImageUtil */],
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_post_add_post__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(390);
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
    function MyApp(deeplinks, platform, statusBar, splashScreen, fcm) {
        this.deeplinks = deeplinks;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_add_post_add_post__["a" /* AddPostPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'interest', component: __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__["a" /* InterestPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        if (this.platform.is('ios')) {
            this.platform.ready().then(function () {
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
                _this.fcm.getToken().then(function (token) {
                    // Your best bet is to here store the token on the user's profile on the
                    // Firebase database, so that when you want to send notifications to this 
                    // specific user you can do it from Cloud Functions.
                });
                _this.fcm.onNotification().subscribe(function (data) {
                    if (data.wasTapped) {
                        console.log("Received in background");
                    }
                    else {
                        console.log("Received in foreground");
                    }
                    ;
                });
            });
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_util_serverUtil__ = __webpack_require__(108);
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
    function WelcomePage(server, navCtrl, st, navParams, storage, sp) {
        this.server = server;
        this.navCtrl = navCtrl;
        this.st = st;
        this.navParams = navParams;
        this.storage = storage;
        this.sp = sp;
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
        this.sp.initialize_session();
        this.sp.check_login_state();
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        //this.storage.store("love","pal");
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.goToApp = function () {
        console.log('Go to App clicked');
    };
    WelcomePage.prototype.skip = function () {
    };
    WelcomePage.prototype.showalert = function () {
        console.log(this.storage.executeSQL("testdb", "create table TestTable(ID INT, NAME VARCHAR(200));"));
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/welcome/welcome.html"*/'\n\n<ion-content fullscreen="true" class="no-padding-top"> \n    \n       \n\n    <ion-slides #slider pager="true" autoplay="2500" loop="true" effect="fade" >\n      <ion-slide *ngFor="let slide of slides"\n                 class="slide-background"\n                 [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n        <div class="text-wrapper">\n          <div class="slide-text">\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n            <p [innerHTML]="slide.description"></p>\n            \n          </div>\n          <div class="floating-buttons  pop-in">\n            <ion-grid  >\n              <ion-row>\n                  <ion-col text-center>\n                      <ion-label id="login-label">Login</ion-label>\n                  </ion-col>\n              </ion-row>\n              <ion-row align-items-justify>\n              \n                <ion-col text-center>\n                  \n                        <div *ngIf="isLoggedIn; else facebookLogin">\n                          <h2>Hi, {{users.name}} ({{users.email}})</h2>\n                          <p>\n                            Gender: {{users.gender}}\n                          </p>\n                          <p>\n                            <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n                          </p>\n                          <p>\n                            <button ion-button icon-right (click)="logout()">\n                              Logout\n                            </button>\n                          </p>\n                        </div>\n                        <div class="btn_container">\n                          <button ion-button full (click)="loginAction();" round>\n                             \n                            <ion-icon name="logo-facebook"></ion-icon>\n                            <ion-label>Facebook</ion-label>\n                          </button>\n                      </div>\n                                        \n                </ion-col>\n                <ion-col text-center>\n                    <button ion-button block color="danger" (click)="skip()" *ngIf="!userProfile" round>\n                        <ion-icon name="logo-googleplus"> </ion-icon>\n                        <ion-label>Google</ion-label>\n                          \n                      </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  \n      \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_server_util_serverUtil__["a" /* ServerUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__["a" /* StorageUtilProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__["a" /* SessionUtilProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App_Constants; });
var App_Constants = /** @class */ (function () {
    function App_Constants() {
    }
    Object.defineProperty(App_Constants, "SESSION_STATE", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App_Constants, "SESSION_OBJECT", {
        get: function () { return "session_object"; },
        enumerable: true,
        configurable: true
    });
    return App_Constants;
}());

//# sourceMappingURL=App_Constants.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return session; });
var session = /** @class */ (function () {
    function session(name, email, imageurl, login_type, bday, gender) {
        this.name = name;
        this.email = email;
        this.image_url = imageurl;
        this.login_type = login_type;
        this.bday = bday;
        this.gender = gender;
    }
    return session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-basic-detail',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/basic-detail/basic-detail.html"*/'<ion-header>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n      <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 align-items-center>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="google-md"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col>\n              <p class="email">{{slide.email}}</p>\n            </ion-col>\n            <ion-col>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-fab center middle>\n          <button *ngIf="!isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n        <ion-fab right bottom>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n      </ion-slide>\n    </ion-slides>\n  \n  \n    <!-- <div class="slides_container" > \n      <ion-slides #slider  autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()">\n        <ion-slide *ngFor="let slide of slides" class="slide_transition"   [style.background-color]="color" >\n         \n        </ion-slide>\n      </ion-slides>\n    </div> -->\n    <!-- <ion-card>\n      <ion-card-content> -->\n        <ion-grid>\n  \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n  \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-row radio-group [(ngModel)]="Gender">\n  \n                <ion-col>\n                  <ion-item>\n                    <ion-label>Male <ion-icon name="man"></ion-icon>\n                    </ion-label>\n  \n                    <ion-radio value="male">\n  \n                    </ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Female <ion-icon name="woman"></ion-icon>\n                    </ion-label>\n                    <ion-radio value="female"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n  \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-row radio-group [(ngModel)]="AgeGroup">\n  \n                <ion-col col-12>\n                  <ion-label>Age Group</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>0-18</ion-label>\n                    <ion-radio value="18"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>19-30</ion-label>\n                    <ion-radio value="30"></ion-radio>\n                  </ion-item>\n                </ion-col>\n  \n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>31-60</ion-label>\n                    <ion-radio value="60"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>61+</ion-label>\n                    <ion-radio value="60plus"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10>\n              <p>Country</p>\n            </ion-col>\n            <ion-col col-2>\n              <button *ngIf="isImage" ion-fab>\n                <ion-icon name="locate"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <ion-item>\n                     <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n                  </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <p class="userid">userid</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <button ion-button color="light" round full>Continue</button>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      <!-- </ion-card-content>\n    </ion-card> -->\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/basic-detail/basic-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BasicDetailPage);
    return BasicDetailPage;
}());

//# sourceMappingURL=basic-detail.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-add-blog',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-blog/add-blog.html"*/'<ion-content class="page-add-post">\n    <div class="container">\n      <img class="post_image" src="../assets/imgs/397.jpg" />\n      <ion-row class="btn" align-items-center>\n        <ion-col offset-10 col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-fab center middle>\n        <button *ngIf="!isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n  \n  \n    <div id="container">\n      <ion-list>\n  \n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Blog Name" (input)="change(1)" required></ion-textarea>\n        </ion-item>\n  \n       \n        <ion-item class="rounded" id="question">\n            <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)" required></ion-textarea>\n          </ion-item>\n          <ion-item class="rounded" id="option">\n              <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Choose Blog Category"  [(ngModel)]="option"\n                required></ion-textarea>\n            </ion-item>\n      </ion-list>\n  \n      <ion-row justify-content-center>\n        <ion-col>\n            <button ion-button color="dark" round full>Add Blog</button>\n        </ion-col>\n      </ion-row>\n  \n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-blog/add-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddBlogPage);
    return AddBlogPage;
}());

//# sourceMappingURL=add-blog.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatMainPage);
    return ChatMainPage;
}());

//# sourceMappingURL=chat-main.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatListPage);
    return ChatListPage;
}());

//# sourceMappingURL=chat-list.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MatchupPage);
    return MatchupPage;
}());

//# sourceMappingURL=matchup.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewBlogPage);
    return ViewBlogPage;
}());

//# sourceMappingURL=view-blog.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewPostPage = /** @class */ (function () {
    function ViewPostPage() {
        this.items = [
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
    }
    ViewPostPage.prototype.ngAfterViewInit = function () {
    };
    ViewPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-post/view-post.html"*/'<ion-content>\n    <div class="container">\n      <img src="../assets/imgs/397.jpg"/> \n      <ion-row class="btn" align-items-center>\n        <ion-col col-2>\n          <ion-avatar class="avatar">\n            <img id="blog_image" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-8 text-start>\n          <div margin class="card-title">Madison</div>\n        </ion-col>\n  \n        <ion-col col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n   \n    </div>\n      \n     \n  \n    <ion-row>\n      <ion-col col-10 text-start>\n        <div class="participants">Participants:</div>\n      </ion-col>\n      <ion-col col-2>\n        <ion-avatar class="avatar">\n          <img id="poll_result" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <div class="question">Question</div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row class="card" justify-content-center>\n      <ion-col col-auto class="item-text-wrap"  *ngFor="let item of items" >\n        <p  >\n         Ahdglcjdcerhiehil</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="description">Description</div>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/view-post/view-post.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ViewPostPage);
    return ViewPostPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MatchupPlayPage);
    return MatchupPlayPage;
}());

//# sourceMappingURL=matchup-play.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map