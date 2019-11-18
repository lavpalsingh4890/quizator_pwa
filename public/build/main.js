webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ImageUtil = class ImageUtil {
    constructor(imagePicker, cropService, firebaseService, camera) {
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.firebaseService = firebaseService;
        this.camera = camera;
    }
    uploadImageToFirebase(image) {
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* normalizeURL */])(image);
        return this.firebaseService.uploadImage(image);
    }
    removeImage() {
        var image_name = __WEBPACK_IMPORTED_MODULE_5__context__["a" /* Context */].get("uploaded_image_key");
        this.firebaseService.removeImage(image_name).then(msg => {
            console.log(msg);
        });
    }
    openImagePicker() {
        this.imagePicker.hasReadPermission().then((result) => {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then((results) => {
                    for (var i = 0; i < results.length; i++) {
                        this.uploadImageToFirebase(results[i]);
                    }
                }, (err) => console.log(err));
            }
        }, (err) => {
            console.log(err);
        });
    }
    openImagePickerCrop() {
        this.imagePicker.hasReadPermission().then((result) => {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then((results) => {
                    for (var i = 0; i < results.length; i++) {
                        this.cropService.crop(results[i], { quality: 75 }).then(newImage => {
                            this.uploadImageToFirebase(newImage);
                        }, error => console.error("Error cropping image", error));
                    }
                }, (err) => console.log(err));
            }
        }, (err) => {
            console.log(err);
        });
    }
    getImage() {
        let options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 1024,
            targetHeight: 768,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE
        };
        return this.camera.getPicture(options);
    }
};
ImageUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
], ImageUtil);

//# sourceMappingURL=ImageUtil.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagnamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let TagnamePage = class TagnamePage {
    constructor(alertCtrl, toastCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.isCategory = false;
        this.keyword = this.navParams.get("keyword");
        this.type = this.navParams.get("type");
        console.log(this.type);
        if (this.type == 'category') {
            this.isCategory = true;
            this.initializeCategories();
            this.getCategories();
        }
        else {
            this.initializeItems();
            this.getTags();
        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TagnamePage');
    }
    initializeItems() {
        this.items = [];
    }
    longPressed(item) {
        if (this.type == 'category') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */], { "Category": item });
        }
        else
            this.presentPrompt(item);
        console.log('Long press card ' + item);
    }
    updateTag(new_tag, id) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_TASVEER + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAGNAME_API + "/" + id;
        return this.http.put(link, new_tag, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    }
    presentPrompt(item) {
        let alert = this.alertCtrl.create({
            title: 'Edit Tag',
            inputs: [
                {
                    name: 'TagName',
                    placeholder: 'Tag Name',
                    value: item.tag
                },
                {
                    name: 'TagMediaUrl',
                    placeholder: 'Media Url',
                    value: item.mediaUrl
                },
                {
                    name: 'MediaSource',
                    placeholder: 'Media Source',
                    value: item.imageCredits
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Done',
                    handler: data => {
                        if (data.TagName != item.tag || data.TagMediaUrl != item.mediaUrl || data.MediaSource != item.imageCredits) {
                            var new_tag = {
                                "id": item.id,
                                "mediaUrl": data.TagMediaUrl,
                                "tag": data.TagName,
                                "imageCredits": data.MediaSource
                            };
                            this.updateTag(new_tag, item.id).subscribe(d => {
                                this.getTags();
                            }, error => {
                            });
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    }
    presentPromptCategory(item) {
        let alert = this.alertCtrl.create({
            title: 'Edit Category',
            inputs: [
                {
                    name: 'CategoryName',
                    placeholder: 'Category Name',
                    value: item.category
                },
                {
                    name: 'CategoryMediaUrl',
                    placeholder: 'Media Url',
                    value: item.category_media
                },
                {
                    name: 'ParentID',
                    placeholder: 'Parent ID',
                    value: item.parentId
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Done',
                    handler: data => {
                        if (data.CategoryName != item.category || data.CategoryMediaUrl != item.category_media || data.ParentID != item.parentId) {
                            var new_Category = {
                                "id": item.id,
                                "parentId": data.ParentID,
                                "category": data.CategoryName,
                                "category_media": data.CategoryMediaUrl
                            };
                            this.updateCategory(new_Category, item.id).subscribe(d => {
                                this.getCategories();
                            }, error => {
                            });
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    }
    updateCategory(new_Category, id) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "/" + id;
        return this.http.put(link, new_Category, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    }
    getTags() {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_TASVEER + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAG_FIND_API + this.keyword;
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            console.log(this.data.response);
            let data_array = JSON.stringify(d.json());
            let tags = JSON.parse(data_array);
            this.items = tags.data;
            this.items_init = tags.data;
        }, error => {
            console.log("Oooops!");
        });
    }
    getCategories() {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_FIND_API + this.keyword;
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            console.log(this.data.response);
            let data_array = JSON.stringify(d.json());
            let categories = JSON.parse(data_array);
            this.categories = categories.data;
            this.categories_init = categories.data;
            if (this.categories.length == 0) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */], { "keyword": this.keyword });
            }
        }, error => {
            console.log("Oooops!");
        });
    }
    log(item) {
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Tag", item);
        this.navCtrl.pop();
    }
    selectCategory(item) {
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Category", item);
        this.navCtrl.pop();
    }
    getItems(ev) {
        if (this.type == 'category') {
            this.categories = this.categories_init;
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.categories = this.categories.filter((item) => {
                    return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        else {
            this.items = this.items_init;
            const val = ev.target.value;
            if (val && val.trim() != '') {
                this.items = this.items.filter((item) => {
                    return (item.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
    }
    back() {
        this.navCtrl.pop();
    }
    initializeCategories() {
        this.categories = new Array();
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter AddPostPage');
        var category = __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].get("Category");
        if (category != null) {
            this.back();
        }
    }
};
TagnamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-tagname',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-post/tagname/tagname.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-10>\n      <ion-searchbar *ngIf="isCategory" [(ngModel)]="keyword" (keyup.enter)="getCategories()"\n        (ionInput)="getItems($event)"></ion-searchbar>\n\n      <ion-searchbar *ngIf="!isCategory" [(ngModel)]="keyword" (keyup.enter)="getTags()" (ionInput)="getItems($event)">\n      </ion-searchbar>\n    </ion-col>\n    <ion-col col-2>\n      <button *ngIf="!isCategory" ion-button icon-only (click)="getTags()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button *ngIf="isCategory" ion-button icon-only (keyup.enter)="getCategories()" (click)="getCategories()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <button ion-button (click)="back()" color="light" round full>Back\n\n    </button>\n  </ion-row>\n  <ion-row>\n    <ion-col (press)="longPressed(item)" (click)="selectCategory(item)" *ngFor="let item of categories" col-6>\n\n      <div *ngIf="isCategory">\n        <ion-card no-padding>\n          <ion-card-content no-padding>\n            <ion-row align-items-stretch>\n              <ion-col align-self-stretch>\n                <img src={{item.category_media}} style="width:100%;height:100px" />\n              </ion-col>\n\n            </ion-row>\n            <ion-row align-items-stretch>\n              <ion-col align-self-stretch>\n                {{ item.category }}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-col>\n    <ion-col (press)="longPressed(item)" (click)="log(item)" *ngFor="let item of items" col-6>\n      <div *ngIf="!isCategory">\n        <ion-card no-padding>\n          <ion-card-content no-padding>\n            <ion-row align-items-stretch>\n              <ion-col align-self-stretch>\n                <img [src]=item.mediaUrl style="width:100%;height:100px" />\n              </ion-col>\n\n            </ion-row>\n            <ion-row align-items-stretch>\n              <ion-col align-self-stretch>\n                {{ item.tag }}\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-post/tagname/tagname.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TagnamePage);

//# sourceMappingURL=tagname.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSettingModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_context__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let QuickSettingModalPage = class QuickSettingModalPage {
    constructor(modal, navCtrl, navParams, viewCtrl) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.all_button_color = "light";
        this.quiz_button_color = "light";
        this.fact_button_color = "light";
        this.poll_button_color = "light";
        this.exclude_checkbox_state = false;
        this.favorite_post_state = false;
        this.post_type = 0;
        var state = __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].get("exclude_already_viewed");
        if (state != null) {
            this.exclude_checkbox_state = state;
        }
        state = __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].get("favorite_post");
        if (state != null) {
            this.favorite_post_state = state;
        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad QuickSettingModalPage');
        this.post_type = __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].get("post_type");
        this.initializePostType();
    }
    initializePostType() {
        switch (this.post_type) {
            case 0:
                this.all_button_color = "dark";
                break;
            case 1:
                this.quiz_button_color = "dark";
                break;
            case 2:
                this.poll_button_color = "dark";
                break;
            case 3:
                this.fact_button_color = "dark";
                break;
            default:
                this.all_button_color = "dark";
        }
    }
    set_PostType(post_type) {
        __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].set("post_type", post_type);
        this.post_type = post_type;
        this.dismiss(true);
    }
    dismiss(isUpdate) {
        this.viewCtrl.dismiss({ "post_type": this.post_type, "isUpdate": isUpdate });
    }
    goToFav() {
        this.viewCtrl.dismiss({ "goToFav": true });
    }
    exclude_already_viewed(x) {
        __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].set("exclude_already_viewed", x.checked);
        this.viewCtrl.dismiss({ "exclude_already_viewed": x.checked });
    }
    favorite_post(x) {
        __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].set("favorite_post", x.checked);
        this.viewCtrl.dismiss({ "favorite_post": x.checked });
    }
    post_view_mode(view_mode) {
        this.viewCtrl.dismiss({ "post_view_mode": view_mode });
    }
};
QuickSettingModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-quick-setting-modal',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/quick-setting-modal/quick-setting-modal.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss(false)"></div>\n  <ion-scroll class="modal_content" scrollY="true">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 offset-10>\n          <button ion-button small color="dark" clear icon-only (click)="dismiss (false)">\n            <ion-icon name="close" right></ion-icon>\n          </button>\n\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col col-3 offset-1>\n          <ion-label>\n            Post Type\n          </ion-label>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{all_button_color}}" round (click)="set_PostType (0)"> All</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{quiz_button_color}}" round (click)="set_PostType (1)">Quiz</button>\n        </ion-col>\n        <ion-col col-4 offset-4>\n          <button ion-button small color="{{poll_button_color}}" round (click)="set_PostType (2)">Poll</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{fact_button_color}}" round (click)="set_PostType (3)">Fact</button>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col col-5 offset-1>\n          <ion-label>\n            Post View Mode\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="post_view_mode (0)">\n            <ion-icon name="md-list"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="post_view_mode (1)">\n            <ion-icon name="albums"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="post_view_mode (2)">\n            <ion-icon name="infinite"></ion-icon>\n          </button>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item style="background: #e8e8e8;">\n            <ion-label>Exclude already viewed</ion-label>\n            <ion-checkbox color="dark" checked="{{exclude_checkbox_state}}" (ionChange)="exclude_already_viewed($event)"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item style="background: #e8e8e8;">\n            <ion-label>Only Favorite Post</ion-label>\n            <ion-checkbox color="dark" checked="{{favorite_post_state}}" (ionChange)="favorite_post($event)"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-top justify-content-top>\n        <ion-col>\n          <ion-item style="background: #e8e8e8;">\n            <ion-label>Only Favorite Category</ion-label>\n            <ion-checkbox color="dark" checked="false" (click)="dismiss ()"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-col>\n            <button ion-button icon-only color="light" (click)="goToFav ()">\n              <ion-icon name="heart"></ion-icon>\n            </button>\n\n          </ion-col>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/quick-setting-modal/quick-setting-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], QuickSettingModalPage);

//# sourceMappingURL=quick-setting-modal.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let FavoriteCategoryPage = class FavoriteCategoryPage {
    constructor(navCtrl, navParams, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.search_mode = false;
        this.favList = new Array();
        this.search_button = "search";
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].FAV_API + "/2";
        this.link_category = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "/match";
        this.data = {};
        this.getFav();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad FavoriteCategoryPage');
    }
    getCategory() {
        if (this.keyword) {
            this.search_mode = true;
            var link = this.link_category + "?" + "keyword=" + this.keyword;
            this.http.get(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
                .subscribe(d => {
                this.data.response = d["_body"];
                let data_array = JSON.stringify(d.json());
                let favs = JSON.parse(data_array);
                this.favList = new Array();
                for (let i = 0; i < favs.data.length; i++) {
                    this.favList.push(favs.data[i]);
                }
                console.log(this.favList);
            }, error => {
                console.log("Oooops!");
            });
        }
    }
    getFav() {
        this.http.get(this.link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let favs = JSON.parse(data_array);
            for (let i = 0; i < favs.data.length; i++) {
                this.favList.push(favs.data[i]);
            }
            console.log(this.favList);
        }, error => {
            console.log("Oooops!");
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    addFavorite(category_id, idx) {
        var link = this.link + "?category=" + category_id;
        this.http.post(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let favs = JSON.parse(data_array);
            console.log(favs);
        }, error => {
            console.log("Oooops!");
        });
    }
    removeFavorite(category_id, idx) {
        this.favList.splice(idx, 1);
        console.log(this.favList.toString());
        var link = this.link + "/" + category_id;
        this.http.delete(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let favs = JSON.parse(data_array);
            console.log(favs);
        }, error => {
            console.log("Oooops!");
        });
    }
    search() {
    }
};
FavoriteCategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-favorite-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/favorite-category/favorite-category.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <ion-scroll class="modal_content" scrollY="true">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col col-10>\n          <ion-item>\n            <ion-label floating>Search Category</ion-label>\n            <ion-input type="text" [(ngModel)]="keyword"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button icon-only color="light" (click)="getCategory()">\n            <ion-icon name="{{search_button}}"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <div *ngIf="!search_mode" id="fav_container" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-center col-4 *ngFor="let fav of favList; let idx = index" id="fav_container_{{idx}}"\n            text-wrap text-center>\n            <ion-card no-padding>\n              <img *ngIf="fav.category.category_media" class="fav_img" onerror="this.style.display=\'none\'" src="{{fav.category.category_media}}">\n              <p id="fav_{{idx}}" no-padding>\n                {{fav.category.category}}\n              </p>\n              <button ion-button small icon-only clear id="fav_icon_{{idx}}" color="dark" (click)="removeFavorite(fav.category.id,idx)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf="search_mode" id="fav_container" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-center col-4 *ngFor="let fav of favList; let idx = index" id="fav_container_{{idx}}"\n            text-wrap text-center>\n            <ion-card no-padding>\n\n             \n              <img *ngIf="fav.category_media" class="fav_img" onerror="this.style.display=\'none\'" src="{{fav.category_media}}">\n              <p id="fav_{{idx}}" no-padding>\n                {{fav.category}}\n              </p>\n              <button ion-button small icon-only clear id="fav_button_{{idx}}" color="danger" (click)="this.color=\'dark\';addFavorite(fav.id,idx)">\n                  <ion-icon id="fav_icon_{{idx}}" name="heart"></ion-icon>\n                </button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/favorite-category/favorite-category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], FavoriteCategoryPage);

//# sourceMappingURL=favorite-category.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InterestPage = class InterestPage {
    constructor(navCtrl, navParams) {
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
    validation(item) {
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
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad InterestPage');
    }
};
InterestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-interest',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/interest/interest.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Select Categories you like</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let item of items" col-auto>\n        <button ion-button (click)="validation(item)" color={{item.color}} round> {{item.data}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5 *ngIf="selcted_category_string">\n          Selected Categories:\n        </h5>\n        <h6>\n            {{selcted_category_string}}\n        </h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n      <button  ion-fab>\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/interest/interest.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], InterestPage);

//# sourceMappingURL=interest.js.map

/***/ }),

/***/ 178:
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

let TextUtilProvider = class TextUtilProvider {
    constructor() {
        console.log('Hello TextUtilProvider Provider');
    }
    change(index) {
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
    }
};
TextUtilProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TextUtilProvider);

//# sourceMappingURL=text-util.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entityModel_category__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let CategoryPage = CategoryPage_1 = class CategoryPage {
    constructor(toastCtrl, http, imageUtil, platform, imagePicker, navCtrl, navParams, modalCtrl) {
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.imageUtil = imageUtil;
        this.platform = platform;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {};
        this.isImage = false;
        this.main_category = "Select Main Category";
        this.sub_category1 = "Select Sub Category";
        this.sub_category2 = "Select Sub Category";
        this.is_main_selected = false;
        this.is_sub_selected = false;
        this.is_category_image = false;
        this.error_text = "This is sample error";
        this.isImageUploaded = false;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.keyword = this.navParams.get("keyword");
        this.category = this.navParams.get("Category");
        if (this.category) {
            this.image = this.category.category_media;
            this.category_name = this.category.category;
            this.is_category_image = true;
        }
    }
    ionViewDidEnter() {
        var t = __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].get("Tag");
        if (t != null) {
            console.log(t.tag);
            this.media_tag = t.tag;
            this.media_source = t.imageCredits;
            this.image = t.mediaUrl;
            this.isTagPicked = true;
            this.mediaId = t.id;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected) {
            this.main_category = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option.category;
            this.is_main_selected = true;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            this.sub_category1 = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category;
            this.is_sub_selected = true;
            console.log(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.id + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.category + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id + " " + __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category);
        }
        if (this.keyword) {
            this.category_name = this.keyword;
        }
    }
    getImage() {
        this.imageUtil.getImage().then(imageData => {
            this.isImage = true;
            if (this.platform.is('ios'))
                this.image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* normalizeURL */])(imageData);
            else
                this.image = "data:image/jpeg;base64," + imageData;
        }, error => {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    }
    pickImage() {
        var options = {};
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });
    }
    clear() {
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1 = null;
        this.is_sub_selected = false;
        this.is_main_selected = false;
        this.main_category = "Select Main Category";
        this.sub_category1 = "Select Sub Category";
        this.sub_category2 = "Select Sub Category";
    }
    ionViewDidLoad() {
    }
    ioViewDidReload() {
        console.log('ionViewDidResume CategoryPage');
    }
    getMainCategory() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */]);
    }
    getSubCategory(type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */], type);
        console.log('ionViewDidLoad CategoryPage');
    }
    done() {
        this.navCtrl.pop();
    }
    validate() {
        if (this.category_name == null || this.category_name.length < 2) {
            return "Please enter valid category name";
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            return "Please select valid category";
        }
        return "success";
    }
    upload() {
        var result = this.validate();
        if (result == 'success') {
            if (!__WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].get("isImageUploading")) {
                __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("isImageUploading", true);
                this.imageUtil.uploadImageToFirebase(this.image).then(photoURL => {
                    __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("isImageUploading", false);
                    __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("photoURL", photoURL);
                    this.image = photoURL;
                    this.addCategory();
                    console.log(photoURL);
                    let toast = this.toastCtrl.create({
                        message: 'Image was uploaded successfully',
                        duration: 3000
                    });
                    toast.present();
                });
            }
        }
        else {
            let toast = this.toastCtrl.create({
                message: result,
                duration: 3000
            });
            toast.present();
        }
    }
    createCategory() {
        var parentId;
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected)
            parentId = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id;
        else if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected)
            parentId = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option.id;
        else
            parentId = 0;
        var category_data = {
            "category": this.category_name,
            "parentId": parentId,
            "category_media": this.image
        };
        return category_data;
    }
    addCategory() {
        var link;
        var category = this.createCategory();
        if (this.category) {
            this.category.category_media = this.image;
            this.category.category = this.category_name;
            if (category.parentId != 0) {
                this.category.parentId == category.parentId;
            }
            link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].CATEGORY_API + "/" + this.category.id;
            this.http.put(link, this.category, __WEBPACK_IMPORTED_MODULE_7__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
                .subscribe(d => {
                this.data.response = d["_body"];
                let data_array = JSON.stringify(d.json());
                let data_parsed = JSON.parse(data_array);
                let data_ = data_parsed.data;
                console.log(data_.category_id);
                var c = new __WEBPACK_IMPORTED_MODULE_8__entityModel_category__["a" /* Category */](data_.category_id, category.category, category.parentId, category.category_media);
                __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("Category", c);
                CategoryPage_1.clearCATSUB();
                this.navCtrl.pop();
            }, error => {
                console.log("Oooops!");
            });
        }
        else {
            link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].CATEGORY_API;
            this.http.post(link, category, __WEBPACK_IMPORTED_MODULE_7__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
                .subscribe(d => {
                this.data.response = d["_body"];
                let data_array = JSON.stringify(d.json());
                let data_parsed = JSON.parse(data_array);
                let data_ = data_parsed.data;
                console.log(data_.category_id);
                var c = new __WEBPACK_IMPORTED_MODULE_8__entityModel_category__["a" /* Category */](data_.category_id, category.category, category.parentId, category.category_media);
                __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("Category", c);
                CategoryPage_1.clearCATSUB();
                this.navCtrl.pop();
            }, error => {
                console.log("Oooops!");
            });
        }
    }
    removeImage(type) {
        this.isImage = false;
        this.image = null;
        if (type) {
            if (!this.isTagPicked && this.isImageUploaded)
                this.imageUtil.removeImage();
        }
        __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("photoURL", null);
        __WEBPACK_IMPORTED_MODULE_9__providers_context__["a" /* Context */].set("Tag", null);
        this.isImageUploaded = false;
        this.media_tag = null;
        this.media_source = null;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.inputComponent.removeImage(false);
    }
    onMediaTagChange(media_tag) {
        this.media_tag = media_tag;
    }
    onMediaSourceChange(media_source) {
        this.media_source = media_source;
    }
    onMediaChange(image) {
        this.image = image;
    }
    static clearCATSUB() {
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option2 = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1 = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected = false;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option2 = null;
        __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub2_selected = false;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__["a" /* ImageSelectorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__["a" /* ImageSelectorComponent */])
], CategoryPage.prototype, "inputComponent", void 0);
CategoryPage = CategoryPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/category/category.html"*/'<ion-content padding class="page-category">\n  <ion-card>\n\n    <ion-card-header>\n      Choose Post Category\n      <button class="dp_button" (click)="clear()" ion-button clear end>clear\n\n      </button>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <button ion-button (click)="getSubCategory(0)" color="light" round icon-end full>{{main_category}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_main_selected">\n        <button ion-button (click)="getSubCategory(1)" color="light" round icon-end full>{{sub_category1}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_sub_selected">\n        <button ion-button (click)="getSubCategory(2)" color="light" round icon-end full>{{sub_category2}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <button ion-button color="light" (click)="done()" round full>Done\n        </button>\n    </ion-card-content>\n  </ion-card>\n  <ion-item>\n      <ion-label floating>Enter new category name</ion-label>\n      <ion-input type="text" [(ngModel)]="category_name"></ion-input>\n    </ion-item>\n\n  <ion-row *ngIf="is_category_image">\n    <div class="container">\n      <img class="post_image" src="{{image}}" />\n      <ion-row class="btn" align-items-center>\n        <ion-col col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col offset-7 col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-row>\n  <image-selector [(image)]="image" [(isTagPicked)]="isTagPicked" [(mediaId)]="mediaId" [(media_source)]="media_source"\n  [(media_tag)]="media_tag" (mediaTagChange)="onMediaTagChange($event)" (mediaSourceChange)="onMediaSourceChange($event)"\n  (imageChange)="onMediaChange($event)"></image-selector>\n\n  <button ion-button color="light" (click)="addCategory()" round full>Add Category\n    </button>\n\n  <ion-label *ngIf="is_error" class="error_text">\n    {{error_text}}\n  </ion-label>\n\n  <!-- <input type="file" (change)="onFileChanged($event)"> -->\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/category/category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], CategoryPage);

var CategoryPage_1;
//# sourceMappingURL=category.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ImageUtil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_client_api_post_client_api__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_post_tagname_tagname__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let ImageSelectorComponent = class ImageSelectorComponent {
    constructor(alertCtrl, postClient, storage, toastCtrl, imageUtil, platform, navCtrl, textUtil) {
        this.alertCtrl = alertCtrl;
        this.postClient = postClient;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.imageUtil = imageUtil;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.textUtil = textUtil;
        this.option = "";
        this.items = [];
        this.media_tag = null;
        this.media_source = null;
        this.image = null;
        this.mediaTagChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mediaSourceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.imageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.data = {};
        this.isImage = false;
        this.isImageUploaded = false;
        this.isImageURL = false;
    }
    removeImage(type) {
        this.isImage = false;
        this.image = null;
        if (type) {
            if (!this.isTagPicked && this.isImageUploaded)
                this.imageUtil.removeImage();
        }
        __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("photoURL", null);
        __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("Tag", null);
        this.isImageUploaded = false;
        this.media_tag = null;
        this.media_source = null;
        this.isTagPicked = false;
        this.isImageURL = false;
    }
    getImage() {
        this.isImageURL = false;
        this.imageUtil.getImage().then(imageData => {
            this.isImage = true;
            if (this.platform.is('ios'))
                this.image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* normalizeURL */])(imageData);
            else
                this.image = "data:image/jpeg;base64," + imageData;
        }, error => {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    }
    upload() {
        if (!__WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].get("isImageUploading")) {
            __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("isImageUploading", true);
            this.imageUtil.uploadImageToFirebase(this.image).then(photoURL => {
                __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("isImageUploading", false);
                __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("photoURL", photoURL);
                this.image = photoURL;
                this.isImageUploaded = true;
                this.mediaChange(1);
                console.log(photoURL);
                let toast = this.toastCtrl.create({
                    message: 'Image was uploaded successfully',
                    duration: 3000
                });
                toast.present();
            });
        }
    }
    getTags() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_add_post_tagname_tagname__["a" /* TagnamePage */], { "keyword": this.media_tag });
    }
    mediaChange(type) {
        switch (type) {
            case 1:
                this.imageChange.emit(this.image);
                break;
            case 2:
                this.mediaTagChange.emit(this.media_tag);
                break;
            case 3:
                this.mediaSourceChange.emit(this.media_source);
                break;
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], ImageSelectorComponent.prototype, "media_tag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], ImageSelectorComponent.prototype, "media_source", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], ImageSelectorComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
], ImageSelectorComponent.prototype, "mediaTagChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
], ImageSelectorComponent.prototype, "mediaSourceChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
], ImageSelectorComponent.prototype, "imageChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], ImageSelectorComponent.prototype, "isTagPicked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], ImageSelectorComponent.prototype, "mediaId", void 0);
ImageSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'image-selector',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/components/image-selector/image-selector.html"*/'<div class="container">\n  <div id="post_image_container">\n\n    <img id="post_image" *ngIf="isImage||isTagPicked" src="{{image}}" />\n  </div>\n  <ion-row *ngIf="isImage||isTagPicked" class="btn" align-items-center>\n    <ion-col col-2>\n      <button class="dp_button" (click)="getImage()" margin ion-button icon-only>\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col offset-7 col-2>\n      <button class="dp_button" (click)="removeImage(true)" margin ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab id="post_image_fab" *ngIf="!isImage&&!isTagPicked" end middle>\n    <button (click)="getImage()" ion-fab>\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</div>\n\n<ion-row *ngIf="isImage&&!isImageURL">\n  <button ion-button (click)="upload()" full clear light>\n    Upload Image\n  </button>\n</ion-row>\n\n<ion-row *ngIf="isImageUploaded">\n  <ion-col col-2>\n    <img id="uploaded_image" src="{{image}}" />\n  </ion-col>\n  <ion-col col-8>\n    <ion-label>\n      {{image}}\n    </ion-label>\n  </ion-col>\n  <ion-col col-2>\n    <button ion-button icon-only (click)="removeImage(true)">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label floating>Add Media Url</ion-label>\n    <ion-input type="text" (input)="isImage=true;isImageURL=true;mediaChange(1);" [(ngModel)]="image"></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row align-items-center>\n  <ion-col col-10>\n  <ion-item>\n    <ion-label floating>Add Media Tag Name</ion-label>\n    <ion-input type="text" [(ngModel)]="media_tag" (input)="mediaChange(2);" (keyup.enter)="getTags()"></ion-input>\n  </ion-item>\n</ion-col>\n<ion-col col-2>\n    <button ion-button icon-only (click)="getTags()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n</ion-col>\n</ion-row>\n<ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label floating>Add Media Credits Source</ion-label>\n          <ion-input type="text" [(ngModel)]="media_source" (input)="mediaChange(3);" ></ion-input>\n        </ion-item>\n      </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/components/image-selector/image-selector.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__["a" /* TextUtilProvider */]])
], ImageSelectorComponent);

//# sourceMappingURL=image-selector.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostClientApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PostClientApiProvider = class PostClientApiProvider {
    constructor(http) {
        this.http = http;
        this.data = {};
        console.log('Hello PostClientApiProvider Provider');
    }
    post(isTagPicked, isImageUploaded, mediaId, title, search_tag, media_path, media_tag, media_source, post_type, post_category_id, correct_option, options, description, category_tag) {
        var opts = this.getOptions(correct_option, options);
        if (!isTagPicked || isImageUploaded) {
            var tag = this.createTag(media_path, media_tag, media_source);
            console.log(tag);
            return this.addTag(tag);
        }
        else {
            var post = this.createPost(title, description, search_tag, this.getPostType(post_type), post_category_id, 1, opts, mediaId, category_tag);
            console.log(post);
            var media_arr = new Array();
            var category_arr = new Array();
            media_arr.push(mediaId);
            post_category_id.forEach((element) => {
                console.log(element);
                category_arr.push(element.id);
            });
            var postRequestBody = this.createPostRequestBody(post, media_arr, category_arr);
            return this.addPost(postRequestBody);
        }
    }
    addTag(tag) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_TASVEER + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAGNAME_API;
        return this.http.post(link, tag, __WEBPACK_IMPORTED_MODULE_2__server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    }
    createTag(media_path, media_tag, media_source) {
        var tag_data = {
            "mediaUrl": media_path,
            "tag": media_tag,
            "imageCredits": media_source
        };
        return tag_data;
    }
    createPost(title, description, search_tag, post_type, post_category_id, blogger_id, options, media_id, level) {
        var post_data = {
            "title": title,
            "options": options,
            "post_type": post_type,
            "description": description,
            "blogger_id": blogger_id,
            "search_tag": search_tag,
            "post_state": "1",
            "total_votes": 0,
            "level": level
        };
        return post_data;
    }
    createPostRequestBody(post, media, category) {
        var post_data = {
            "sawaal": post,
            "media": media,
            "category": category
        };
        return post_data;
    }
    createOption(id, data, is_true) {
        var post_opt = {
            "option": data,
            "id": id,
            "iscorrect": is_true,
            "pollcount": 0
        };
        return post_opt;
    }
    getPostType(post_type) {
        switch (post_type) {
            case "quiz": return 1;
            case "poll": return 2;
            case "fact": return 3;
        }
    }
    getOptions(correct_option, items) {
        var count = 1;
        var options = new Array();
        items.forEach(val => {
            var is_true = 0;
            if (val == correct_option)
                is_true = 1;
            var o = this.createOption(count, val, is_true);
            options.push(o);
            count++;
        });
        return options;
    }
    addPost(postRequestBody) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_SAWAAL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API;
        var myData = JSON.stringify(postRequestBody);
        let headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        console.log(postRequestBody);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('allow-running-insecure-content', 'true');
        headers.append('content-type', 'application/json');
        let options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(link, myData, options);
    }
};
PostClientApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], PostClientApiProvider);

//# sourceMappingURL=post-client-api.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AccountPage = class AccountPage {
    constructor(navCtrl, navParams) {
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
    onSlideChanged() {
        this.random_int = Math.floor(Math.random() * (this.colors.length - 0 + 1)) + 0;
        this.color = this.colors[this.random_int];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad BasicDetailPage');
    }
    // @ViewChild('myInput') myInput: ElementRef;
    // resize() {
    //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    //     var scrollHeight = element.scrollHeight;
    //     element.style.height = scrollHeight + 'px';
    //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    // }
    change() {
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
    }
};
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/account/account.html"*/'<ion-header>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n      <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n  \n        <ion-grid>\n          <ion-row>     \n            <ion-col>\n              <p class="email">{{slide.email}}</p>\n            </ion-col>\n            <ion-col>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-slide>\n    </ion-slides>\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-2>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n        <ion-col col-2 offset-1>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n        <ion-col col-2 offset-1>\n          <ion-fab>\n            <button *ngIf="isImage" ion-fab>\n              <ion-icon name="md-add"></ion-icon>\n            </button>\n          </ion-fab>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        <p style="color:black">Name</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row radio-group [(ngModel)]="Gender">\n  \n            <ion-col>\n              <ion-item>\n                <ion-label>Male <ion-icon name="man"></ion-icon>\n                </ion-label>\n  \n                <ion-radio value="male">\n  \n                </ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Female <ion-icon name="woman"></ion-icon>\n                </ion-label>\n                <ion-radio value="female"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row radio-group [(ngModel)]="AgeGroup">\n  \n            <ion-col col-12>\n              <ion-label>Age Group</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>0-18</ion-label>\n                <ion-radio value="18"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>19-30</ion-label>\n                <ion-radio value="30"></ion-radio>\n              </ion-item>\n            </ion-col>\n  \n            <ion-col col-6>\n              <ion-item>\n                <ion-label>31-60</ion-label>\n                <ion-radio value="60"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label>61+</ion-label>\n                <ion-radio value="60plus"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10>\n          <p>Country</p>\n        </ion-col>\n        <ion-col col-2>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="locate"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <p class="userid">userid</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button color="light" round full>Continue</button>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n    <!-- </ion-card-content>\n    </ion-card> -->\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 222:
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
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 266:
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
webpackEmptyAsyncContext.id = 266;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorymainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let CategorymainPage = CategorymainPage_1 = class CategorymainPage {
    constructor(alertCtrl, http, navCtrl, navParams, server) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.server = server;
        this.searchQuery = '';
        this.data = {};
        this.link = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].FAV_API + "/2";
        this.favList = new Array();
        this.type = navParams.data;
        console.log("type: " + this.type);
        this.getCategory();
        this.getFav();
        console.log("constructor");
    }
    navigateTo(page) {
        switch (page) {
            case 0:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                break;
            case 1:
                this.navCtrl.push(CategorymainPage_1);
        }
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CategorymainPage');
    }
    onImageLoad(event) {
        // console.log('image ready: ', event);
    }
    getFav() {
        this.http.get(this.link, __WEBPACK_IMPORTED_MODULE_4__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let favs = JSON.parse(data_array);
            for (let i = 0; i < favs.data.length; i++) {
                this.favList.push(favs.data[i]);
            }
            console.log(this.favList);
        }, error => {
            console.log("Oooops!");
        });
    }
    getCategory() {
        var link = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].CATEGORY_API + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PARENT_CATEGORY_PARAMS;
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_4__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            console.log(this.data.response);
            let data_array = JSON.stringify(d.json());
            let cat = JSON.parse(data_array);
            this.category_data = cat.data;
        }, error => {
            console.log("Oooops!");
        });
    }
};
CategorymainPage = CategorymainPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-categorymain',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/categorymain/categorymain.html"*/'<ion-header id="header">\n\n\n  <ion-grid style="margin-top: 12px;">\n    \n    <ion-row align-items-center justify-content-center>\n\n      <ion-col>\n        <ion-fab middle right>\n          <button ion-fab mini (click)="navigateTo(0)">\n            <ion-icon ios="ios-home" md="md-home"></ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col>\n        <ion-fab middle right>\n          <button ion-fab mini color="light" (click)="location.reload();">\n            <ion-icon  name="logo-buffer"></ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col>\n        <ion-fab middle right>\n          <button ion-fab (click)="myAlert_show()">\n            <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col>\n        <ion-fab middle right>\n          <button id="notification-button" ion-fab mini (click)="myAlert_show()">\n            <ion-icon ios="ios-chatbubbles" md="md-chatbubbles">\n              <ion-badge id="notifications-badge" color="danger">999</ion-badge>\n            </ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n      <ion-col>\n\n        <ion-fab middle right>\n          <!-- <button id="profile_pic" ion-fab mini (click)="click()">\n                    <img src="https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif">\n               </button> -->\n          <button ion-fab mini (click)="myAlert_show()">\n            <ion-icon ios="ios-person" md="md-person">\n            </ion-icon>\n          </button>\n        </ion-fab>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-header>\n\n<ion-content>\n    <ion-row no-padding>\n        <ion-col col-10>\n            <ion-item>\n                <ion-input type="text" placeholder="Search Category"></ion-input>\n              </ion-item>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button (click)="back()" color="light" icon-only clear>\n              <ion-icon name="search">\n\n              </ion-icon>\n              </button>\n        </ion-col>\n      </ion-row>\n  <div>\n    <ion-slides id="fav_container_slides" spaceBetween="0" pager="false" slidesPerView="4">\n      <ion-slide class="fav_img_slide" *ngFor="let fav of favList; let idx = index">\n        <ion-row class="fav_img_slide" justify-content-center>\n          <ion-card class="fav_img_card" style="width:100%;min-height:100px">\n            <!-- <img *ngIf="fav.category.category_media" class="fav_img" onerror="this.style.display=\'none\'" src="{{fav.category.category_media}}"\n              no-padding> -->\n              <img-loader *ngIf="fav.category.category_media"  class="fav_img"  onerror="this.style.display=\'none\'"  src={{fav.category.category_media}}  useImg (load)="onImageLoad($event)" no-padding></img-loader>\n   \n            <p id="fav_{{idx}}" class="fav" text-wrap text-center no-padding>\n              {{fav.category.category}}\n            </p>\n\n          </ion-card>\n        </ion-row>\n\n      </ion-slide>\n    </ion-slides>\n    <ion-row no-padding>\n      <ion-col offset-1>\n\n        <ion-label>\n          Favorite Categories\n        </ion-label>\n      </ion-col>\n      <ion-col col-3>\n        <button ion-button clear right>See All\n        </button>\n      </ion-col>\n\n    </ion-row>\n    <ion-item-divider>\n\n    </ion-item-divider>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col (press)="longPressed(item)" (click)="log(item)" *ngFor="let item of category_data" col-4>\n          <ion-row align-items-stretch>\n              <ion-col align-self-stretch>\n        <ion-card no-padding>\n          <ion-card-content no-padding>\n            \n\n                <ion-row>\n                  <ion-col style="width:100%;min-height:80px">\n                    <!-- <img src={{item.category_media}} style="width:100%;height:100px" /> -->\n                    <img-loader onerror="this.style.display=\'none\'"  src={{item.category_media}}  useImg (load)="onImageLoad($event)"></img-loader>\n   \n                  </ion-col>\n\n                </ion-row>\n               \n                    <p style="font-size:10px" text-wrap text-center no-padding>  {{ item.category }}</p>\n                  \n                \n             \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/categorymain/categorymain.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_server_util_serverUtil__["a" /* ServerUtil */]])
], CategorymainPage);

var CategorymainPage_1;
//# sourceMappingURL=categorymain.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_post_client_api_post_client_api__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tagname_tagname__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let AddPostPage = class AddPostPage {
    constructor(alertCtrl, postClient, storage, toastCtrl, imageUtil, platform, navCtrl, textUtil) {
        this.alertCtrl = alertCtrl;
        this.postClient = postClient;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.imageUtil = imageUtil;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.textUtil = textUtil;
        this.option = "";
        this.items = [];
        this.post_type = "quiz";
        this.data = {};
        this.categoryList = new Array();
        this.category = "Select Category";
        this.isImage = false;
        this.isquiz = true;
        this.isImageUploaded = false;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.errors = '';
    }
    cancel() {
        this.navCtrl.pop();
    }
    draft() {
        this.storage.set("isDraft", true);
        if (this.question != null)
            this.storage.set("question", this.question);
        if (this.description != null)
            this.storage.set("description", this.description);
        if (this.image != null)
            this.storage.set("image", this.image);
        if (this.post_type != null)
            this.storage.set("post_type", this.post_type);
        if (this.correct_option != null)
            this.storage.set("correct_option", this.correct_option);
        if (this.items != null)
            this.storage.set("items", this.items);
        if (this.categoryId != null)
            this.storage.set("categoryId", this.categoryId);
        if (this.media_tag != null)
            this.storage.set("media_tag", this.media_tag);
        if (this.media_source != null)
            this.storage.set("media_source", this.media_source);
        if (this.search_tag != null)
            this.storage.set("search_tag", this.search_tag);
        this.cancel();
    }
    validateFields() {
        this.errors = '';
        if (this.question == null || this.question.length < 10) {
            this.errors += 'Question field - minimum 10 characters required \r\n ';
            this.is_error = true;
        }
        if (this.search_tag == null || this.search_tag.length < 10) {
            this.errors += 'Search Tag field - minimum 10 characters required \r\n ';
            this.is_error = true;
        }
        if (this.categoryList.length == 0) {
            this.errors += 'Please select valid category \r\n ';
            this.is_error = true;
        }
        if (this.post_type == "quiz" && this.correct_option == null) {
            this.errors += 'Please select correct option \r\n ';
            this.is_error = true;
        }
        if (this.post_type != "fact" && (this.items == null || this.items.length < 2)) {
            this.errors += 'Please add more than one option(s) \r\n ';
            this.is_error = true;
        }
        console.log(this.errors);
        if (this.is_error) {
            return false;
        }
        return true;
    }
    post() {
        if (this.validateFields()) {
            this.postClient.post(this.isTagPicked, this.isImageUploaded, this.mediaId, this.question, this.search_tag, this.image, this.media_tag, this.media_source, this.post_type, this.categoryList, this.correct_option, this.items, this.description, this.level).subscribe(d => {
                console.log(this.isTagPicked);
                console.log(this.isImageUploaded);
                if (!this.isTagPicked || this.isImageUploaded) {
                    this.data.response = d["_body"];
                    let data_array = JSON.stringify(d.json());
                    let data_parsed = JSON.parse(data_array);
                    let data_ = data_parsed.data;
                    let media_id = data_.Tasveer_id;
                    var opts = this.postClient.getOptions(this.correct_option, this.items);
                    console.log(opts);
                    var post = this.postClient.createPost(this.question, this.description, this.search_tag, this.postClient.getPostType(this.post_type), this.categoryList, 1, opts, media_id, this.level);
                    console.log(post);
                    var media_arr = new Array();
                    var category_arr = new Array();
                    media_arr.push(media_id);
                    this.categoryList.forEach((element) => {
                        console.log(element);
                        category_arr.push(element.id);
                    });
                    var postRequestBody = this.postClient.createPostRequestBody(post, media_arr, category_arr);
                    this.postClient.addPost(postRequestBody).subscribe(data => {
                        this.data.response = data["_body"];
                        console.log(this.data.response);
                        this.removeImage(false);
                    }, error => {
                        console.log("Oooops!");
                    });
                }
                this.data.response = d["_body"];
                console.log(this.data.response);
                this.removeImage(false);
            }, error => {
                switch (error.status) {
                    case 409:
                        this.errors += 'Duplicate TagName \r\n ';
                        break;
                    default:
                        this.errors += 'Something Went Wrong \r\n ';
                        break;
                }
            });
        }
        else {
            this.is_error = false;
        }
    }
    chooseCategory() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
    }
    addOption() {
        if (this.option.length != 0) {
            if (this.items.indexOf(this.option) == -1) {
                this.option = this.option.replace(/\W/g, '');
                this.items.push(this.option);
                console.log(this.option);
                this.option = "";
            }
            else {
                console.log("item already exists");
            }
        }
        else {
            console.log("item empty");
        }
    }
    trackByFn(index, item) {
        return index;
    }
    onEnter(index) {
        this.addOption();
    }
    optionChange(it, index) {
        var elem = document.getElementById("option" + index);
        console.log(elem.value + " " + index);
    }
    updateOption(it, index) {
        console.log(it + " " + index);
        let itemIndex = this.items.findIndex(item => item.id == it.id);
        this.items[index] = it;
    }
    deleteOption(item) {
        if (this.items.indexOf(item) != -1) {
            this.items.splice(this.items.indexOf(item), 1);
            console.log(this.items.toString());
        }
        else {
            console.log("item doesn't exist");
        }
    }
    change(index) {
        //x get elements
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
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AddPostPage');
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter AddPostPage');
        var t = __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].get("Tag");
        if (t != null) {
            console.log(t.tag);
            this.media_tag = t.tag;
            this.media_source = t.imageCredits;
            this.image = t.mediaUrl;
            this.isTagPicked = true;
            this.mediaId = t.id;
        }
        this.category_name = null;
        var category = __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].get("Category");
        if (category != null) {
            console.log(category.category);
            __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Category", null);
            var cat_name = category.category;
            if (this.categoryList.findIndex(c => c.category === (category.category)) == -1) {
                this.categoryList.push(category);
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            console.log(__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.id + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.category + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category);
            this.categoryId = __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id;
            // this.category = SubcategoryPage.sub_option1.category;
            this.categoryList.push(__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1);
        }
        else if (__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].is_main_selected) {
            this.categoryId = __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option.id;
            // this.category = SubcategoryPage.sub_option1.category;
            this.categoryList.push(__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option);
        }
        __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */].clearCATSUB();
    }
    removeImage(type) {
        this.isImage = false;
        this.image = null;
        if (type) {
            if (!this.isTagPicked && this.isImageUploaded)
                this.imageUtil.removeImage();
        }
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("photoURL", null);
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Tag", null);
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Category", null);
        this.isImageUploaded = false;
        this.categoryList = new Array();
        this.search_tag = null;
        this.description = null;
        this.level = null;
        this.category_name = null;
        this.items = [];
        this.media_tag = null;
        this.media_source = null;
        this.question = null;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.inputComponent.removeImage(false);
    }
    onMediaTagChange(media_tag) {
        this.media_tag = media_tag;
    }
    onMediaSourceChange(media_source) {
        this.media_source = media_source;
    }
    onMediaChange(image) {
        this.image = image;
    }
    getCategories() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tagname_tagname__["a" /* TagnamePage */], { "keyword": this.category_name, "type": "category" });
    }
    deleteCategory(item) {
        if (this.categoryList.indexOf(item) != -1) {
            this.categoryList.splice(this.categoryList.indexOf(item), 1);
            console.log(this.categoryList.toString());
        }
        else {
            console.log("item doesn't exist");
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__["a" /* ImageSelectorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__components_image_selector_image_selector__["a" /* ImageSelectorComponent */])
], AddPostPage.prototype, "inputComponent", void 0);
AddPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-post',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-post/add-post.html"*/'<ion-content class="page-add-post">\n  <image-selector [(image)]="image" [(isTagPicked)]="isTagPicked" [(mediaId)]="mediaId" [(media_source)]="media_source" [(media_tag)]="media_tag" (mediaTagChange)="onMediaTagChange($event)" (mediaSourceChange)="onMediaSourceChange($event)" (imageChange)="onMediaChange($event)"></image-selector>\n  \n  <div id="post_detail">\n    <ion-row radio-group [(ngModel)]="post_type">\n\n      <ion-col>\n        <ion-item>\n          <ion-label>Quiz\n          </ion-label>\n          <ion-radio value="quiz" (click)="isquiz=true; post_type=\'quiz\';">\n          </ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Poll<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="poll" (click)="isquiz=false; post_type=\'poll\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Fact<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="fact" (click)="isquiz=false; post_type=\'fact\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div id="container">\n    <ion-list>\n\n      <ion-item class="rounded" id="question">\n        <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Add Question" (input)="change(1)"\n          [(ngModel)]="question" required></ion-textarea>\n      </ion-item>\n      <div *ngIf="post_type!=\'fact\'">\n\n\n        <div *ngFor="let item of items ; let i = index trackBy:trackByFn">\n          <ion-row>\n            <ion-col col-10>\n              <ion-item>\n                  <input type="text" id="option{{i}}" [(ngModel)]="items[i]"/>\n                <!-- <ion-textarea rows="1" id="option{{i}}" value={{item}} (input)="optionChange(this,i)" required></ion-textarea> -->\n              </ion-item>\n            </ion-col>\n           \n            <ion-col col-2>\n              <button ion-button icon-only (click)="deleteOption(item)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-item class="rounded" id="option">\n          <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Add Option" [(ngModel)]="option" (keyup.enter)="addOption()"\n            required></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button icon-start full (click)="addOption()">\n            <ion-icon name="md-add"></ion-icon>\n            Add Option\n          </button>\n        </ion-item>\n\n        <ion-row *ngIf="items.length>1&&isquiz" justify-content-center>\n          <ion-col>\n            <ion-select [(ngModel)]="correct_option" multiple="false" placeholder="Choose correct option" style=" max-width: 100% !important;">\n              <ion-option *ngFor="let item of items" value="{{item}}" selected="{{item}}">{{item}}</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n\n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)"\n            [(ngModel)]="description" required></ion-textarea>\n        </ion-item>\n        \n      </div>\n      <ion-item class="rounded" id="search_tag">\n          <ion-textarea rows="1" maxlength="50" id="messageInputBox3" placeholder="Add Search Tag" (input)="change(3)"\n            [(ngModel)]="search_tag" required></ion-textarea>\n        </ion-item>\n        <ion-item class="rounded" id="level">\n            <ion-textarea rows="1" maxlength="50" id="messageInputBox4" placeholder="Add Level" (input)="change(4)"\n              [(ngModel)]="level" required></ion-textarea>\n          </ion-item>\n\n    </ion-list>\n\n\n    <div>\n      {{errors}}\n    </div>\n\n    <ion-row align-items-center>\n      <ion-col col-10>\n      <ion-item>\n        <ion-label floating>Add Category Name</ion-label>\n        <ion-input type="text" [(ngModel)]="category_name" (keyup.enter)="getCategories()"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-2>\n        <button ion-button icon-only (click)="getCategories()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n    </ion-col>\n  </ion-row>\n \n      <ion-row *ngFor="let item of categoryList ; let i = index">\n        <ion-col col-10>\n          <ion-item>\n            {{item.category}}\n              </ion-item>\n        </ion-col>\n       \n        <ion-col col-2>\n          <button ion-button icon-only (click)="deleteCategory(item)">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n    \n  </ion-row>\n    <ion-row>\n      <button (click)="chooseCategory()" ion-button color="light" full>{{category}}</button>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col>\n        <button ion-button color="dark" round full (click)="cancel()">Cancel</button>\n      </ion-col>\n      <!-- <ion-col>\n        <button ion-button color="dark" round full (click)="submit()">Draft</button>\n      </ion-col> -->\n      <ion-col>\n        <button ion-button color="dark" round full (click)="post()">Post</button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-post/add-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__["a" /* TextUtilProvider */]])
], AddPostPage);

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebaseDataProvider__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let FirebaseService = class FirebaseService {
    constructor(toastCtrl, dataProvider, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
    }
    encodeImageUri(imageUri, callback) {
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
    }
    ;
    uploadImage(imageURI) {
        return new Promise((resolve, reject) => {
            let storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
            let newName = `${new Date().getTime()}`;
            let imageRef = storageRef.child('image').child('post').child(newName);
            __WEBPACK_IMPORTED_MODULE_4__context__["a" /* Context */].set("uploaded_image_key", newName);
            this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                    resolve(snapshot.ref.getDownloadURL());
                    console.log(snapshot.ref.getDownloadURL());
                }, err => {
                    console.log(err);
                    reject(err);
                });
            });
        });
    }
    removeImage(name) {
        let storagePath = "image/post/" + name;
        return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref(storagePath).delete();
    }
    getInfo() {
        this.dataProvider.getPath("files2/1543066535346.txt").subscribe(data => console.log(data));
    }
    addFile() {
        let inputAlert = this.alertCtrl.create({
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
                    handler: data => {
                        this.uploadInformation(data.info);
                    }
                }
            ]
        });
        inputAlert.present();
    }
    uploadInformation(text) {
        let upload = this.dataProvider.uploadToStorage(text);
        // Perhaps this syntax might change, it's no error here!
        upload.then().then(res => {
            this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
                console.log(res);
                let toast = this.toastCtrl.create({
                    message: 'New File added!' + res,
                    duration: 3000
                });
                toast.present();
            });
        });
    }
};
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__firebaseDataProvider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
], FirebaseService);

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DataProvider = class DataProvider {
    constructor(db, afStorage) {
        this.db = db;
        this.afStorage = afStorage;
    }
    getFiles() {
        let ref = this.db.list('files2');
        return ref.snapshotChanges().map(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        });
    }
    uploadToStorage(information) {
        let newName = `${new Date().getTime()}.txt`;
        return this.afStorage.ref(`files2/${newName}`).putString(information);
    }
    storeInfoToDatabase(metainfo) {
        let toSave = {
            created: metainfo.timeCreated,
            url: metainfo.downloadURLs[0],
            fullPath: metainfo.fullPath,
            contentType: metainfo.contentType
        };
        return this.db.list('files').push(toSave);
    }
    getPath(storagePath) {
        return this.afStorage.ref(storagePath).getDownloadURL();
    }
    deleteFile(file) {
        let key = file.key;
        let storagePath = file.fullPath;
        let ref = this.db.list('files');
        ref.remove(key);
        return this.afStorage.ref(storagePath).delete();
    }
};
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
], DataProvider);

//# sourceMappingURL=firebaseDataProvider.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_util_serverUtil__ = __webpack_require__(40);
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
let WelcomePage = class WelcomePage {
    constructor(server, navCtrl, st, navParams, storage, sp) {
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
    ionViewDidLoad() {
        //this.storage.store("love","pal");
        console.log('ionViewDidLoad WelcomePage');
    }
    goToApp() {
        console.log('Go to App clicked');
    }
    skip() {
    }
    showalert() {
        console.log(this.storage.executeSQL("testdb", "create table TestTable(ID INT, NAME VARCHAR(200));"));
    }
};
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/welcome/welcome.html"*/'\n\n<ion-content fullscreen="true" class="no-padding-top"> \n    \n       \n\n    <ion-slides #slider pager="true" autoplay="2500" loop="true" effect="fade" >\n      <ion-slide *ngFor="let slide of slides"\n                 class="slide-background"\n                 [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n        <div class="text-wrapper">\n          <div class="slide-text">\n            <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n            <p [innerHTML]="slide.description"></p>\n            \n          </div>\n          <div class="floating-buttons  pop-in">\n            <ion-grid  >\n              <ion-row>\n                  <ion-col text-center>\n                      <ion-label id="login-label">Login</ion-label>\n                  </ion-col>\n              </ion-row>\n              <ion-row align-items-justify>\n              \n                <ion-col text-center>\n                  \n                        <div *ngIf="isLoggedIn; else facebookLogin">\n                          <h2>Hi, {{users.name}} ({{users.email}})</h2>\n                          <p>\n                            Gender: {{users.gender}}\n                          </p>\n                          <p>\n                            <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n                          </p>\n                          <p>\n                            <button ion-button icon-right (click)="logout()">\n                              Logout\n                            </button>\n                          </p>\n                        </div>\n                        <div class="btn_container">\n                          <button ion-button full (click)="loginAction();" round>\n                             \n                            <ion-icon name="logo-facebook"></ion-icon>\n                            <ion-label>Facebook</ion-label>\n                          </button>\n                      </div>\n                                        \n                </ion-col>\n                <ion-col text-center>\n                    <button ion-button block color="danger" (click)="skip()" *ngIf="!userProfile" round>\n                        <ion-icon name="logo-googleplus"> </ion-icon>\n                        <ion-label>Google</ion-label>\n                          \n                      </button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  \n      \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_server_util_serverUtil__["a" /* ServerUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__["a" /* StorageUtilProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__["a" /* SessionUtilProvider */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let StorageUtilProvider = class StorageUtilProvider {
    constructor(sqlite) {
        this.sqlite = sqlite;
        console.log('Hello StorageUtilProvider Provider');
    }
    executeSQL(database, sql) {
        var database_name = database + ".db";
        this.sqlite.create({
            name: database_name,
            location: 'default'
        })
            .then((db) => {
            db.executeSql(sql, [])
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
        })
            .catch(e => console.log(e));
    }
};
StorageUtilProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
], StorageUtilProvider);

//# sourceMappingURL=storage-util.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_session__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let SessionUtilProvider = class SessionUtilProvider {
    constructor(appCtrl, fb, googlePlus, storage) {
        this.appCtrl = appCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.initialize_session();
        this.check_login_state();
    }
    initialize_session() {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "N");
    }
    get_login_state() {
        return this.storage.get(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE);
    }
    set_login_state() {
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "Y");
    }
    clear_login_state() {
        this.session_obj = null;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_OBJECT, this.session_obj);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_STATE, "N");
    }
    check_login_state() {
        this.get_login_state().then((val) => {
            if (val == 'N') {
                console.log('Hello SessionUtilProvider Provider');
                this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */]);
                //this.navCtrl.push(AccountPage);
                // this.navUtil.navigateTo('Account_page');
            }
        });
    }
    set_login_data(name, email, imageurl, login_type, bday, gender) {
        this.session_obj = new __WEBPACK_IMPORTED_MODULE_5__pojo_session__["a" /* session */](name, email, imageurl, login_type, bday, gender);
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__["a" /* App_Constants */].SESSION_OBJECT, this.session_obj);
    }
    googleLogin() {
        this.googlePlus.login({
            'scopes': '',
        })
            .then(res => {
            console.log(JSON.stringify(res));
            console.log(res.imageUrl);
        })
            .catch(err => console.error(err));
    }
    facebookLogin() {
        this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
            .then((res) => {
            if (res.status == "connected") {
                var fb_id = res.authResponse.userID;
                var fb_token = res.authResponse.accessToken;
                this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {
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
            .catch((e) => {
            console.log('Error logging into Facebook', e);
        });
    }
};
SessionUtilProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], SessionUtilProvider);

//# sourceMappingURL=session-util.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BasicDetailPage = class BasicDetailPage {
    constructor(navCtrl, navParams) {
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
    onSlideChanged() {
        this.random_int = Math.floor(Math.random() * (this.colors.length - 0 + 1)) + 0;
        this.color = this.colors[this.random_int];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad BasicDetailPage');
    }
    // @ViewChild('myInput') myInput: ElementRef;
    // resize() {
    //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    //     var scrollHeight = element.scrollHeight;
    //     element.style.height = scrollHeight + 'px';
    //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    // }
    change() {
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
    }
};
BasicDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-basic-detail',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/basic-detail/basic-detail.html"*/'<ion-header>\n  </ion-header>\n  \n  \n  <ion-content>\n  \n    <ion-slides *ngIf="isImage" #slider effect="fade" pager="true" loop="true" spaceBetween="1" slidesPerView="1" class="slides_container">\n      <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background\' : \'url(\' + slide.imageUrl + \')\'}">\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 align-items-center>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="google-md"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-col>\n              <p class="email">{{slide.email}}</p>\n            </ion-col>\n            <ion-col>\n              <button class="dp_button" ion-button icon-only>\n                <ion-icon name="star"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-fab center middle>\n          <button *ngIf="!isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n        <ion-fab right bottom>\n          <button *ngIf="isImage" ion-fab>\n            <ion-icon name="md-add"></ion-icon>\n          </button>\n        </ion-fab>\n      </ion-slide>\n    </ion-slides>\n  \n  \n    <!-- <div class="slides_container" > \n      <ion-slides #slider  autoplay="2000" loop="true" (ionSlideDidChange)="onSlideChanged()">\n        <ion-slide *ngFor="let slide of slides" class="slide_transition"   [style.background-color]="color" >\n         \n        </ion-slide>\n      </ion-slides>\n    </div> -->\n    <!-- <ion-card>\n      <ion-card-content> -->\n        <ion-grid>\n  \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n  \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-row radio-group [(ngModel)]="Gender">\n  \n                <ion-col>\n                  <ion-item>\n                    <ion-label>Male <ion-icon name="man"></ion-icon>\n                    </ion-label>\n  \n                    <ion-radio value="male">\n  \n                    </ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Female <ion-icon name="woman"></ion-icon>\n                    </ion-label>\n                    <ion-radio value="female"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n  \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-row radio-group [(ngModel)]="AgeGroup">\n  \n                <ion-col col-12>\n                  <ion-label>Age Group</ion-label>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>0-18</ion-label>\n                    <ion-radio value="18"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>19-30</ion-label>\n                    <ion-radio value="30"></ion-radio>\n                  </ion-item>\n                </ion-col>\n  \n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>31-60</ion-label>\n                    <ion-radio value="60"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label>61+</ion-label>\n                    <ion-radio value="60plus"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10>\n              <p>Country</p>\n            </ion-col>\n            <ion-col col-2>\n              <button *ngIf="isImage" ion-fab>\n                <ion-icon name="locate"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <ion-item>\n                     <ion-textarea rows="1" id="messageInputBox" placeholder="Send message" (input)="change()" required></ion-textarea>\n                  </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <p class="userid">userid</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <button ion-button color="light" round full>Continue</button>\n            </ion-col>\n  \n          </ion-row>\n        </ion-grid>\n      <!-- </ion-card-content>\n    </ion-card> -->\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/basic-detail/basic-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BasicDetailPage);

//# sourceMappingURL=basic-detail.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let AddBlogPage = class AddBlogPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AddBlogPage');
    }
};
AddBlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-add-blog',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-blog/add-blog.html"*/'<ion-content class="page-add-post">\n    <div class="container">\n      <img class="post_image" src="../assets/imgs/397.jpg" />\n      <ion-row class="btn" align-items-center>\n        <ion-col offset-10 col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-fab center middle>\n        <button *ngIf="!isImage" ion-fab>\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n  \n  \n    <div id="container">\n      <ion-list>\n  \n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Blog Name" (input)="change(1)" required></ion-textarea>\n        </ion-item>\n  \n       \n        <ion-item class="rounded" id="question">\n            <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)" required></ion-textarea>\n          </ion-item>\n          <ion-item class="rounded" id="option">\n              <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Choose Blog Category"  [(ngModel)]="option"\n                required></ion-textarea>\n            </ion-item>\n      </ion-list>\n  \n      <ion-row justify-content-center>\n        <ion-col>\n            <button ion-button color="dark" round full>Add Blog</button>\n        </ion-col>\n      </ion-row>\n  \n    </div>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/add-blog/add-blog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], AddBlogPage);

//# sourceMappingURL=add-blog.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let ChatMainPage = class ChatMainPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatMainPage');
    }
};
ChatMainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chat-main',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/chat-main/chat-main.html"*/'<!--\n  Generated template for the ChatMainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat-main</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/chat-main/chat-main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ChatMainPage);

//# sourceMappingURL=chat-main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let ChatListPage = class ChatListPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatListPage');
    }
};
ChatListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chat-list',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/chat-list/chat-list.html"*/'<!--\n  Generated template for the ChatListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chat-list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/chat-list/chat-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ChatListPage);

//# sourceMappingURL=chat-list.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let CommentPage = class CommentPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CommentPage');
    }
};
CommentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-comment',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>comment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/comment/comment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CommentPage);

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let MatchupPage = class MatchupPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MatchupPage');
    }
};
MatchupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-matchup',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/matchup/matchup.html"*/'<!--\n  Generated template for the MatchupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/matchup/matchup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MatchupPage);

//# sourceMappingURL=matchup.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let NotificationPage = class NotificationPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad NotificationPage');
    }
};
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let SearchPage = class SearchPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
    }
};
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let ViewBlogPage = class ViewBlogPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ViewBlogPage');
    }
};
ViewBlogPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-view-blog',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/view-blog/view-blog.html"*/'<!--\n  Generated template for the ViewBlogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view-blog</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/view-blog/view-blog.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ViewBlogPage);

//# sourceMappingURL=view-blog.js.map

/***/ }),

/***/ 365:
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

let ViewPostPage = class ViewPostPage {
    constructor() {
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
    ngAfterViewInit() {
    }
};
ViewPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/view-post/view-post.html"*/'<ion-content>\n    <div class="container">\n      <img src="../assets/imgs/397.jpg"/> \n      <ion-row class="btn" align-items-center>\n        <ion-col col-2>\n          <ion-avatar class="avatar">\n            <img id="blog_image" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-8 text-start>\n          <div margin class="card-title">Madison</div>\n        </ion-col>\n  \n        <ion-col col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n   \n    </div>\n      \n     \n  \n    <ion-row>\n      <ion-col col-10 text-start>\n        <div class="participants">Participants:</div>\n      </ion-col>\n      <ion-col col-2>\n        <ion-avatar class="avatar">\n          <img id="poll_result" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png">\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <div class="question">Question</div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row class="card" justify-content-center>\n      <ion-col col-auto class="item-text-wrap"  *ngFor="let item of items" >\n        <p  >\n         Ahdglcjdcerhiehil</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="description">Description</div>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n  \n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/view-post/view-post.html"*/
    }),
    __metadata("design:paramtypes", [])
], ViewPostPage);

//# sourceMappingURL=view-post.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
let MatchupPlayPage = class MatchupPlayPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MatchupPlayPage');
    }
};
MatchupPlayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-matchup-play',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/matchup-play/matchup-play.html"*/'<!--\n  Generated template for the MatchupPlayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>matchup-play</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/matchup-play/matchup-play.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MatchupPlayPage);

//# sourceMappingURL=matchup-play.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(474);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ServerUtil = class ServerUtil {
    constructor(http) {
        this.http = http;
        this.data = {};
    }
    static getHeaders() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('allow-running-insecure-content', 'true');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    }
};
ServerUtil = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ServerUtil);

//# sourceMappingURL=serverUtil.js.map

/***/ }),

/***/ 41:
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

let Context = Context_1 = class Context {
    static set(key, val) {
        Context_1.contextObject.set(key, val);
    }
    static get(key) {
        return Context_1.contextObject.get(key);
    }
};
Context.contextObject = new Map();
Context = Context_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
], Context);

var Context_1;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_basic_detail_basic_detail__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_blog_add_blog__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_post_add_post__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_main_chat_main__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_list_chat_list__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comment_comment__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_interest_interest__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_matchup_matchup__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_view_blog_view_blog__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_post_view_post__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_matchup_play_matchup_play__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_deeplinks__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_category_category__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_category_subcategory_subcategory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_emoji__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_text_util_text_util__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_plus__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_storage_util_storage_util__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_sqlite__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_session_util_session_util__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_image_picker__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angularfire2_database__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_firebaseDataProvider__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_crop__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_ImageUtil__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_firebase_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_post_client_api_post_client_api__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common_http__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_tagname_client_api_tagname_client_api__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_add_post_tagname_tagname__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic_long_press__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_image_selector_image_selector__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_home_home_module__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_in_app_browser__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_quick_setting_modal_quick_setting_modal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_favorite_category_favorite_category__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_categorymain_categorymain__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_categorysub_categorysub__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_account_account_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_add_blog_add_blog_module__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_chat_main_chat_main_module__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_chat_list_chat_list_module__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_comment_comment_module__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_interest_interest_module__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_matchup_matchup_module__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_notification_notification_module__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_search_search_module__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_view_blog_view_blog_module__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_view_post_view_post_module__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_matchup_play_matchup_play_module__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_category_subcategory_subcategory_module__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_add_post_tagname_tagname_module__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_quick_setting_modal_quick_setting_modal_module__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_favorite_category_favorite_category_module__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_welcome_welcome_module__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_basic_detail_basic_detail_module__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_camera__ = __webpack_require__(342);
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_50__components_image_selector_image_selector__["a" /* ImageSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_post_add_post__["a" /* AddPostPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_categorymain_categorymain__["a" /* CategorymainPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_categorysub_categorysub__["a" /* CategorysubPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_24__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_76__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_49_ionic_long_press__["a" /* LongPressModule */],
            __WEBPACK_IMPORTED_MODULE_58__pages_account_account_module__["a" /* AccountPageModule */],
            __WEBPACK_IMPORTED_MODULE_59__pages_add_blog_add_blog_module__["a" /* AddBlogPageModule */],
            __WEBPACK_IMPORTED_MODULE_60__pages_chat_main_chat_main_module__["a" /* ChatMainPageModule */],
            __WEBPACK_IMPORTED_MODULE_61__pages_chat_list_chat_list_module__["a" /* ChatListPageModule */],
            __WEBPACK_IMPORTED_MODULE_62__pages_comment_comment_module__["a" /* CommentPageModule */],
            __WEBPACK_IMPORTED_MODULE_63__pages_interest_interest_module__["a" /* InterestPageModule */],
            __WEBPACK_IMPORTED_MODULE_64__pages_matchup_matchup_module__["a" /* MatchupPageModule */],
            __WEBPACK_IMPORTED_MODULE_61__pages_chat_list_chat_list_module__["a" /* ChatListPageModule */],
            __WEBPACK_IMPORTED_MODULE_74__pages_welcome_welcome_module__["a" /* WelcomePageModule */],
            __WEBPACK_IMPORTED_MODULE_75__pages_basic_detail_basic_detail_module__["a" /* BasicDetailPageModule */],
            __WEBPACK_IMPORTED_MODULE_65__pages_notification_notification_module__["a" /* NotificationPageModule */],
            __WEBPACK_IMPORTED_MODULE_66__pages_search_search_module__["a" /* SearchPageModule */],
            __WEBPACK_IMPORTED_MODULE_67__pages_view_blog_view_blog_module__["a" /* ViewBlogPageModule */],
            __WEBPACK_IMPORTED_MODULE_68__pages_view_post_view_post_module__["a" /* ViewPostPageModule */],
            __WEBPACK_IMPORTED_MODULE_69__pages_matchup_play_matchup_play_module__["a" /* MatchupPlayPageModule */],
            __WEBPACK_IMPORTED_MODULE_70__pages_category_subcategory_subcategory_module__["a" /* SubcategoryPageModule */],
            __WEBPACK_IMPORTED_MODULE_71__pages_add_post_tagname_tagname_module__["a" /* TagnamePageModule */],
            __WEBPACK_IMPORTED_MODULE_72__pages_quick_setting_modal_quick_setting_modal_module__["a" /* QuickSettingModalPageModule */],
            __WEBPACK_IMPORTED_MODULE_73__pages_favorite_category_favorite_category_module__["a" /* FavoriteCategoryPageModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_51__pages_home_home_module__["a" /* HomePageModule */],
            __WEBPACK_IMPORTED_MODULE_46__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_37_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_38_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_39_angularfire2_storage__["b" /* AngularFireStorageModule */],
            __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_32__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: 'quizator',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                statusbarPadding: true,
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */], name: 'welcome', segment: 'welcome' },
                    { component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], name: 'home', segment: 'home' },
                    { component: __WEBPACK_IMPORTED_MODULE_6__pages_basic_detail_basic_detail__["a" /* BasicDetailPage */], name: 'basic', segment: 'basic' },
                    { component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */], name: 'account', segment: 'account' },
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_add_blog_add_blog__["a" /* AddBlogPage */], name: 'addblog', segment: 'addblog' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_add_post_add_post__["a" /* AddPostPage */], name: 'addpost', segment: 'addpost' },
                    { component: __WEBPACK_IMPORTED_MODULE_10__pages_chat_main_chat_main__["a" /* ChatMainPage */], name: 'chat', segment: 'chat' },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_chat_list_chat_list__["a" /* ChatListPage */], name: 'chatlist', segment: 'chatlist' },
                    { component: __WEBPACK_IMPORTED_MODULE_12__pages_comment_comment__["a" /* CommentPage */], name: 'comment', segment: 'comment' },
                    { component: __WEBPACK_IMPORTED_MODULE_13__pages_interest_interest__["a" /* InterestPage */], name: 'interest', segment: 'interest' },
                    { component: __WEBPACK_IMPORTED_MODULE_14__pages_matchup_matchup__["a" /* MatchupPage */], name: 'matchup', segment: 'matchup' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */], name: 'notification', segment: 'notification' },
                    { component: __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */], name: 'search', segment: 'search' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_view_blog_view_blog__["a" /* ViewBlogPage */], name: 'viewblog', segment: 'viewblog' },
                    { component: __WEBPACK_IMPORTED_MODULE_18__pages_view_post_view_post__["a" /* ViewPostPage */], name: 'viewpost', segment: 'viewpost' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */], name: 'matchupplay', segment: 'matchupplay' }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_basic_detail_basic_detail__["a" /* BasicDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_add_blog_add_blog__["a" /* AddBlogPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_post_add_post__["a" /* AddPostPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_chat_main_chat_main__["a" /* ChatMainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_chat_list_chat_list__["a" /* ChatListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_comment_comment__["a" /* CommentPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_interest_interest__["a" /* InterestPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_matchup_matchup__["a" /* MatchupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_view_blog_view_blog__["a" /* ViewBlogPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_view_post_view_post__["a" /* ViewPostPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_matchup_play_matchup_play__["a" /* MatchupPlayPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_category_subcategory_subcategory__["a" /* SubcategoryPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_add_post_tagname_tagname__["a" /* TagnamePage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_quick_setting_modal_quick_setting_modal__["a" /* QuickSettingModalPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_favorite_category_favorite_category__["a" /* FavoriteCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_categorymain_categorymain__["a" /* CategorymainPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_categorysub_categorysub__["a" /* CategorysubPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Slides */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_27__providers_emoji__["a" /* EmojiProvider */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_sqlite__["a" /* SQLite */],
            // { provide: LocationStrategy, useClass: PathLocationStrategy },
            __WEBPACK_IMPORTED_MODULE_28__providers_text_util_text_util__["a" /* TextUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_33__providers_storage_util_storage_util__["a" /* StorageUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_session_util_session_util__["a" /* SessionUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_server_util_serverUtil__["a" /* ServerUtil */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_44__providers_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_77__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_40__providers_firebaseDataProvider__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_41__providers_context__["a" /* Context */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_43__providers_ImageUtil__["a" /* ImageUtil */],
            __WEBPACK_IMPORTED_MODULE_52__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            // { provide: LocationStrategy, useClass: PathLocationStrategy },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_45__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */],
            __WEBPACK_IMPORTED_MODULE_47__providers_tagname_client_api_tagname_client_api__["a" /* TagnameClientApiProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_interest_interest__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_post_add_post__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_image_loader__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let MyApp = class MyApp {
    constructor(deeplinks, imageLoaderConfig, platform, statusBar, splashScreen, fcm) {
        this.deeplinks = deeplinks;
        this.imageLoaderConfig = imageLoaderConfig;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fcm = fcm;
        this.title = "Quizator";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_add_post_add_post__["a" /* AddPostPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'interest', component: __WEBPACK_IMPORTED_MODULE_5__pages_interest_interest__["a" /* InterestPage */] }
        ];
    }
    initializeApp() {
        if (this.platform.is('ios')) {
            this.platform.ready().then(() => {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
                this.imageLoaderConfig.enableDebugMode();
                this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
                this.imageLoaderConfig.setFallbackUrl('assets/imgs/logo.png');
                this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
                this.fcm.getToken().then(token => {
                    console.log(token);
                    // Your best bet is to here store the token on the user's profile on the
                    // Firebase database, so that when you want to send notifications to this 
                    // specific user you can do it from Cloud Functions.
                });
                this.fcm.onNotification().subscribe(data => {
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
    }
    openPage(page) {
        this.nav.setRoot(page.component);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header style="background: black">\n    <ion-toolbar >\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav  [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_9_ionic_image_loader__["a" /* ImageLoaderConfig */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    BASE_URL_TASVEER: "https://api.qzator.com:9002/",
    BASE_URL_VARG: "https://api.qzator.com:9001/",
    BASE_URL_SAWAAL: "https://api.qzator.com:9000/",
    POST_API: "sawaal",
    POSTVIEW_API: "postview",
    FAVPOST_API: "favpost",
    FAV_API: "favorite",
    CATEGORY_API: "category",
    PARENT_CATEGORY_PARAMS: "?type=main&parent=0",
    TAG_FIND_API: "media/find?keyword=",
    CATEGORY_FIND_API: "category/match?keyword=",
    TAGNAME_API: "media"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Category {
    constructor(id, category, parentId, category_media) {
        this.id = id;
        this.category = category;
        this.parentId = parentId;
        this.category_media = category_media;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Category;

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class App_Constants {
    static get SESSION_STATE() { return "session_state"; }
    static get SESSION_OBJECT() { return "session_object"; }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App_Constants;

//# sourceMappingURL=App_Constants.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class session {
    constructor(name, email, imageurl, login_type, bday, gender) {
        this.name = name;
        this.email = email;
        this.image_url = imageurl;
        this.login_type = login_type;
        this.bday = bday;
        this.gender = gender;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = session;

//# sourceMappingURL=session.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EmojiProvider {
    getEmojis() {
        const EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        const EmojiArr = EMOJIS.split(' ');
        const groupNum = Math.ceil(EmojiArr.length / (24));
        const items = [];
        for (let i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EmojiProvider;

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagnameClientApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TagnameClientApiProvider = class TagnameClientApiProvider {
    constructor(http) {
        this.http = http;
        this.data = {};
        console.log('Hello TagnameClientApiProvider Provider');
    }
    getTags(keyword) {
    }
};
TagnameClientApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], TagnameClientApiProvider);

//# sourceMappingURL=tagname-client-api.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_post_item_postItem_module__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_post_item_postItem_module__["a" /* PostItemModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_item__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let PostItemModule = class PostItemModule {
};
PostItemModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__post_item__["a" /* PostItemComponent */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__post_item__["a" /* PostItemComponent */]]
    })
], PostItemModule);

//# sourceMappingURL=postItem.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemComponent; });
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

let PostItemComponent = class PostItemComponent {
    constructor() {
        this.item = null;
        console.log('Hello PostItemComponent Component');
        this.text = 'Hello World';
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Object)
], PostItemComponent.prototype, "item", void 0);
PostItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'post-item',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/components/post-item/post-item.html"*/''/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/components/post-item/post-item.html"*/
    }),
    __metadata("design:paramtypes", [])
], PostItemComponent);

//# sourceMappingURL=post-item.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorysubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the CategorysubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let CategorysubPage = class CategorysubPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CategorysubPage');
    }
};
CategorysubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-categorysub',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/categorysub/categorysub.html"*/'<ion-header>\n    <ion-navbar>\n  \n      <ion-grid>\n        <ion-row align-items-center justify-content-center>\n  \n          <ion-col>\n            <ion-fab middle right>\n              <button ion-fab mini (click)="navigateTo(0)">\n                <ion-icon ios="ios-home" md="md-home"></ion-icon>\n              </button>\n            </ion-fab>\n  \n          </ion-col>\n          <ion-col>\n            <ion-fab middle right>\n              <button ion-fab mini (click)="myAlert_show()">\n                <ion-icon name="logo-buffer"></ion-icon>\n              </button>\n            </ion-fab>\n  \n          </ion-col>\n          <ion-col>\n            <ion-fab middle right>\n              <button ion-fab (click)="myAlert_show()">\n                <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n  \n              </button>\n            </ion-fab>\n  \n          </ion-col>\n          <ion-col>\n            <ion-fab middle right>\n              <button id="notification-button" ion-fab mini (click)="myAlert_show()">\n                <ion-icon ios="ios-chatbubbles" md="md-chatbubbles">\n                  <ion-badge id="notifications-badge" color="danger">999</ion-badge>\n                </ion-icon>\n              </button>\n            </ion-fab>\n  \n          </ion-col>\n          <ion-col>\n  \n            <ion-fab middle right>\n              <!-- <button id="profile_pic" ion-fab mini (click)="click()">\n                    <img src="https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif">\n               </button> -->\n              <button ion-fab mini (click)="myAlert_show()">\n                <ion-icon ios="ios-person" md="md-person">\n                </ion-icon>\n              </button>\n            </ion-fab>\n  \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n  \n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-list *ngIf="post_view_mode==0">\n      <ion-item *ngFor="let post of posts; let m_id = index">\n        <ion-row>\n          <ion-card>\n            <div class="post_image_container" *ngIf="post.post_media_id">\n              <img onerror="this.style.display=\'none\'" class="post_image" id="post_media_{{m_id}}" src="{{post.post_media_id.mediaUrl}}" />\n            </div>\n          </ion-card>\n        </ion-row>\n        <div class="post_title_container" *ngIf="post.title">\n          <ion-row padding>\n            <ion-col text-center text-wrap>\n              <p class="post_title" id="post_title_{{m_id}}">{{post.title}}</p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_option_container" *ngIf="post.options" no-padding>\n          <ion-row justify-content-center align-items-center no-padding>\n            <ion-col align-self-stretch col-5 *ngFor="let post_option of post.options; let idx = index" id="post_option_container_{{m_id}}_{{idx}}"\n              (click)="tapOption(post,post_option,idx,m_id)" text-wrap text-center>\n              <ion-card [class.selected_correct]="post_option === selectedOption && idx === currentSelected && is_correct &&post.post_type === \'1\'"\n                [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !is_correct &&post.post_type === \'1\'">\n                <ion-row>\n                  <ion-col>\n                    <p [class.selected_correct]="post_option === selectedOption && idx === currentSelected && is_correct &&post.post_type === \'1\'"\n                      [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !is_correct && post.post_type === \'1\'"\n                      id="post_option_{{m_id}}_{{idx}}" padding>\n                      {{post_option.option}}\n                    </p>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf="post.post_type === \'2\'" id="post_option_div_{{m_id}}_{{idx}}">\n                  <ion-col>\n                    <div id="post_option_div_label_{{m_id}}_{{idx}}">\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_desc_container" *ngIf="post && post.post_desc  && (post_viewed.has(post.post_id)||post.post_type === \'2\')">\n          <ion-row>\n            <ion-col text-left text-wrap>\n              <p>\n                {{post.post_desc}}\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="post.post_media_id && post.post_media_id.imageCredits">\n            <ion-col text-left text-wrap>\n              <p>\n                Image Credits : {{post.post_media_id.imageCredits}}\n              </p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_category_container" *ngIf="post.post_category_id">\n          <ion-row align-items-center>\n  \n            <ion-col col-3>\n              <div id="post_web_search_container" *ngIf="post.search_tag && post_viewed.has(post.post_id)">\n                <button ion-button (click)="searchOnWeb(post.search_tag)" clear>\n                  Read more\n                </button>\n              </div>\n            </ion-col>\n            <ion-col col-7 text-end>\n              <p *ngIf="post.post_category_id && post.post_category_id.category" text-wrap>\n                {{post.post_category_id.category}}</p>\n            </ion-col>\n            <ion-col col-2>\n  \n              <ion-avatar item-end>\n  \n                <img onerror="this.style.display=\'none\'" *ngIf="post.post_category_id && post.post_category_id.category_media"\n                  src="{{post.post_category_id.category_media}}">\n              </ion-avatar>\n  \n            </ion-col>\n          </ion-row>\n        </div>\n  \n        <ion-item-divider color="light" no-padding id="post_date">\n          <ion-row justify-content-end>\n  \n            <ion-col col-1 margin-left *ngIf="checkIfFav(post.post_id); ">\n              <ion-icon id="fav_icon_{{m_id}}" color="danger" name="heart" (click)="removePostFromFav(post.post_id)">\n              </ion-icon>\n            </ion-col>\n            <ion-col col-1 margin-left *ngIf="!checkIfFav(post.post_id);">\n              <ion-icon id="fav_icon_{{m_id}}" color="dark" name="heart" (click)="addPostToFav(post.post_id)">\n              </ion-icon>\n            </ion-col>\n            <ion-col col-3>\n              <div *ngIf="post_viewed.has(post.post_id)">\n                <ion-col col-1>\n                  <ion-icon ios="ios-done-all" md="md-done-all"></ion-icon>\n                </ion-col>\n                <ion-col col-1 *ngIf="(checkIfCorrect(post.post_id) ||is_correct)&& post.post_type === \'1\' ">\n                  <ion-icon name="happy"></ion-icon>\n                </ion-col>\n              </div>\n            </ion-col>\n            <ion-col text-center>\n              {{post.post_time| date: \'mediumDate\'}}\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n      </ion-item>\n    </ion-list>\n  \n    <ion-infinite-scroll *ngIf="post_view_mode==0" (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/categorysub/categorysub.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CategorysubPage);

//# sourceMappingURL=categorysub.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AccountPageModule = class AccountPageModule {
};
AccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
        ],
    })
], AccountPageModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_blog__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AddBlogPageModule = class AddBlogPageModule {
};
AddBlogPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_blog__["a" /* AddBlogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_blog__["a" /* AddBlogPage */]),
        ],
    })
], AddBlogPageModule);

//# sourceMappingURL=add-blog.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_main__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChatMainPageModule = class ChatMainPageModule {
};
ChatMainPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_main__["a" /* ChatMainPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_main__["a" /* ChatMainPage */]),
        ],
    })
], ChatMainPageModule);

//# sourceMappingURL=chat-main.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_list__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ChatListPageModule = class ChatListPageModule {
};
ChatListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_list__["a" /* ChatListPage */]),
        ],
    })
], ChatListPageModule);

//# sourceMappingURL=chat-list.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CommentPageModule = class CommentPageModule {
};
CommentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comment__["a" /* CommentPage */]),
        ],
    })
], CommentPageModule);

//# sourceMappingURL=comment.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interest__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let InterestPageModule = class InterestPageModule {
};
InterestPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__interest__["a" /* InterestPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interest__["a" /* InterestPage */]),
        ],
    })
], InterestPageModule);

//# sourceMappingURL=interest.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchup__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MatchupPageModule = class MatchupPageModule {
};
MatchupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__matchup__["a" /* MatchupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__matchup__["a" /* MatchupPage */]),
        ],
    })
], MatchupPageModule);

//# sourceMappingURL=matchup.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SearchPageModule = class SearchPageModule {
};
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_blog__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ViewBlogPageModule = class ViewBlogPageModule {
};
ViewBlogPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_blog__["a" /* ViewBlogPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_blog__["a" /* ViewBlogPage */]),
        ],
    })
], ViewBlogPageModule);

//# sourceMappingURL=view-blog.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_post__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ViewPostPageModule = class ViewPostPageModule {
};
ViewPostPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__view_post__["a" /* ViewPostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_post__["a" /* ViewPostPage */]),
        ],
    })
], ViewPostPageModule);

//# sourceMappingURL=view-post.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matchup_play__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MatchupPlayPageModule = class MatchupPlayPageModule {
};
MatchupPlayPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__matchup_play__["a" /* MatchupPlayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__matchup_play__["a" /* MatchupPlayPage */]),
        ],
    })
], MatchupPlayPageModule);

//# sourceMappingURL=matchup-play.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SubcategoryPageModule = class SubcategoryPageModule {
};
SubcategoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__subcategory__["a" /* SubcategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subcategory__["a" /* SubcategoryPage */]),
        ],
    })
], SubcategoryPageModule);

//# sourceMappingURL=subcategory.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagnamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tagname__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TagnamePageModule = class TagnamePageModule {
};
TagnamePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tagname__["a" /* TagnamePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tagname__["a" /* TagnamePage */]),
        ],
    })
], TagnamePageModule);

//# sourceMappingURL=tagname.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSettingModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_setting_modal__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let QuickSettingModalPageModule = class QuickSettingModalPageModule {
};
QuickSettingModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quick_setting_modal__["a" /* QuickSettingModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quick_setting_modal__["a" /* QuickSettingModalPage */]),
        ],
    })
], QuickSettingModalPageModule);

//# sourceMappingURL=quick-setting-modal.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_category__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FavoriteCategoryPageModule = class FavoriteCategoryPageModule {
};
FavoriteCategoryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__favorite_category__["a" /* FavoriteCategoryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_category__["a" /* FavoriteCategoryPage */]),
        ],
    })
], FavoriteCategoryPageModule);

//# sourceMappingURL=favorite-category.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
        ],
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_detail__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BasicDetailPageModule = class BasicDetailPageModule {
};
BasicDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__basic_detail__["a" /* BasicDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__basic_detail__["a" /* BasicDetailPage */]),
        ],
    })
], BasicDetailPageModule);

//# sourceMappingURL=basic-detail.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_setting_modal_quick_setting_modal__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorite_category_favorite_category__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_context__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categorymain_categorymain__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let HomePage = class HomePage {
    constructor(loadingCtrl, _app, toastCtrl, modal, alertCtrl, iab, navCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this._app = _app;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.http = http;
        this.current_post_id = 0;
        this.page = 0;
        this.m_id = 0;
        this.post_time_out = 500;
        this.exclude_already_viewed = false;
        this.post_view_mode = 0; // 0 -> listing , 1 -> endless , 2 -> page view
        this.post_type = 0; // none-> All, 1 -> quiz, 2 -> poll , 3 -> fact
        this.postView = new Array();
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_SAWAAL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API + "?size=15&page=";
        this.poll_link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_SAWAAL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API + "/poll/";
        this.postview_link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_SAWAAL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POSTVIEW_API + "/1";
        this.favpost_link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].FAVPOST_API + "/1";
        this.post_viewed = new Set();
        this.fav_post = new Set();
        this.post_correct_options = new Array();
        this.iscorrect = false;
        this.posts = new Array();
        this.temp_posts = new Array();
        this.single_post = new Array();
        this.data = {};
        this.total_page_count = 0;
        this.type = "";
        // this.posts = post;
        var link = this.link + this.page;
        this.getPosts(link);
        this.getPostView();
        this.getFavPost();
    }
    onImageLoad(event) {
        // console.log('image ready: ', event);
    }
    navigateTo(page) {
        switch (page) {
            case 0:
                location.reload();
                break;
            case 1:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__categorymain_categorymain__["a" /* CategorymainPage */]);
        }
    }
    addPostView(postId, isCorrectAttempt) {
        var link = this.postview_link + "?postId=" + postId + "&isCorrectAttempt=" + isCorrectAttempt;
        this.http.post(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            // this.posts = posts.data;
            console.log(posts);
        }, error => {
            console.log("Oooops!");
        });
    }
    addPostToFav(post_id) {
        var link = this.favpost_link + "?post=" + post_id;
        this.http.post(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            this.fav_post.add(post_id);
            console.log(posts);
        }, error => {
            console.log("Oooops!");
        });
    }
    removePostFromFav(post_id) {
        var link = this.favpost_link + "/" + post_id;
        this.http.delete(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            this.fav_post.delete(post_id);
            console.log(posts);
            console.log(this.postView);
        }, error => {
            console.log("Oooops!");
        });
    }
    getFavPost() {
        this.http.get(this.favpost_link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            console.log(posts);
            for (var i = 0; i < posts.data.length; i++) {
                this.fav_post.add(posts.data[i].post);
            }
            console.log(this.fav_post);
        }, error => {
            console.log("Oooops!");
        });
    }
    getPostView() {
        this.http.get(this.postview_link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            // this.posts = posts.data;
            this.postView = posts.data;
            for (var i = 0; i < posts.data.length; i++) {
                this.post_viewed.add(posts.data[i].postId);
            }
            console.log(this.postView);
        }, error => {
            console.log("Oooops!");
        });
    }
    ionViewDidEnter() {
        document.title = "Quizator - Home";
    }
    onSlideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        console.log(currentIndex);
        if (this.slides.isEnd()) {
            this.fetchMorePost();
        }
    }
    fetchMorePost() {
        this.page = this.page + 1;
        setTimeout(() => {
            if (this.total_page_count == 0 || this.total_page_count > this.page) {
                var link = this.link + this.page;
                if (this.post_type) {
                    link += "&type=" + this.post_type;
                }
                this.getPosts(link);
            }
            console.log('Async operation has ended' + this.total_page_count);
        }, 1);
    }
    get_correct_option(post_options, post_id) {
        for (var post_option of post_options) {
            if (post_option.iscorrect) {
                return post_option.id;
            }
        }
    }
    getPosts(link) {
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            let data_array = JSON.stringify(d.json());
            let posts = JSON.parse(data_array);
            // this.posts = posts.data;
            this.single_post = new Array();
            console.log(posts);
            this.total_page_count = posts.data.totalPages;
            console.log("exclude_already_viewed " + __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].get("exclude_already_viewed"));
            console.log("Fav posts " + this.favorite_post);
            if (__WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].get("exclude_already_viewed")) {
                for (var i = 0; i < posts.data.post.length; i++) {
                    if (!this.post_viewed.has(posts.data.post[i].post_id)) {
                        if (this.favorite_post) {
                            console.log("Fav posts");
                            if (this.fav_post.has(posts.data.post[i].post_id)) {
                                this.posts.push(posts.data.post[i]);
                            }
                        }
                        else {
                            this.posts.push(posts.data.post[i]);
                        }
                    }
                }
            }
            else {
                if (this.favorite_post) {
                    console.log("Fav posts");
                    for (var j = 0; j < posts.data.post.length; j++) {
                        if (this.fav_post.has(posts.data.post[j].post_id)) {
                            this.posts.push(posts.data.post[j]);
                        }
                    }
                }
                else {
                    this.posts = this.posts.concat(posts.data.post);
                }
            }
            if (this.posts) {
                this.single_post.push(this.posts[this.current_post_id]);
            }
        }, error => {
            console.log("Oooops!");
        });
    }
    contain_post(post_id) {
        return this.post_viewed.has(post_id);
    }
    tapOption(post, post_option, id, pid) {
        var post_options = post.options;
        if (post.post_type == 1) {
            this.post_time_out = 500;
            var correct_id = this.get_correct_option(post_options, post.post_id);
            correct_id = correct_id - 1;
            var correct_opt_id = "post_option_" + pid + "_" + correct_id;
            var input = document.getElementById(correct_opt_id);
            if (input) {
                input.style.background = "green";
                input.style.color = "whitesmoke";
            }
            this.currentSelected = id;
            this.iscorrect = post_option.iscorrect;
        }
        else if (post.post_type == 2) {
            this.post_time_out = 2000;
            if (!this.post_viewed.has(post.post_id)) {
                this.poll(post.post_id, id);
            }
            else {
                let toast = this.toastCtrl.create({
                    message: 'Already participated',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(() => {
                });
                toast.present();
            }
            var total_votes;
            if (!this.post_viewed.has(post.post_id)) {
                total_votes = post.total_votes + 1;
                post.total_votes = total_votes;
            }
            else {
                total_votes = post.total_votes;
            }
            var index = 0;
            for (var post_option_var of post_options) {
                var opt_id = "post_option_div_label_" + pid + "_" + index;
                var opt_element = document.getElementById(opt_id);
                var poll_count = post_option_var.pollcount;
                if (!this.post_viewed.has(post.post_id)) {
                    if (index == id) {
                        poll_count = poll_count + 1;
                        post_option_var.pollcount = poll_count;
                    }
                }
                var percent = (poll_count / total_votes) * 100;
                var opt_div_id = "post_option_div_" + pid + "_" + index;
                var opt_div_element = document.getElementById(opt_div_id);
                if (opt_element)
                    opt_element.innerText = "" + poll_count;
                if (opt_div_element) {
                    opt_div_element.style.background = "green";
                    opt_div_element.style.color = "whitesmoke";
                    opt_div_element.style.width = percent + "%";
                }
                index++;
            }
        }
        this.selectedOption = post_option;
        if (!this.post_viewed.has(post.post_id)) {
            var post_play = {
                "post_id": post.post_id,
                "iscorrect": this.iscorrect
            };
            this.post_correct_options.push(post_play);
            console.log(this.post_correct_options);
        }
        if (!this.post_viewed.has(post.post_id)) {
            this.post_viewed.add(post.post_id);
            this.addPostView(post.post_id, this.iscorrect);
        }
        if (this.post_view_mode == 2) {
            if (this.current_post_id != this.posts.length) {
                this.current_post_id++;
                this.presentLoadingDefault();
            }
        }
        if (this.current_post_id + 2 == this.posts.length) {
            this.fetchMorePost();
        }
    }
    next() {
        this.post_time_out = 0;
        if (this.current_post_id + 1 != this.posts.length) {
            this.current_post_id++;
            if (this.posts[this.current_post_id]) {
                this.presentLoadingDefault();
            }
            else {
                this.presentLoadingDefault();
                console.log("No more posts available");
            }
        }
        else if (this.current_post_id + 1 == this.posts.length) {
            this.fetchMorePost();
        }
    }
    prev() {
        this.post_time_out = 0;
        if (this.current_post_id != 0)
            this.current_post_id--;
        this.presentLoadingDefault();
    }
    sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay)
            ;
    }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            spinner: 'dots',
            showBackdrop: false
        });
        loading.present();
        setTimeout(() => {
            this.single_post = new Array();
            if (this.posts[this.current_post_id]) {
                this.single_post.push(this.posts[this.current_post_id]);
                console.log(this.posts[this.current_post_id]);
            }
            else {
                this.current_post_id--;
                this.single_post.push(this.posts[this.current_post_id]);
                console.log(this.posts[this.current_post_id]);
                console.log("No more posts available");
            }
            loading.dismiss();
        }, this.post_time_out);
    }
    poll(post_id, option) {
        var link = this.poll_link + post_id + "/" + option;
        this.http.put(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            console.log(this.data.response);
        }, error => {
            console.log("Oooops!");
        });
    }
    checkIfFav(post_id) {
        return this.fav_post.has(post_id);
    }
    checkIfCorrect(post_id) {
        const index = this.postView.findIndex(post_viewed => post_viewed.postId === post_id);
        if (index > -1) {
            return this.postView[index].correctAttempt;
        }
    }
    checkIfExists(post_id) {
        const checkRoleExistence = roleParam => this.post_correct_options.some(({ post_id }) => post_id == roleParam);
        return checkRoleExistence(post_id);
    }
    searchOnWeb(search_tag) {
        const browser = this.iab.create('https://www.google.co.in/search?q=' + search_tag);
    }
    doInfinite(infiniteScroll) {
        this.page = this.page + 1;
        setTimeout(() => {
            if (this.total_page_count == 0 || this.total_page_count > this.page) {
                var link = this.link + this.page;
                if (this.post_type) {
                    link += "&type=" + this.post_type;
                }
                this.getPosts(link);
            }
            console.log('Async operation has ended' + this.total_page_count);
            infiniteScroll.complete();
        }, 1000);
    }
    open_Modal() {
        const myModalOptions = {
            enableBackdropDismiss: true
        };
        const myModalData = {
            name: 'Paul Halliday',
            occupation: 'Developer'
        };
        var link;
        const myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__quick_setting_modal_quick_setting_modal__["a" /* QuickSettingModalPage */]);
        myModal.onDidDismiss(data => {
            if (data.favorite_post != null && this.favorite_post != data.favorite_post) {
                this.favorite_post = data.favorite_post;
                if (data.favorite_post) {
                    this.temp_posts = this.posts;
                    var temp_posts = new Array();
                    for (var i = 0; i < this.posts.length; i++) {
                        if (this.fav_post.has(this.posts[i].post_id)) {
                            temp_posts.push(this.posts[i]);
                        }
                    }
                    this.initialize();
                    this.posts = this.posts.concat(temp_posts);
                }
                else {
                    this.initialize();
                    this.posts = this.temp_posts;
                }
                this.single_post.push(this.posts[this.current_post_id]);
                console.log(this.posts);
            }
            if (data.post_view_mode != null && this.post_view_mode != data.post_view_mode)
                this.post_view_mode = data.post_view_mode;
            if (data != null && data.isUpdate) {
                this.post_type_label = null;
                if (data.post_type != 0) {
                    this.type = "&type=" + __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].get("post_type");
                    switch (data.post_type) {
                        case 1:
                            this.post_type_label = "Quiz";
                            this.post_time_out = 0;
                            break;
                        case 2:
                            this.post_type_label = "Poll";
                            this.post_time_out = 2000;
                            break;
                        case 3:
                            this.post_type_label = "Facts";
                            this.post_time_out = 0;
                            break;
                    }
                }
                else {
                    this.type = "";
                    console.log("============" + data.post_type);
                }
                this.post_type = data.post_type;
                this.initialize();
                link = this.link + this.page + this.type;
                this.getPosts(link);
            }
            if (data.goToFav) {
                this.goToFavorite();
            }
            if (data.exclude_already_viewed != null && this.exclude_already_viewed != data.exclude_already_viewed) {
                this.exclude_already_viewed = data.exclude_already_viewed;
                this.initialize();
                if (this.type != "")
                    link = this.link + this.page + this.type;
                else
                    link = this.link + this.page;
                this.getPosts(link);
            }
        });
        myModal.present();
    }
    initialize() {
        this.total_page_count = 0;
        this.page = 0;
        this.current_post_id = 0;
        this.posts = new Array();
        if (this.slides)
            this.slides.slideTo(0);
        this.single_post = new Array();
    }
    goToFavorite() {
        const myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__favorite_category_favorite_category__["a" /* FavoriteCategoryPage */]);
        myModal.onDidDismiss(data => {
        });
        myModal.present();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/home/home.html"*/'<ion-header id="header">\n \n\n    <ion-grid  style="margin-top: 12px;">\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab mini color="light" (click)="navigateTo(0)">\n              <ion-icon ios="ios-home" md="md-home"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab mini (click)="navigateTo(1)">\n              <ion-icon name="logo-buffer"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab (click)="myAlert_show()">\n              <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button id="notification-button" ion-fab mini (click)="myAlert_show()">\n              <ion-icon ios="ios-chatbubbles" md="md-chatbubbles">\n                <ion-badge id="notifications-badge" color="danger">999</ion-badge>\n              </ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n\n          <ion-fab middle right>\n            <!-- <button id="profile_pic" ion-fab mini (click)="click()">\n                  <img src="https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif">\n             </button> -->\n            <button ion-fab mini (click)="myAlert_show()">\n              <ion-icon ios="ios-person" md="md-person">\n              </ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n</ion-header>\n\n<ion-content>\n  <ion-fab top right>\n    <button (click)="open_Modal ()" ion-fab mini>\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-card *ngIf="post_type_label && post_view_mode!=2" id="post_type">\n    <ion-label>\n      {{post_type_label}}\n    </ion-label>\n  </ion-card>\n  <div *ngIf="post_view_mode==2 && single_post">\n    <div *ngFor="let post of single_post">\n      <ion-fab *ngIf="(post && post.post_type==3) || (post && post.options && post.options.length==0)" bottom right>\n        <button (click)="next()" ion-fab mini>\n          <ion-icon name="fastforward"></ion-icon>\n        </button>\n      </ion-fab>\n      <ion-fab *ngIf="post && post.post_type==3 && current_post_id" bottom left>\n        <button (click)="prev()" ion-fab mini>\n          <ion-icon name="rewind"></ion-icon>\n        </button>\n      </ion-fab>\n      <div class="post_image_container" *ngIf="post && post.post_media_id">\n        <img onerror="this.style.display=\'none\'" class="post_image" id="post_media_{{m_id}}" src="{{post.post_media_id.mediaUrl}}" />\n        <!-- <img-loader onerror="this.style.display=\'none\'" class="post_image" src="{{post.post_media_id.mediaUrl}}" useImg (load)="onImageLoad($event)"></img-loader> -->\n      \n      </div>\n      <ion-item-divider color="light" no-padding id="post_date">\n        <ion-row justify-content-end>\n\n          <ion-col margin-left col-1 *ngIf="post && checkIfFav(post.post_id); ">\n            <ion-icon id="fav_icon_{{m_id}}" color="danger" name="heart" (click)="removePostFromFav(post.post_id)">\n            </ion-icon>\n          </ion-col>\n          <ion-col margin-left col-1 *ngIf="post && !checkIfFav(post.post_id);">\n            <ion-icon id="fav_icon_{{m_id}}" color="dark" name="heart" (click)="post && addPostToFav(post.post_id)">\n            </ion-icon>\n          </ion-col>\n          <ion-col col-3>\n            <div *ngIf="post_viewed && post && post_viewed.has(post.post_id)">\n              <ion-col col-1>\n                <ion-icon ios="ios-done-all" md="md-done-all"></ion-icon>\n              </ion-col>\n              <ion-col col-1 *ngIf="post && (checkIfCorrect(post.post_id) ||iscorrect)&& post.post_type === \'1\' ">\n                <ion-icon name="happy"></ion-icon>\n              </ion-col>\n\n            </div>\n          </ion-col>\n          <ion-col *ngIf="post" text-center>\n            {{post.post_time| date: \'mediumDate\'}}\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n      <div class="post_title_container" *ngIf="post && post.title">\n        <ion-row no-padding>\n          <ion-col text-center text-wrap>\n            <p class="post_title" style="position:relative; color: black" id="post_title_{{m_id}}">{{post.title}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_option_container" *ngIf="post && post.options" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-stretch col-5 *ngFor="let post_option of post.options; let idx = index" id="post_option_container_{{m_id}}_{{idx}}"\n            (click)="tapOption(post,post_option,idx,0)" text-wrap text-center>\n            <ion-card [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n              [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect &&post.post_type === \'1\'">\n              <ion-row>\n                <ion-col>\n                  <p [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n                    [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect && post.post_type === \'1\'"\n                    id="post_option_{{m_id}}_{{idx}}" padding>\n                    {{post_option.option}}\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf="post.post_type === \'2\'" id="post_option_div_{{m_id}}_{{idx}}">\n                <ion-col>\n                  <div id="post_option_div_label_{{m_id}}_{{idx}}">\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_desc_container" *ngIf="post && post.post_desc && (post_viewed.has(post.post_id)||post.post_type === \'2\')"\n        no-padding>\n        <ion-row>\n          <ion-col text-left text-wrap>\n            <p style="position:relative; color: black; font-size: 15px">\n              {{post.post_desc}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="post.post_media_id && post.post_media_id.imageCredits" no-padding>\n          <ion-col text-left text-wrap>\n            <p style="position:relative; color: grey; font-size: 10px">\n              Image Credits : {{post.post_media_id.imageCredits}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_category_container" *ngIf="post && post.post_category_id">\n        <ion-row align-items-center no-padding>\n\n          <ion-col col-3>\n            <div id="post_web_search_container" *ngIf="post.search_tag && post_viewed.has(post.post_id)">\n              <button ion-button (click)="searchOnWeb(post.search_tag)" clear>\n                Read more\n              </button>\n            </div>\n          </ion-col>\n          <ion-col col-7 text-end>\n            <p style="position:relative; color: black" *ngIf="post.post_category_id && post.post_category_id.category"\n              text-wrap>\n              {{post.post_category_id.category}}</p>\n          </ion-col>\n          <ion-col col-2>\n            <img id="category_pic" onerror="this.style.display=\'none\'" *ngIf="post.post_category_id && post.post_category_id.category_media"\n              src="{{post.post_category_id.category_media}}">\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n    </div>\n  </div>\n  <!-- direction="vertical" -->\n\n\n  <ion-slides #slides pager=\'true\' (ionSlideDidChange)="onSlideChanged()" effect="slide" *ngIf="post_view_mode==1"\n    style="position:absolute; bottom: 0;left: 0;right: 0; ">\n    <ion-slide *ngFor="let post of posts; let m_id = index">\n      <ion-content>\n        <div class="post_image_container" *ngIf="post.post_media_id">\n          <img onerror="this.style.display=\'none\'" class="post_image" id="post_media_{{m_id}}" src="{{post.post_media_id.mediaUrl}}" />\n          <!-- <img-loader onerror="this.style.display=\'none\'" class="post_image" src="{{post.post_media_id.mediaUrl}}" useImg (load)="onImageLoad($event)"></img-loader> -->\n   \n        </div>\n        <ion-item-divider color="light" no-padding id="post_date">\n          <ion-row justify-content-end>\n\n            <ion-col col-1 margin-left *ngIf="checkIfFav(post.post_id); ">\n              <ion-icon id="fav_icon_{{m_id}}" color="danger" name="heart" (click)="removePostFromFav(post.post_id)">\n              </ion-icon>\n            </ion-col>\n            <ion-col col-1 margin-left *ngIf="!checkIfFav(post.post_id);">\n              <ion-icon id="fav_icon_{{m_id}}" color="dark" name="heart" (click)="addPostToFav(post.post_id)">\n              </ion-icon>\n            </ion-col>\n            <ion-col col-3>\n              <div *ngIf="post_viewed.has(post.post_id)">\n                <ion-col col-1>\n                  <ion-icon ios="ios-done-all" md="md-done-all"></ion-icon>\n                </ion-col>\n                <ion-col col-1 *ngIf="(checkIfCorrect(post.post_id) ||iscorrect)&& post.post_type === \'1\' ">\n                  <ion-icon name="happy"></ion-icon>\n                </ion-col>\n              </div>\n            </ion-col>\n            <ion-col text-center>\n              {{post.post_time| date: \'mediumDate\'}}\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n        <div class="post_title_container" *ngIf="post.title">\n          <ion-row no-padding>\n            <ion-col text-center text-wrap>\n              <p class="post_title" style="position:relative; color: black" id="post_title_{{m_id}}">{{post.title}}</p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_option_container" *ngIf="post.options" no-padding>\n          <ion-row justify-content-center align-items-center no-padding>\n            <ion-col align-self-stretch col-5 *ngFor="let post_option of post.options; let idx = index" id="post_option_container_{{m_id}}_{{idx}}"\n              (click)="tapOption(post,post_option,idx,m_id)" text-wrap text-center>\n              <ion-card [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n                [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect &&post.post_type === \'1\'">\n                <ion-row>\n                  <ion-col>\n                    <p [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n                      [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect && post.post_type === \'1\'"\n                      id="post_option_{{m_id}}_{{idx}}" padding>\n                      {{post_option.option}}\n                    </p>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf="post.post_type === \'2\'" id="post_option_div_{{m_id}}_{{idx}}">\n                  <ion-col>\n                    <div id="post_option_div_label_{{m_id}}_{{idx}}">\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_desc_container" *ngIf="post && post.post_desc  && (post_viewed.has(post.post_id)||post.post_type === \'2\')"\n          no-padding>\n          <ion-row>\n            <ion-col text-left text-wrap>\n              <p style="position:relative; color: black; font-size: 15px">\n                {{post.post_desc}}\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="post.post_media_id && post.post_media_id.imageCredits" no-padding>\n            <ion-col text-left text-wrap>\n              <p style="position:relative; color: grey; font-size: 10px">\n                Image Credits : {{post.post_media_id.imageCredits}}\n              </p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div id="post_category_container" *ngIf="post.post_category_id">\n          <ion-row align-items-center no-padding>\n\n            <ion-col col-3>\n              <div id="post_web_search_container" *ngIf="post.search_tag && post_viewed.has(post.post_id)">\n                <button ion-button (click)="searchOnWeb(post.search_tag)" clear>\n                  Read more\n                </button>\n              </div>\n            </ion-col>\n            <ion-col col-7 text-end>\n              <p style="position:relative; color: black" *ngIf="post.post_category_id && post.post_category_id.category"\n                text-wrap>\n                {{post.post_category_id.category}}</p>\n            </ion-col>\n            <ion-col col-2>\n              <img id="category_pic" onerror="this.style.display=\'none\'" *ngIf="post.post_category_id && post.post_category_id.category_media"\n                src="{{post.post_category_id.category_media}}">\n\n\n\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n\n      </ion-content>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list *ngIf="post_view_mode==0">\n    <ion-item *ngFor="let post of posts; let m_id = index">\n      <ion-row>\n        <ion-card>\n          <div class="post_image_container" *ngIf="post.post_media_id">\n            <img onerror="this.style.display=\'none\'" class="post_image" id="post_media_{{m_id}}" src="{{post.post_media_id.mediaUrl}}" />\n            <!-- <img-loader onerror="this.style.display=\'none\'" class="post_image" src="{{post.post_media_id.mediaUrl}}" useImg (load)="onImageLoad($event)"></img-loader> -->\n   \n          </div>\n        </ion-card>\n      </ion-row>\n      <div class="post_title_container" *ngIf="post.title">\n        <ion-row padding>\n          <ion-col text-center text-wrap>\n            <p class="post_title" id="post_title_{{m_id}}">{{post.title}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_option_container" *ngIf="post.options" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-stretch col-5 *ngFor="let post_option of post.options; let idx = index" id="post_option_container_{{m_id}}_{{idx}}"\n            (click)="tapOption(post,post_option,idx,m_id)" text-wrap text-center>\n            <ion-card [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n              [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect &&post.post_type === \'1\'">\n              <ion-row>\n                <ion-col>\n                  <p [class.selected_correct]="post_option === selectedOption && idx === currentSelected && iscorrect &&post.post_type === \'1\'"\n                    [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !iscorrect && post.post_type === \'1\'"\n                    id="post_option_{{m_id}}_{{idx}}" padding>\n                    {{post_option.option}}\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf="post.post_type === \'2\'" id="post_option_div_{{m_id}}_{{idx}}">\n                <ion-col>\n                  <div id="post_option_div_label_{{m_id}}_{{idx}}">\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_desc_container" *ngIf="post && post.post_desc  && (post_viewed.has(post.post_id)||post.post_type === \'2\')">\n        <ion-row>\n          <ion-col text-left text-wrap>\n            <p>\n              {{post.post_desc}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="post.post_media_id && post.post_media_id.imageCredits">\n          <ion-col text-left text-wrap>\n            <p>\n              Image Credits : {{post.post_media_id.imageCredits}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_category_container" *ngIf="post.post_category_id">\n        <ion-row align-items-center>\n\n          <ion-col col-3>\n            <div id="post_web_search_container" *ngIf="post.search_tag && post_viewed.has(post.post_id)">\n              <button ion-button (click)="searchOnWeb(post.search_tag)" clear>\n                Read more\n              </button>\n            </div>\n          </ion-col>\n          <ion-col col-7 text-end>\n            <p *ngIf="post.post_category_id && post.post_category_id.category" text-wrap>\n              {{post.post_category_id.category}}</p>\n          </ion-col>\n          <ion-col col-2>\n\n            <ion-avatar item-end>\n\n              <img onerror="this.style.display=\'none\'" *ngIf="post.post_category_id && post.post_category_id.category_media"\n                src="{{post.post_category_id.category_media}}">\n            </ion-avatar>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-item-divider color="light" no-padding id="post_date">\n        <ion-row justify-content-end>\n\n          <ion-col col-1 margin-left *ngIf="checkIfFav(post.post_id); ">\n            <ion-icon id="fav_icon_{{m_id}}" color="danger" name="heart" (click)="removePostFromFav(post.post_id)">\n            </ion-icon>\n          </ion-col>\n          <ion-col col-1 margin-left *ngIf="!checkIfFav(post.post_id);">\n            <ion-icon id="fav_icon_{{m_id}}" color="dark" name="heart" (click)="addPostToFav(post.post_id)">\n            </ion-icon>\n          </ion-col>\n          <ion-col col-3>\n            <div *ngIf="post_viewed.has(post.post_id)">\n              <ion-col col-1>\n                <ion-icon ios="ios-done-all" md="md-done-all"></ion-icon>\n              </ion-col>\n              <ion-col col-1 *ngIf="(checkIfCorrect(post.post_id) ||iscorrect)&& post.post_type === \'1\' ">\n                <ion-icon name="happy"></ion-icon>\n              </ion-col>\n            </div>\n          </ion-col>\n          <ion-col text-center>\n            {{post.post_time| date: \'mediumDate\'}}\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll *ngIf="post_view_mode==0" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SubcategoryPage = SubcategoryPage_1 = class SubcategoryPage {
    constructor(alertCtrl, http, navCtrl, navParams, server) {
        this.alertCtrl = alertCtrl;
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
    log(item) {
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
        this.navCtrl.pop();
    }
    back() {
        this.navCtrl.pop();
    }
    getSubCategory() {
        var link;
        switch (this.type) {
            case 0:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PARENT_CATEGORY_PARAMS;
                break;
            case 1:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&id=" + SubcategoryPage_1.main_option2.id;
                break;
            case 2:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&id=" + SubcategoryPage_1.sub_option1.id;
                break;
            default:
                break;
        }
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(d => {
            this.data.response = d["_body"];
            console.log(this.data.response);
            let data_array = JSON.stringify(d.json());
            let cat = JSON.parse(data_array);
            this.category_data = cat.data;
            this.initial_category_data = this.category_data;
        }, error => {
            console.log("Oooops!");
        });
    }
    initializeItems() {
        this.getSubCategory();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad MaincategoryPage');
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.category_data = this.initial_category_data;
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.category_data = this.category_data.filter((item) => {
                return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    longPressed(item) {
        this.presentPrompt(item);
        console.log('Long press card ' + item);
    }
    updateTag(new_category, id) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL_VARG + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "/" + id;
        return this.http.put(link, new_category, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    }
    presentPrompt(item) {
        let alert = this.alertCtrl.create({
            title: 'Edit Category',
            inputs: [
                {
                    name: 'CategoryName',
                    placeholder: 'Category Name',
                    value: item.category
                },
                {
                    name: 'CategoryMediaUrl',
                    placeholder: 'Category Url',
                    value: item.category_media
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Done',
                    handler: data => {
                        if (data.CategoryName != item.category || data.CategoryMediaUrl != item.category_media) {
                            var new_tag = {
                                "id": item.id,
                                "category_media": data.CategoryMediaUrl,
                                "parentId": item.parentId,
                                "category": data.CategoryName
                            };
                            this.updateTag(new_tag, item.id).subscribe(d => {
                                this.getSubCategory();
                            }, error => {
                            });
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    }
};
SubcategoryPage.is_sub1_selected = false;
SubcategoryPage.is_sub2_selected = false;
SubcategoryPage.is_main_selected = false;
SubcategoryPage = SubcategoryPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-subcategory',template:/*ion-inline-start:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/category/subcategory/subcategory.html"*/'<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-row>\n        <ion-col (press)="longPressed(item)" (click)="log(item)" *ngFor="let item of category_data" col-6>\n     \n            <ion-card no-padding >\n               <ion-card-content  no-padding>\n                   <ion-row align-items-stretch>\n                       <ion-col align-self-stretch>\n                          <img  src={{item.category_media}} style="width:100%;height:100px"/>\n                       </ion-col>\n                      \n                     </ion-row>\n                     <ion-row align-items-stretch>\n                        <ion-col align-self-stretch>\n                            {{ item.category }}\n                         </ion-col>\n                     </ion-row>\n               </ion-card-content>\n             </ion-card>\n       </ion-col> \n    </ion-row>\n   \n    <ion-row>\n        <button ion-button (click)="back()" color="light" round full>Back\n          \n        </button>\n      </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lavpal/My Workspace/MyProjects/Quizator/PWA/quizator-client/src/pages/category/subcategory/subcategory.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */]])
], SubcategoryPage);

var SubcategoryPage_1;
//# sourceMappingURL=subcategory.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map