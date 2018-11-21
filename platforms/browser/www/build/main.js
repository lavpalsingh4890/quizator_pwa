webpackJsonp([0],{

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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2>\n          <button ion-button menuToggle icon-only>\n            <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only>\n            <ion-icon ios="ios-notifications" md="md-notifications"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n\n          <button ion-button icon-only>\n            <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n\n          <button ion-button icon-only>\n            <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n\n          <button ion-button icon-only>\n            <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items" >\n      <ion-card>\n        <img src="assets/imgs/397.jpg" />\n        <ion-card-content no-padding>\n           <ion-card-title>\n            Nine Inch Nails Live\n          </ion-card-title> \n         \n          <ion-grid>\n            <ion-row>\n            <ion-col col-6 *ngFor="let item of items"  text-wrap no-padding >\n                <p class="item-text-wrap" no-padding>\n                    The most popular industrial group ever, and largely\n                    responsible for bringing the music to a mass audience.\n                  </p>\n            </ion-col>\n         \n            </ion-row>\n          </ion-grid>\n         </ion-card-content> \n        <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Listen\n              </button>\n            </ion-col>\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n\n\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-interest',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/interest/interest.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Categories you like</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let item of items" col-auto>\n        <button ion-button (click)="validation(item)" color={{item.color}} round> {{item.data}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5 *ngIf="selcted_category_string">\n          Selected Categories:\n        </h5>\n        <h6>\n            {{selcted_category_string}}\n        </h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n      <button  ion-fab>\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/interest/interest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InterestPage);
    return InterestPage;
}());

//# sourceMappingURL=interest.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(203);
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
    function AddPostPage(navCtrl, navParams, textUtil, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.textUtil = textUtil;
        this.http = http;
        this.option = "Test";
        this.items = [];
        this.post_type = "quiz";
        this.data = {};
        this.isquiz = true;
        this.image = "../assets/imgs/397.jpg";
        this.data.username = 'Love';
        this.data.response = '';
        this.http = http;
    }
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
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
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
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-post',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/add-post/add-post.html"*/'<ion-content class="page-add-post">\n  <div class="container">\n    <img class="post_image" src="{{image}}" />\n    <ion-row class="btn" align-items-center>\n      <ion-col offset-10 col-2>\n        <button class="dp_button" margin ion-button icon-only clear>\n          <ion-icon name="heart"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-fab center middle>\n      <button *ngIf="!isImage" ion-fab>\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <ion-row radio-group [(ngModel)]="post_type">\n\n    <ion-col>\n      <ion-item>\n        <ion-label>Quiz\n        </ion-label>\n        <ion-radio value="quiz" (click)="isquiz=true;">\n        </ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Poll<ion-icon name="poll"></ion-icon>\n        </ion-label>\n        <ion-radio value="poll" (click)="isquiz=false;"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <div id="container">\n    <ion-list>\n\n      <ion-item class="rounded" id="question">\n        <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Add Question" (input)="change(1)" [(ngModel)]="question" required></ion-textarea>\n      </ion-item>\n      \n      <div *ngFor="let item of items">\n        <ion-row>\n          <ion-col col-8>\n            <ion-item>\n              <ion-textarea rows="1" id="messageInputBox" value={{item}} (input)="change()" required></ion-textarea>\n            </ion-item>\n          </ion-col>\n          <ion-col  col-2>\n          \n          </ion-col>\n          <ion-col col-2>\n            <button ion-button icon-only (click)="deleteOption(item)">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-item class="rounded" id="option">\n        <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Add Option"  [(ngModel)]="option"\n          required></ion-textarea>\n      </ion-item>\n     \n      <ion-item>\n        <button ion-button icon-start full (click)="addOption()">\n          <ion-icon name="md-add"></ion-icon>\n          Add Option\n        </button>\n      </ion-item>\n    \n        <ion-row *ngIf="items.length>1&&isquiz" justify-content-center> \n          <ion-col>\n              <ion-select [(ngModel)]="correct_option" multiple="false" placeholder="Choose correct option" style="width:100%">  \n                  <ion-option *ngFor="let item of items" value="{{item}}" selected="{{item}}">{{item}}</ion-option>\n              </ion-select>\n          </ion-col>\n        </ion-row>\n      \n      <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)" [(ngModel)]="description" required></ion-textarea>\n        </ion-item>\n    </ion-list>\n\n    <ion-row justify-content-center>\n      <ion-col>\n          <button ion-button color="dark" round full (click)="submit()">Draft</button>\n      </ion-col>\n      <ion-col>\n          <button ion-button color="dark" round full (click)="post()">Post</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__["a" /* TextUtilProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 202:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TextUtilProvider);
    return TextUtilProvider;
}());

//# sourceMappingURL=text-util.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__ = __webpack_require__(208);
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
    function WelcomePage(navCtrl, st, navParams, storage, sp) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/welcome/welcome.html"*/'\n\n<ion-content fullscreen="true" class="no-padding-top"> \n    \n       \n\n  <ion-slides #slider pager="true" autoplay="2500" loop="true" effect="fade" >\n    <ion-slide *ngFor="let slide of slides"\n               class="slide-background"\n               [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n      <div class="text-wrapper">\n        <div class="slide-text">\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n          <p [innerHTML]="slide.description"></p>\n          \n        </div>\n        <div class="floating-buttons  pop-in">\n          <ion-grid  >\n            <ion-row>\n                <ion-col text-center>\n                    <ion-label id="login-label">Login</ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row align-items-justify>\n            \n              <ion-col text-center>\n                \n                      <div *ngIf="isLoggedIn; else facebookLogin">\n                        <h2>Hi, {{users.name}} ({{users.email}})</h2>\n                        <p>\n                          Gender: {{users.gender}}\n                        </p>\n                        <p>\n                          <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n                        </p>\n                        <p>\n                          <button ion-button icon-right (click)="logout()">\n                            Logout\n                          </button>\n                        </p>\n                      </div>\n                      <div class="btn_container">\n                        <button ion-button full (click)="loginAction();" round>\n                           \n                          <ion-icon name="logo-facebook"></ion-icon>\n                          <ion-label>Facebook</ion-label>\n                        </button>\n                    </div>\n                                      \n              </ion-col>\n              <ion-col text-center>\n                  <button ion-button block color="danger" (click)="skip()" *ngIf="!userProfile" round>\n                      <ion-icon name="logo-googleplus"> </ion-icon>\n                      <ion-label>Google</ion-label>\n                        \n                    </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n    \n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__["a" /* StorageUtilProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__["a" /* SessionUtilProvider */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(207);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], StorageUtilProvider);
    return StorageUtilProvider;
}());

//# sourceMappingURL=storage-util.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_util_navigation_util__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pojo_session__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(8);
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
    function SessionUtilProvider(navCtrl, fb, googlePlus, storage, navUtil) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.navUtil = navUtil;
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
        this.get_login_state().then(function (val) {
            if (val == 'N') {
                console.log('Hello SessionUtilProvider Provider');
                // this.navCtrl.push(AccountPage);
                // this.navUtil.navigateTo('Account_page');
            }
        });
    };
    SessionUtilProvider.prototype.set_login_data = function (name, email, imageurl, login_type, bday, gender) {
        this.session_obj = new __WEBPACK_IMPORTED_MODULE_6__pojo_session__["a" /* session */](name, email, imageurl, login_type, bday, gender);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__navigation_util_navigation_util__["a" /* NavigationUtil */]])
    ], SessionUtilProvider);
    return SessionUtilProvider;
}());

//# sourceMappingURL=session-util.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationUtil = /** @class */ (function () {
    function NavigationUtil(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello SessionUtilProvider Provider');
    }
    NavigationUtil.prototype.navigateTo = function (page) {
        switch (page) {
            case "Account_page":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_account_account__["a" /* AccountPage */]);
                break;
        }
    };
    NavigationUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* NavController */]])
    ], NavigationUtil);
    return NavigationUtil;
}());

//# sourceMappingURL=navigation-util.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/account/account.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n\n      <ion-grid>\n        <ion-row>     \n          <ion-col>\n            <p class="email">{{slide.email}}</p>\n          </ion-col>\n          <ion-col>\n            <button class="dp_button" ion-button icon-only>\n              <ion-icon name="star"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-2>\n        <ion-fab>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col col-2 offset-1>\n        <ion-fab>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col col-2 offset-1>\n        <ion-fab>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n      <p style="color:black">Name</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row radio-group [(ngModel)]="Gender">\n\n          <ion-col>\n            <ion-item>\n              <ion-label>Male <ion-icon name="man"></ion-icon>\n              </ion-label>\n\n              <ion-radio value="male">\n\n              </ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label>Female <ion-icon name="woman"></ion-icon>\n              </ion-label>\n              <ion-radio value="female"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-row radio-group [(ngModel)]="AgeGroup">\n\n          <ion-col col-12>\n            <ion-label>Age Group</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>0-18</ion-label>\n              <ion-radio value="18"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>19-30</ion-label>\n              <ion-radio value="30"></ion-radio>\n            </ion-item>\n          </ion-col>\n\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>31-60</ion-label>\n              <ion-radio value="60"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label>61+</ion-label>\n              <ion-radio value="60plus"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-10>\n        <p>Country</p>\n      </ion-col>\n      <ion-col col-2>\n        <button *ngIf="isImage" ion-fab>\n          <ion-icon name="locate"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <p class="userid">userid</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button color="light" round full>Continue</button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <!-- </ion-card-content>\n  </ion-card> -->\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_swing__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_emoji__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_text_util_text_util__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_streaming_media__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_facebook__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_storage_util_storage_util__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_sqlite__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_session_util_session_util__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_navigation_util_navigation_util__ = __webpack_require__(211);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_29__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_28_ngx_facebook__["b" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'quizator',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
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
                __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Slides */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_25__providers_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_sqlite__["a" /* SQLite */],
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_text_util_text_util__["a" /* TextUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_34__providers_storage_util_storage_util__["a" /* StorageUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_session_util_session_util__["a" /* SessionUtilProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_navigation_util_navigation_util__["a" /* NavigationUtil */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_post_add_post__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(214);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'interest', component: __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__["a" /* InterestPage */] },
            { title: 'add post', component: __WEBPACK_IMPORTED_MODULE_7__pages_add_post_add_post__["a" /* AddPostPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
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

/***/ 311:
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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-basic-detail',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/basic-detail/basic-detail.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 align-items-center>\n            <button class="dp_button" ion-button icon-only>\n              <ion-icon name="google-md"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <p class="email">{{slide.email}}</p>\n          </ion-col>\n          <ion-col>\n            <button class="dp_button" ion-button icon-only>\n              <ion-icon name="star"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-fab center middle>\n        <button *ngIf="!isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-fab right bottom>\n        <button *ngIf="isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </ion-slide>\n  </ion-slides>\n\n\n  <!-- <div class="slides_container" > \n    <ion-slides #slider  autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()">\n      <ion-slide *ngFor="let slide of slides" class="slide_transition"   [style.background-color]="color" >\n       \n      </ion-slide>\n    </ion-slides>\n  </div> -->\n  <!-- <ion-card>\n    <ion-card-content> -->\n      <ion-grid>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Name</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row radio-group [(ngModel)]="Gender">\n\n              <ion-col>\n                <ion-item>\n                  <ion-label>Male <ion-icon name="man"></ion-icon>\n                  </ion-label>\n\n                  <ion-radio value="male">\n\n                  </ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Female <ion-icon name="woman"></ion-icon>\n                  </ion-label>\n                  <ion-radio value="female"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row radio-group [(ngModel)]="AgeGroup">\n\n              <ion-col col-12>\n                <ion-label>Age Group</ion-label>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>0-18</ion-label>\n                  <ion-radio value="18"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>19-30</ion-label>\n                  <ion-radio value="30"></ion-radio>\n                </ion-item>\n              </ion-col>\n\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>31-60</ion-label>\n                  <ion-radio value="60"></ion-radio>\n                </ion-item>\n              </ion-col>\n              <ion-col col-6>\n                <ion-item>\n                  <ion-label>61+</ion-label>\n                  <ion-radio value="60plus"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10>\n            <p>Country</p>\n          </ion-col>\n          <ion-col col-2>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="locate"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-item>\n                   <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n                </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <p class="userid">userid</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button color="light" round full>Continue</button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    <!-- </ion-card-content>\n  </ion-card> -->\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/basic-detail/basic-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BasicDetailPage);
    return BasicDetailPage;
}());

//# sourceMappingURL=basic-detail.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-blog',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/add-blog/add-blog.html"*/'<ion-content class="page-add-post">\n    <div class="container">\n      <img class="post_image" src="../assets/imgs/397.jpg" />\n      <ion-row class="btn" align-items-center>\n        <ion-col offset-10 col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-fab center middle>\n        <button *ngIf="!isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n  \n  \n    <div id="container">\n      <ion-list>\n  \n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Blog Name" (input)="change(1)" required></ion-textarea>\n        </ion-item>\n  \n       \n        <ion-item class="rounded" id="question">\n            <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)" required></ion-textarea>\n          </ion-item>\n          <ion-item class="rounded" id="option">\n              <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Choose Blog Category"  [(ngModel)]="option"\n                required></ion-textarea>\n            </ion-item>\n      </ion-list>\n  \n      <ion-row justify-content-center>\n        <ion-col>\n            <button ion-button color="dark" round full>Add Blog</button>\n        </ion-col>\n      </ion-row>\n  \n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/add-blog/add-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AddBlogPage);
    return AddBlogPage;
}());

//# sourceMappingURL=add-blog.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        console.log('ionViewDidLoad ChatmainPage');
    };
    ChatMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-main',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/chat-main/chat-main.html"*/'<ion-header>\n    <ion-navbar style="min-height:80px">\n     <ion-grid>\n       <ion-row>\n          <ion-col>         \n              <img src="images/profile.jpeg" style="width:60px;height:60px;border-radius:50%">         \n          </ion-col>\n          <ion-col style="margin-top:10px">\n              <div class="can-toggle" >\n                <div class="can-toggle demo-rebrand-2" >                 \n                      <input id="e" type="checkbox" >                \n                      <label for="e">                \n                        <div class="can-toggle__switch" data-checked="On" data-unchecked="No" style="max-width:150px; max-height:50px"></div>             \n                      </label>\n                    </div>\n                    </div>\n                  </ion-col>\n          <ion-col text-right style="margin-top:-5px">\n            <button ion-button icon-only large clear color="dark" >\n              <ion-icon name="ios-text"></ion-icon>\n            </button>\n          </ion-col>\n       </ion-row>\n     </ion-grid>    \n     </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <div >\n        <ion-segment [(ngModel)]="chats" style="background: linear-gradient(to right, #3A1C71 , #D76D77, #FFAF7B)">\n          <ion-segment-button value="heart" style="color:white">\n              <ion-icon name="heart"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="chat" style="color:white">\n              <ion-icon name="chatboxes"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value="star" style="color:white">\n              <ion-icon name="star"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="chats">\n        <ion-list *ngSwitchCase="\'heart\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="images/disha.jpg" style="border-radius:50%">\n            </ion-thumbnail>\n            <h2>Disha</h2> <br>\n            <p>This is text message</p>\n            <ion-badge item-end>2</ion-badge>\n\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="images/disha.jpg" style="border-radius:50%">\n              </ion-thumbnail>\n              <h2>Disha</h2>\n              <ion-badge item-end>2</ion-badge>\n            </ion-item>\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n         \n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'chat\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                        <img src="images/disha.jpg" style="border-radius:50%">\n                      </ion-thumbnail>\n                      <h2>Disha</h2>\n                      <ion-badge item-end>2</ion-badge>\n                    </ion-item>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                          <img src="images/disha.jpg" style="border-radius:50%">\n                        </ion-thumbnail>\n                        <h2>Disha</h2>\n                        <ion-badge item-end>2</ion-badge>\n                      </ion-item>\n       \n        </ion-list>\n        <ion-list *ngSwitchCase="\'star\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="images/disha.jpg" style="border-radius:50%">\n                </ion-thumbnail>\n                <h2>Disha</h2>\n                <ion-badge item-end>2</ion-badge>\n              </ion-item>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                    <img src="images/disha.jpg" style="border-radius:50%">\n                  </ion-thumbnail>\n                  <h2>Disha</h2>\n                  <ion-badge item-end>2</ion-badge>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                      <img src="images/disha.jpg" style="border-radius:50%">\n                    </ion-thumbnail>\n                    <h2>Disha</h2>\n                    <ion-badge item-end>2</ion-badge>\n                  </ion-item>\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                        <img src="images/disha.jpg" style="border-radius:50%">\n                      </ion-thumbnail>\n                      <h2>Disha</h2>\n                      <ion-badge item-end>2</ion-badge>\n                    </ion-item>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                          <img src="images/disha.jpg" style="border-radius:50%">\n                        </ion-thumbnail>\n                        <h2>Disha</h2>\n                        <ion-badge item-end>2</ion-badge>\n                      </ion-item>\n         \n          </ion-list>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/chat-main/chat-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatMainPage);
    return ChatMainPage;
}());

//# sourceMappingURL=chat-main.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-list',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/chat-list/chat-list.html"*/'<ion-header>\n\n    <ion-navbar>\n    <ion-row>\n        <ion-col>         \n            <img src="../../assets/imgs/397.jpg" style="width:60px;height:60px;border-radius:50%">         \n        </ion-col>\n        <ion-col style="margin-top:15px">\n          Tiger\n        </ion-col>\n        <ion-col text-right>\n          <button ion-button icon-only clear>\n              <ion-icon name="more"></ion-icon>\n          </button>\n        </ion-col>\n    </ion-row>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content>\n    <ion-row style="margin-top:5px">\n      <ion-col col-3>\n        &nbsp;\n      </ion-col>\n      <ion-col col-7 style="background-color:green; min-height:50px;border-radius:10px;" >\n        <p style=" padding:5px; color:white">Hi this is message. </p>\n      </ion-col>\n      <ion-col text-right style="    margin-top: 12px">\n          <img src="../../assets/imgs/397.jpg" style="width:50px;height:50px;border-radius:50%">\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:5px">\n        <ion-col text-left style="    margin-top: 12px">\n            <img src="../../assets/imgs/397.jpg" style="width:50px;height:50px;border-radius:50%">\n        </ion-col>\n        <ion-col col-7  style="background-color:#d3d3d3; min-height:50px;border-radius:10px;" >\n          <p style="padding:5px; color:black">Hi this is message. Hi this is message.Hi this is message.</p>\n        </ion-col>\n       \n        <ion-col col-3>\n            &nbsp;\n          </ion-col>\n      </ion-row>\n      <ion-row style="margin-top:5px">\n          <ion-col col-3>\n            &nbsp;\n          </ion-col>\n          <ion-col col-7 style="background-color:green; min-height:50px;border-radius:10px;" >\n            <p style=" padding:5px; color:white">Hi this is message. </p>\n          </ion-col>\n          <ion-col text-right style="    margin-top: 12px">\n              <img src="../../assets/imgs/397.jpg" style="width:50px;height:50px;border-radius:50%">\n          </ion-col>\n        </ion-row>\n        <ion-row style="margin-top:5px">\n            <ion-col text-left style="    margin-top: 12px">\n                <img src="../../assets/imgs/397.jpg" style="width:50px;height:50px;border-radius:50%">\n            </ion-col>\n            <ion-col col-7  style="background-color:#d3d3d3; min-height:50px;border-radius:10px;" >\n              <p style="padding:5px; color:black">Hi this is message. Hi this is message.Hi this is message.</p>\n            </ion-col>\n           \n            <ion-col col-3>\n                &nbsp;\n              </ion-col>\n          </ion-row>\n          <ion-footer>\n              <ion-toolbar>\n                <ion-row>\n                <ion-col col-1>\n                    <p>\n                        <button ion-button icon-right icon-only clear color="dark">                  \n                          <ion-icon name="camera"></ion-icon>\n                        </button>                \n                      </p>\n                </ion-col>\n                <ion-col col-9>\n                    <ion-item style="margin-top:15px; margin-left:18px">                    \n                        <ion-input type="text" value=""></ion-input>\n                      </ion-item>\n                </ion-col>\n                <ion-col col-1>\n                    <p text-right>\n                        <button ion-button icon-right icon-only clear color="dark">                  \n                          <ion-icon name="send"></ion-icon>\n                        </button>                \n                      </p>\n              </ion-col>\n            </ion-row>\n              </ion-toolbar>\n            </ion-footer>\n  </ion-content>\n  '/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/chat-list/chat-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatListPage);
    return ChatListPage;
}());

//# sourceMappingURL=chat-list.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-comment',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>comment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-matchup',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/matchup/matchup.html"*/'<!--\n  Generated template for the MatchupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/matchup/matchup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MatchupPage);
    return MatchupPage;
}());

//# sourceMappingURL=matchup.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewBlogPage = /** @class */ (function () {
    function ViewBlogPage(streamingMedia, fb) {
        this.streamingMedia = streamingMedia;
        this.fb = fb;
        this.items = [{ "url": "https://www.facebook.com/FunniestFamilyMoments/videos/251699442185029/UzpfSTYxMjk1NjM2NDoxMDE1NTk0NDQ2Nzk4NjM2NQ/" },
            { "url": "https://www.facebook.com/ViralBox.pk/videos/241889196494491/" }
        ];
        console.log('Initializing Facebook');
        fb.init({
            appId: '1927971220769787',
            version: 'v2.9'
        });
    }
    ViewBlogPage.prototype.playVideo = function () {
        this.video.href = "https://www.facebook.com/FunniestFamilyMoments/videos/251699442185029/UzpfSTYxMjk1NjM2NDoxMDE1NTk0NDQ2Nzk4NjM2NQ/";
        this.video.play();
    };
    ViewBlogPage.prototype.onVideoEvent = function (ev) {
        // if (this.video.finishedPlaying) {
        //   this.href= "https://www.facebook.com/ViralBox.pk/videos/241889196494491/";
        //   this.video.play();
        // }
        console.log('Video event fired: ' + ev);
    };
    ViewBlogPage.prototype.pauseVideo = function () {
        this.video.pause();
    };
    ViewBlogPage.prototype.stopVideo = function () {
        this.video.autoplay = true;
    };
    ViewBlogPage.prototype.startVideo = function () {
        var options = {
            successCallback: function () { console.log('Finished Video'); },
            errorCallback: function (e) { console.log('Error: ', e); },
            orientation: 'portrait'
        };
        // http://www.sample-videos.com/
        this.streamingMedia.playVideo('https://www.youtube.com/watch?v=oy53KAKHpts&index=6&list=PLhW3qG5bs-L-zox1h3eIL7CZh5zJmci4c', options);
    };
    ViewBlogPage.prototype.startAudio = function () {
        var options = {
            successCallback: function () { console.log('Finished Audio'); },
            errorCallback: function (e) { console.log('Error: ', e); },
            initFullscreen: false // iOS only!
        };
        //http://soundbible.com/2196-Baby-Music-Box.html
        this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
    };
    ViewBlogPage.prototype.stopAudio = function () {
        this.streamingMedia.stopAudio();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["a" /* FBVideoComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["a" /* FBVideoComponent */])
    ], ViewBlogPage.prototype, "video", void 0);
    ViewBlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-blog',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/view-blog/view-blog.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Media Streaming\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="startVideo()">Start Video</button>\n  <button ion-button full (click)="startAudio()">Start Audio</button>\n  <button ion-button full (click)="stopAudio()" color="danger">Stop Audio</button>\n  <h4>fb-video</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col   col-12>\n        <fb-video *ngFor="let item of items" href={{item.url}} (startPlaying)="onVideoEvent(\'startedPlaying\')" (paused)="onVideoEvent(\'paused\')"\n          (finishedPlaying)="onVideoEvent(\'finishedPlaying\')" (startedBuffering)="onVideoEvent(\'startedBuffering\')"\n          (finishedBuffering)="onVideoEvent(\'finishedBuffering\')" (error)="onVideoEvent(\'error\')"></fb-video>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <br>\n  <button class="btn btn-primary" (click)="playVideo()">Play</button>\n  <button class="btn btn-primary" (click)="pauseVideo()">Pause</button>\n  <h4>fb-share</h4>\n  <fb-share href="https://www.facebook.com/FunniestFamilyMoments/videos/251699442185029/UzpfSTYxMjk1NjM2NDoxMDE1NTk0NDQ2Nzk4NjM2NQ/"></fb-share>\n\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/view-blog/view-blog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["c" /* FacebookService */]])
    ], ViewBlogPage);
    return ViewBlogPage;
}());

//# sourceMappingURL=view-blog.js.map

/***/ }),

/***/ 322:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/view-post/view-post.html"*/'<ion-content>\n  <div class="container">\n    <img src="../assets/imgs/397.jpg"/> \n    <ion-row class="btn" align-items-center>\n      <ion-col col-2>\n        <ion-avatar class="avatar">\n          <img id="blog_image" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n        </ion-avatar>\n      </ion-col>\n      <ion-col col-8 text-start>\n        <div margin class="card-title">Madison</div>\n      </ion-col>\n\n      <ion-col col-2>\n        <button class="dp_button" margin ion-button icon-only clear>\n          <ion-icon name="heart"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n \n  </div>\n    \n   \n\n  <ion-row>\n    <ion-col col-10 text-start>\n      <div class="participants">Participants:</div>\n    </ion-col>\n    <ion-col col-2>\n      <ion-avatar class="avatar">\n        <img id="poll_result" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col text-center>\n      <div class="question">Question</div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="card" justify-content-center>\n    <ion-col col-auto class="item-text-wrap"  *ngFor="let item of items" >\n      <p  >\n       Ahdglcjdcerhiehil</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div class="description">Description</div>\n    </ion-col>\n  </ion-row>\n  <ion-row no-padding>\n    <ion-col>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'star\'></ion-icon>\n        Favorite\n      </button>\n    </ion-col>\n    <ion-col text-center>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'musical-notes\'></ion-icon>\n        Listen\n      </button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button clear small color="danger" icon-start>\n        <ion-icon name=\'share-alt\'></ion-icon>\n        Share\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/view-post/view-post.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ViewPostPage);
    return ViewPostPage;
}());

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-matchup-play',template:/*ion-inline-start:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/matchup-play/matchup-play.html"*/'<!--\n  Generated template for the MatchupPlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup-play</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/lav/Project WorkSpace/HAD/Quizator/Document/Quizator/src/pages/matchup-play/matchup-play.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MatchupPlayPage);
    return MatchupPlayPage;
}());

//# sourceMappingURL=matchup-play.js.map

/***/ }),

/***/ 336:
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

},[235]);
//# sourceMappingURL=main.js.map