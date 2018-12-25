webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(404);
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
    function ImageUtil(imagePicker, cropService, firebaseService, camera) {
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.firebaseService = firebaseService;
        this.camera = camera;
    }
    ImageUtil.prototype.uploadImageToFirebase = function (image) {
        image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* normalizeURL */])(image);
        return this.firebaseService.uploadImage(image);
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
    ImageUtil.prototype.getImage = function () {
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
        return this.camera.getPicture(options);
    };
    ImageUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], ImageUtil);
    return ImageUtil;
}());

//# sourceMappingURL=ImageUtil.js.map

/***/ }),

/***/ 186:
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
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
    function SubcategoryPage(alertCtrl, http, navCtrl, navParams, server) {
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
        this.navCtrl.pop();
    };
    SubcategoryPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SubcategoryPage.prototype.getSubCategory = function () {
        var _this = this;
        var link;
        switch (this.type) {
            case 0:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PARENT_CATEGORY_PARAMS;
                break;
            case 1:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.main_option2.id;
                break;
            case 2:
                link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage_1.sub_option1.id;
                break;
            default:
                break;
        }
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            console.log(_this.data.response);
            var data_array = JSON.stringify(d.json());
            var cat = JSON.parse(data_array);
            _this.category_data = cat.data;
            _this.initial_category_data = _this.category_data;
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
        this.category_data = this.initial_category_data;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.category_data = this.category_data.filter(function (item) {
                return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SubcategoryPage.prototype.longPressed = function (item) {
        this.presentPrompt(item);
        console.log('Long press card ' + item);
    };
    SubcategoryPage.prototype.updateTag = function (new_category, id) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].CATEGORY_API + "/" + id;
        return this.http.put(link, new_category, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    };
    SubcategoryPage.prototype.presentPrompt = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        if (data.CategoryName != item.category || data.CategoryMediaUrl != item.category_media) {
                            var new_tag = {
                                "id": item.id,
                                "category_media": data.CategoryMediaUrl,
                                "parentId": item.parentId,
                                "category": data.CategoryName
                            };
                            _this.updateTag(new_tag, item.id).subscribe(function (d) {
                                _this.getSubCategory();
                            }, function (error) {
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
    };
    SubcategoryPage.is_sub1_selected = false;
    SubcategoryPage.is_sub2_selected = false;
    SubcategoryPage.is_main_selected = false;
    SubcategoryPage = SubcategoryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subcategory',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/subcategory/subcategory.html"*/'<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-row>\n        <ion-col (press)="longPressed(item)" (click)="log(item)" *ngFor="let item of category_data" col-6>\n     \n            <ion-card no-padding >\n               <ion-card-content  no-padding>\n                   <ion-row align-items-stretch>\n                       <ion-col align-self-stretch>\n                          <img  src={{item.category_media}} style="width:100%;height:100px"/>\n                       </ion-col>\n                      \n                     </ion-row>\n                     <ion-row align-items-stretch>\n                        <ion-col align-self-stretch>\n                            {{ item.category }}\n                         </ion-col>\n                     </ion-row>\n               </ion-card-content>\n             </ion-card>\n       </ion-col> \n    </ion-row>\n   \n    <ion-row>\n        <button ion-button (click)="back()" color="light" round full>Back\n          \n        </button>\n      </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/subcategory/subcategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */]])
    ], SubcategoryPage);
    return SubcategoryPage;
    var SubcategoryPage_1;
}());

//# sourceMappingURL=subcategory.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ImageUtil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_client_api_post_client_api__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_post_tagname_tagname__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ImageSelectorComponent = /** @class */ (function () {
    function ImageSelectorComponent(alertCtrl, postClient, storage, toastCtrl, imageUtil, platform, navCtrl, textUtil) {
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
    ImageSelectorComponent.prototype.removeImage = function (type) {
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
    };
    ImageSelectorComponent.prototype.getImage = function () {
        var _this = this;
        this.isImageURL = false;
        this.imageUtil.getImage().then(function (imageData) {
            _this.isImage = true;
            if (_this.platform.is('ios'))
                _this.image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* normalizeURL */])(imageData);
            else
                _this.image = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
    ImageSelectorComponent.prototype.upload = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].get("isImageUploading")) {
            __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("isImageUploading", true);
            this.imageUtil.uploadImageToFirebase(this.image).then(function (photoURL) {
                __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("isImageUploading", false);
                __WEBPACK_IMPORTED_MODULE_4__providers_context__["a" /* Context */].set("photoURL", photoURL);
                _this.image = photoURL;
                _this.isImageUploaded = true;
                _this.mediaChange(1);
                console.log(photoURL);
                var toast = _this.toastCtrl.create({
                    message: 'Image was uploaded successfully',
                    duration: 3000
                });
                toast.present();
            });
        }
    };
    ImageSelectorComponent.prototype.getTags = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_add_post_tagname_tagname__["a" /* TagnamePage */], { "keyword": this.media_tag });
    };
    ImageSelectorComponent.prototype.mediaChange = function (type) {
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
            selector: 'image-selector',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/components/image-selector/image-selector.html"*/'<div class="container">\n  <div id="post_image_container">\n\n    <img id="post_image" *ngIf="isImage||isTagPicked" src="{{image}}" />\n  </div>\n  <ion-row *ngIf="isImage||isTagPicked" class="btn" align-items-center>\n    <ion-col col-2>\n      <button class="dp_button" (click)="getImage()" margin ion-button icon-only>\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col offset-7 col-2>\n      <button class="dp_button" (click)="removeImage(true)" margin ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab id="post_image_fab" *ngIf="!isImage&&!isTagPicked" end middle>\n    <button (click)="getImage()" ion-fab>\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n</div>\n\n<ion-row *ngIf="isImage&&!isImageURL">\n  <button ion-button (click)="upload()" full clear light>\n    Upload Image\n  </button>\n</ion-row>\n\n<ion-row *ngIf="isImageUploaded">\n  <ion-col col-2>\n    <img id="uploaded_image" src="{{image}}" />\n  </ion-col>\n  <ion-col col-8>\n    <ion-label>\n      {{image}}\n    </ion-label>\n  </ion-col>\n  <ion-col col-2>\n    <button ion-button icon-only (click)="removeImage(true)">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label floating>Add Media Url</ion-label>\n    <ion-input type="text" (input)="isImage=true;isImageURL=true;mediaChange(1);" [(ngModel)]="image"></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row align-items-center>\n  <ion-col col-10>\n  <ion-item>\n    <ion-label floating>Add Media Tag Name</ion-label>\n    <ion-input type="text" [(ngModel)]="media_tag" (input)="mediaChange(2);" (keyup.enter)="getTags()"></ion-input>\n  </ion-item>\n</ion-col>\n<ion-col col-2>\n    <button ion-button icon-only (click)="getTags()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n</ion-col>\n</ion-row>\n<ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label floating>Add Media Credits Source</ion-label>\n          <ion-input type="text" [(ngModel)]="media_source" (input)="mediaChange(3);" ></ion-input>\n        </ion-item>\n      </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/components/image-selector/image-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__["a" /* TextUtilProvider */]])
    ], ImageSelectorComponent);
    return ImageSelectorComponent;
}());

//# sourceMappingURL=image-selector.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostClientApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostClientApiProvider = /** @class */ (function () {
    function PostClientApiProvider(http) {
        this.http = http;
        this.data = {};
        console.log('Hello PostClientApiProvider Provider');
    }
    PostClientApiProvider.prototype.post = function (isTagPicked, isImageUploaded, mediaId, title, search_tag, media_path, media_tag, media_source, post_type, post_category_id, correct_option, options, description) {
        var opts = this.getOptions(correct_option, options);
        if (!isTagPicked || isImageUploaded) {
            var tag = this.createTag(media_path, media_tag, media_source);
            console.log(tag);
            return this.addTag(tag, title, description, this.getPostType(post_type), post_category_id, 1, opts);
        }
        else {
            var post = this.createPost(title, description, search_tag, this.getPostType(post_type), post_category_id, 1, opts, mediaId);
            console.log(post);
            return this.addPost(post, mediaId, post_category_id);
        }
    };
    PostClientApiProvider.prototype.addTag = function (tag, title, description, post_type, post_category_id, blogger_id, opts) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAGNAME_API;
        return this.http.post(link, tag, __WEBPACK_IMPORTED_MODULE_2__server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    };
    PostClientApiProvider.prototype.createTag = function (media_path, media_tag, media_source) {
        var tag_data = {
            "mediaUrl": media_path,
            "tag": media_tag,
            "imageCredits": media_source
        };
        return tag_data;
    };
    PostClientApiProvider.prototype.createPost = function (title, description, search_tag, post_type, post_category_id, blogger_id, options, media_id) {
        var post_data = {
            "title": title,
            "options": options,
            "post_type": post_type,
            "post_desc": description,
            "blogger_id": blogger_id,
            "search_tag": search_tag,
            "post_state": "1",
            "total_votes": 0
        };
        return post_data;
    };
    PostClientApiProvider.prototype.createOption = function (id, data, is_true) {
        var post_opt = {
            "option": data,
            "id": id,
            "is_correct": is_true,
            "poll_count": 0
        };
        return post_opt;
    };
    PostClientApiProvider.prototype.getPostType = function (post_type) {
        switch (post_type) {
            case "quiz": return 1;
            case "poll": return 2;
            case "fact": return 3;
        }
    };
    PostClientApiProvider.prototype.getOptions = function (correct_option, items) {
        var _this = this;
        var count = 1;
        var options = new Array();
        items.forEach(function (val) {
            var is_true = false;
            if (val == correct_option)
                is_true = true;
            var o = _this.createOption(count, val, is_true);
            options.push(o);
            count++;
        });
        return options;
    };
    PostClientApiProvider.prototype.addPost = function (post_data, media, category) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API;
        if (media != null || category != null) {
            var categoryAdded = false;
            link = link + "?";
            if (media != null) {
                link = link + "media=" + media;
                if (category != null) {
                    link = link + "&category=" + category;
                    categoryAdded = true;
                }
            }
            if (!categoryAdded && category != null) {
                link = link + "category=" + category;
            }
        }
        var myData = JSON.stringify(post_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        //       headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(link, myData, options);
    };
    PostClientApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PostClientApiProvider);
    return PostClientApiProvider;
}());

//# sourceMappingURL=post-client-api.js.map

/***/ }),

/***/ 244:
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
webpackEmptyAsyncContext.id = 244;

/***/ }),

/***/ 287:
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
webpackEmptyAsyncContext.id = 287;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_setting_modal_quick_setting_modal__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorite_category_favorite_category__ = __webpack_require__(334);
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
    function HomePage(_app, toastCtrl, modal, alertCtrl, iab, navCtrl, http) {
        this._app = _app;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.http = http;
        this.page = 0;
        this.post_view_mode = 0; // 0 -> listing , 1 -> endless , 2 -> page view
        this.post_type = 0; // none-> All, 1 -> quiz, 2 -> poll , 3 -> fact
        this.link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API + "?size=15&page=";
        this.poll_link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].POST_API + "/poll/";
        this.post_viewed = new Set();
        this.post_correct_options = new Array();
        this.posts = new Array();
        this.data = {};
        // this.posts = post;
        var link = this.link + this.page;
        this.getPosts(link);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        document.title = "Quizator - Home";
    };
    HomePage.prototype.get_correct_option = function (post_options, post_id) {
        for (var _i = 0, post_options_1 = post_options; _i < post_options_1.length; _i++) {
            var post_option = post_options_1[_i];
            if (post_option.is_correct) {
                return post_option.id;
            }
        }
    };
    HomePage.prototype.getPosts = function (link) {
        var _this = this;
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            var data_array = JSON.stringify(d.json());
            var posts = JSON.parse(data_array);
            // this.posts = posts.data;
            for (var i = 0; i < posts.data.length; i++) {
                _this.posts.push(posts.data[i]);
            }
            console.log(_this.posts);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    HomePage.prototype.tapOption = function (post, post_option, id, pid) {
        var post_options = post.options;
        if (post.post_type == 1) {
            var correct_id = this.get_correct_option(post_options, post.post_id);
            correct_id = correct_id - 1;
            var correct_opt_id = "post_option_" + pid + "_" + correct_id;
            var input = document.getElementById(correct_opt_id);
            input.style.background = "green";
            input.style.color = "whitesmoke";
            this.currentSelected = id;
            this.is_correct = post_option.is_correct;
        }
        else if (post.post_type == 2) {
            if (!this.post_viewed.has(post.post_id)) {
                this.poll(post.post_id, id);
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Already participated',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
            var total_votes = post.total_votes + 1;
            var index = 0;
            for (var _i = 0, post_options_2 = post_options; _i < post_options_2.length; _i++) {
                var post_option_var = post_options_2[_i];
                var opt_id = "post_option_div_label_" + pid + "_" + index;
                var opt_element = document.getElementById(opt_id);
                var poll_count = post_option_var.poll_count;
                if (index == id) {
                    poll_count = poll_count + 1;
                }
                var percent = (poll_count / total_votes) * 100;
                var opt_div_id = "post_option_div_" + pid + "_" + index;
                var opt_div_element = document.getElementById(opt_div_id);
                opt_element.innerText = "" + poll_count;
                opt_div_element.style.background = "green";
                opt_div_element.style.color = "whitesmoke";
                opt_div_element.style.width = percent + "%";
                index++;
            }
        }
        this.selectedOption = post_option;
        if (!this.post_viewed.has(post.post_id)) {
            var post_play = {
                "post_id": post.post_id,
                "is_correct": this.is_correct
            };
            this.post_correct_options.push(post_play);
            console.log(this.post_correct_options);
        }
        this.post_viewed.add(post.post_id);
    };
    HomePage.prototype.poll = function (post_id, option) {
        var _this = this;
        var link = this.poll_link + post_id + "/" + option;
        this.http.put(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            console.log(_this.data.response);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    HomePage.prototype.checkIfCorrect = function (post_id) {
        var index = this.post_correct_options.findIndex(function (post_viewed) { return post_viewed.post_id === post_id; });
        if (index > -1) {
            return this.post_correct_options[index].is_correct;
        }
    };
    HomePage.prototype.checkIfExists = function (post_id) {
        var _this = this;
        var checkRoleExistence = function (roleParam) { return _this.post_correct_options.some(function (_a) {
            var post_id = _a.post_id;
            return post_id == roleParam;
        }); };
        return checkRoleExistence(post_id);
    };
    HomePage.prototype.searchOnWeb = function (search_tag) {
        var browser = this.iab.create('https://www.google.co.in/search?q=' + search_tag);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        setTimeout(function () {
            var link = _this.link + _this.page;
            if (_this.post_type) {
                link += "&type=" + _this.post_type;
            }
            _this.getPosts(link);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.open_Modal = function () {
        var _this = this;
        var myModalOptions = {
            enableBackdropDismiss: true
        };
        var myModalData = {
            name: 'Paul Halliday',
            occupation: 'Developer'
        };
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__quick_setting_modal_quick_setting_modal__["a" /* QuickSettingModalPage */]);
        myModal.onDidDismiss(function (data) {
            if (data != null && data.isUpdate) {
                console.log(data.post_type);
                var type = "";
                _this.post_type_label = null;
                if (data.post_type != 0) {
                    type = "&type=" + data.post_type;
                    switch (data.post_type) {
                        case 1:
                            _this.post_type_label = "Quiz";
                            break;
                        case 2:
                            _this.post_type_label = "Poll";
                            break;
                        case 3:
                            _this.post_type_label = "Facts";
                            break;
                    }
                }
                _this.post_type = data.post_type;
                _this.page = 0;
                var link = _this.link + _this.page + type;
                _this.posts = new Array();
                _this.getPosts(link);
            }
            if (data.goToFav) {
                _this.goToFavorite();
            }
        });
        myModal.present();
    };
    HomePage.prototype.goToFavorite = function () {
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__favorite_category_favorite_category__["a" /* FavoriteCategoryPage */]);
        myModal.onDidDismiss(function (data) {
        });
        myModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <ion-grid>\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab mini (click)="myAlert_show()">\n              <ion-icon ios="ios-home" md="md-home"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab mini (click)="myAlert_show()">\n              <ion-icon name="logo-buffer"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab (click)="myAlert_show()">\n              <ion-icon ios="ios-shuffle" md="md-shuffle"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n          <ion-fab middle right>\n            <button ion-fab mini (click)="myAlert_show()">\n              <ion-icon ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n        <ion-col>\n\n          <ion-fab middle right>\n            <!-- <button id="profile_pic" ion-fab mini (click)="click()">\n                  <img src="https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif">\n             </button> -->\n            <button ion-fab mini (click)="myAlert_show()">\n              <ion-icon ios="ios-person" md="md-person">\n              </ion-icon>\n            </button>\n          </ion-fab>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab bottom right>\n    <button (click)="open_Modal ()" ion-fab mini>\n      <ion-icon name="settings"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-card *ngIf="post_type_label" id="post_type">\n    <ion-label>\n      {{post_type_label}}\n    </ion-label>\n  </ion-card>\n  <ion-list>\n    <ion-item *ngFor="let post of posts; let m_id = index">\n      <ion-row>\n        <ion-card>\n          <div class="post_image_container" *ngIf="post.post_media_id">\n            <img onerror="this.style.display=\'none\'" class="post_image" id="post_media_{{m_id}}" src="{{post.post_media_id.mediaUrl}}" />\n          </div>\n        </ion-card>\n      </ion-row>\n      <div class="post_title_container" *ngIf="post.title">\n        <ion-row padding>\n          <ion-col text-center text-wrap>\n            <p class="post_title" id="post_title_{{m_id}}">{{post.title}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_option_container" *ngIf="post.options" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-stretch col-5 *ngFor="let post_option of post.options; let idx = index" id="post_option_container_{{m_id}}_{{idx}}"\n            (click)="tapOption(post,post_option,idx,m_id)" text-wrap text-center>\n            <ion-card [class.selected_correct]="post_option === selectedOption && idx === currentSelected && is_correct &&post.post_type === \'1\'"\n              [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !is_correct &&post.post_type === \'1\'">\n              <ion-row>\n                <ion-col>\n                  <p [class.selected_correct]="post_option === selectedOption && idx === currentSelected && is_correct &&post.post_type === \'1\'"\n                    [class.selected_incorrect]="post_option === selectedOption && idx === currentSelected && !is_correct && post.post_type === \'1\'"\n                    id="post_option_{{m_id}}_{{idx}}" padding>\n                    {{post_option.option}}\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf="post.post_type === \'2\'" id="post_option_div_{{m_id}}_{{idx}}">\n                <ion-col>\n                  <div id="post_option_div_label_{{m_id}}_{{idx}}">\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_desc_container" *ngIf="post.post_desc && post_viewed.has(post.post_id)">\n        <ion-row>\n          <ion-col text-left text-wrap>\n            <p>\n              {{post.post_desc}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="post.post_media_id && post.post_media_id.imageCredits">\n          <ion-col text-left text-wrap>\n            <p>\n              Image Credits : {{post.post_media_id.imageCredits}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div id="post_category_container" *ngIf="post.post_category_id">\n        <ion-row align-items-center>\n\n          <ion-col col-3>\n            <div id="post_web_search_container" *ngIf="post.search_tag && post_viewed.has(post.post_id)">\n              <button ion-button (click)="searchOnWeb(post.search_tag)" clear>\n                Read more\n              </button>\n            </div>\n          </ion-col>\n          <ion-col col-7 text-end>\n            <p *ngIf="post.post_category_id && post.post_category_id.category" text-wrap>\n              {{post.post_category_id.category}}</p>\n          </ion-col>\n          <ion-col col-2>\n\n            <ion-avatar item-end>\n\n              <img onerror="this.style.display=\'none\'" *ngIf="post.post_category_id && post.post_category_id.category_media"\n                src="{{post.post_category_id.category_media}}">\n            </ion-avatar>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <ion-item-divider color="light" no-padding id="post_date">\n        <ion-row justify-content-end>\n          <div *ngIf="checkIfExists(post.post_id)">\n            <ion-col col-1>\n              <ion-icon ios="ios-done-all" md="md-done-all"></ion-icon>\n            </ion-col>\n            <ion-col col-1 *ngIf="checkIfCorrect(post.post_id)">\n              <ion-icon name="happy"></ion-icon>\n            </ion-col>\n          </div>\n\n          <ion-col text-right>\n            {{post.post_time| date: \'mediumDate\'}}\n          </ion-col>\n        </ion-row>\n      </ion-item-divider>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSettingModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_context__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickSettingModalPage = /** @class */ (function () {
    function QuickSettingModalPage(modal, navCtrl, navParams, viewCtrl) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.all_button_color = "light";
        this.quiz_button_color = "light";
        this.fact_button_color = "light";
        this.poll_button_color = "light";
        this.post_type = 0;
    }
    QuickSettingModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuickSettingModalPage');
        this.post_type = __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].get("post_type");
        this.initializePostType();
    };
    QuickSettingModalPage.prototype.initializePostType = function () {
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
    };
    QuickSettingModalPage.prototype.set_PostType = function (post_type) {
        __WEBPACK_IMPORTED_MODULE_2__providers_context__["a" /* Context */].set("post_type", post_type);
        this.post_type = post_type;
        this.dismiss(true);
    };
    QuickSettingModalPage.prototype.dismiss = function (isUpdate) {
        this.viewCtrl.dismiss({ "post_type": this.post_type, "isUpdate": isUpdate });
    };
    QuickSettingModalPage.prototype.goToFav = function () {
        this.viewCtrl.dismiss({ "goToFav": true });
    };
    QuickSettingModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quick-setting-modal',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/quick-setting-modal/quick-setting-modal.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss(false)"></div>\n  <ion-scroll class="modal_content" scrollY="true">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 offset-10>\n          <button ion-button small color="dark" clear icon-only (click)="dismiss (false)">\n            <ion-icon name="close" right></ion-icon>\n          </button>\n\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col col-3 offset-1>\n          <ion-label>\n            Post Type\n          </ion-label>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{all_button_color}}" round (click)="set_PostType (0)"> All</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{quiz_button_color}}" round (click)="set_PostType (1)">Quiz</button>\n        </ion-col>\n        <ion-col col-4 offset-4>\n          <button ion-button small color="{{poll_button_color}}" round (click)="set_PostType (2)">Poll</button>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button small color="{{fact_button_color}}" round (click)="set_PostType (3)">Fact</button>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start>\n        <ion-col col-4 offset-1>\n          <ion-label>\n            Post View Mode\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center justify-content-center>\n\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="dismiss ()">\n            <ion-icon name="md-list"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="dismiss ()">\n            <ion-icon name="albums"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-3>\n          <button ion-button color="light" round (click)="dismiss ()">\n            <ion-icon name="infinite"></ion-icon>\n          </button>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item style="background: #e8e8e8;">\n            <ion-label>Exclude already viewed</ion-label>\n            <ion-checkbox color="dark" checked="false" (click)="dismiss ()"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-top justify-content-top>\n        <ion-col>\n          <ion-item style="background: #e8e8e8;">\n            <ion-label>Only Favorite Category</ion-label>\n            <ion-checkbox color="dark" checked="false" (click)="dismiss ()"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-col>\n                <button ion-button icon-only color="light" (click)="goToFav ()">\n                  <ion-icon name="heart"></ion-icon>\n                </button>\n      \n              </ion-col>\n        </ion-col>\n      </ion-row>\n     \n    </ion-grid>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/quick-setting-modal/quick-setting-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], QuickSettingModalPage);
    return QuickSettingModalPage;
}());

//# sourceMappingURL=quick-setting-modal.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoriteCategoryPage = /** @class */ (function () {
    function FavoriteCategoryPage(navCtrl, navParams, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.search_mode = false;
        this.favList = new Array();
        this.search_button = "search";
        this.link = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].FAV_API + "/2";
        this.link_category = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].CATEGORY_API + "/match";
        this.data = {};
        this.getFav();
    }
    FavoriteCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoriteCategoryPage');
    };
    FavoriteCategoryPage.prototype.getCategory = function () {
        var _this = this;
        if (this.keyword) {
            this.search_mode = true;
            var link = this.link_category + "?" + "keyword=" + this.keyword;
            this.http.get(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
                .subscribe(function (d) {
                _this.data.response = d["_body"];
                var data_array = JSON.stringify(d.json());
                var favs = JSON.parse(data_array);
                _this.favList = new Array();
                for (var i = 0; i < favs.data.length; i++) {
                    _this.favList.push(favs.data[i]);
                }
                console.log(_this.favList);
            }, function (error) {
                console.log("Oooops!");
            });
        }
    };
    FavoriteCategoryPage.prototype.getFav = function () {
        var _this = this;
        this.http.get(this.link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            var data_array = JSON.stringify(d.json());
            var favs = JSON.parse(data_array);
            for (var i = 0; i < favs.data.length; i++) {
                _this.favList.push(favs.data[i]);
            }
            console.log(_this.favList);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    FavoriteCategoryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FavoriteCategoryPage.prototype.addFavorite = function (category_id, idx) {
        var _this = this;
        var link = this.link + "?category=" + category_id;
        this.http.post(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            var data_array = JSON.stringify(d.json());
            var favs = JSON.parse(data_array);
            console.log(favs);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    FavoriteCategoryPage.prototype.removeFavorite = function (category_id, idx) {
        var _this = this;
        this.favList.splice(idx, 1);
        console.log(this.favList.toString());
        var link = this.link + "/" + category_id;
        this.http.delete(link, __WEBPACK_IMPORTED_MODULE_3__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            var data_array = JSON.stringify(d.json());
            var favs = JSON.parse(data_array);
            console.log(favs);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    FavoriteCategoryPage.prototype.search = function () {
    };
    FavoriteCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/favorite-category/favorite-category.html"*/'<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <ion-scroll class="modal_content" scrollY="true">\n    <ion-grid>\n      <ion-row align-items-center>\n        <ion-col col-10>\n          <ion-item>\n            <ion-label floating>Search Category</ion-label>\n            <ion-input type="text" [(ngModel)]="keyword"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button icon-only color="light" (click)="getCategory()">\n            <ion-icon name="{{search_button}}"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <div *ngIf="!search_mode" id="fav_container" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-center col-4 *ngFor="let fav of favList; let idx = index" id="fav_container_{{idx}}"\n            text-wrap text-center>\n            <ion-card no-padding>\n              <img *ngIf="fav.category.category_media" class="fav_img" onerror="this.style.display=\'none\'" src="{{fav.category.category_media}}">\n              <p id="fav_{{idx}}" no-padding>\n                {{fav.category.category}}\n              </p>\n              <button ion-button small icon-only clear id="fav_icon_{{idx}}" color="dark" (click)="removeFavorite(fav.category.id,idx)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf="search_mode" id="fav_container" no-padding>\n        <ion-row justify-content-center align-items-center no-padding>\n          <ion-col align-self-center col-4 *ngFor="let fav of favList; let idx = index" id="fav_container_{{idx}}"\n            text-wrap text-center>\n            <ion-card no-padding>\n\n             \n              <img *ngIf="fav.category_media" class="fav_img" onerror="this.style.display=\'none\'" src="{{fav.category_media}}">\n              <p id="fav_{{idx}}" no-padding>\n                {{fav.category}}\n              </p>\n              <button ion-button small icon-only clear id="fav_button_{{idx}}" color="danger" (click)="this.color=\'dark\';addFavorite(fav.id,idx)">\n                  <ion-icon id="fav_icon_{{idx}}" name="heart"></ion-icon>\n                </button>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/favorite-category/favorite-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], FavoriteCategoryPage);
    return FavoriteCategoryPage;
}());

//# sourceMappingURL=favorite-category.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(341);
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

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constants_App_Constants__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_session__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(12);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__ = __webpack_require__(203);
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
    function CategoryPage(toastCtrl, http, imageUtil, platform, imagePicker, navCtrl, navParams, modalCtrl) {
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
    }
    CategoryPage.prototype.ionViewDidEnter = function () {
        var t = __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].get("Tag");
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
    };
    CategoryPage.prototype.getImage = function () {
        var _this = this;
        this.imageUtil.getImage().then(function (imageData) {
            _this.isImage = true;
            if (_this.platform.is('ios'))
                _this.image = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* normalizeURL */])(imageData);
            else
                _this.image = "data:image/jpeg;base64," + imageData;
        }, function (error) {
            console.log('ERROR -> ' + JSON.stringify(error));
        });
    };
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
    CategoryPage.prototype.done = function () {
        this.navCtrl.pop();
    };
    CategoryPage.prototype.validate = function () {
        if (this.category_name == null || this.category_name.length < 2) {
            return "Please enter valid category name";
        }
        if (!__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            return "Please select valid category";
        }
        return "success";
    };
    CategoryPage.prototype.upload = function () {
        var _this = this;
        var result = this.validate();
        if (result == 'success') {
            if (!__WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].get("isImageUploading")) {
                __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].set("isImageUploading", true);
                this.imageUtil.uploadImageToFirebase(this.image).then(function (photoURL) {
                    __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].set("isImageUploading", false);
                    __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].set("photoURL", photoURL);
                    _this.image = photoURL;
                    _this.addCategory();
                    console.log(photoURL);
                    var toast = _this.toastCtrl.create({
                        message: 'Image was uploaded successfully',
                        duration: 3000
                    });
                    toast.present();
                });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: result,
                duration: 3000
            });
            toast.present();
        }
    };
    CategoryPage.prototype.createCategory = function () {
        var parentId;
        if (__WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected)
            parentId = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id;
        else
            parentId = __WEBPACK_IMPORTED_MODULE_2__subcategory_subcategory__["a" /* SubcategoryPage */].main_option.id;
        var category_data = {
            "category": this.category_name,
            "parentId": parentId,
            "category_media": this.image
        };
        return category_data;
    };
    CategoryPage.prototype.addCategory = function () {
        var _this = this;
        var link = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].CATEGORY_API;
        var category = this.createCategory();
        this.http.post(link, category, __WEBPACK_IMPORTED_MODULE_7__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            var data_array = JSON.stringify(d.json());
            var data_parsed = JSON.parse(data_array);
            var data_ = data_parsed.data;
            console.log(data_.category_id);
            _this.removeImage(false);
        }, function (error) {
            console.log("Oooops!");
        });
    };
    CategoryPage.prototype.removeImage = function (type) {
        this.isImage = false;
        this.image = null;
        if (type) {
            if (!this.isTagPicked && this.isImageUploaded)
                this.imageUtil.removeImage();
        }
        __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].set("photoURL", null);
        __WEBPACK_IMPORTED_MODULE_8__providers_context__["a" /* Context */].set("Tag", null);
        this.isImageUploaded = false;
        this.media_tag = null;
        this.media_source = null;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.inputComponent.removeImage(false);
    };
    CategoryPage.prototype.onMediaTagChange = function (media_tag) {
        this.media_tag = media_tag;
    };
    CategoryPage.prototype.onMediaSourceChange = function (media_source) {
        this.media_source = media_source;
    };
    CategoryPage.prototype.onMediaChange = function (image) {
        this.image = image;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__["a" /* ImageSelectorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__["a" /* ImageSelectorComponent */])
    ], CategoryPage.prototype, "inputComponent", void 0);
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/'<ion-content padding class="page-category">\n  <ion-card>\n\n    <ion-card-header>\n      Choose Post Category\n      <button class="dp_button" (click)="clear()" ion-button clear end>clear\n\n      </button>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <button ion-button (click)="getSubCategory(0)" color="light" round icon-end full>{{main_category}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_main_selected">\n        <button ion-button (click)="getSubCategory(1)" color="light" round icon-end full>{{sub_category1}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n      <ion-row *ngIf="is_sub_selected">\n        <button ion-button (click)="getSubCategory(2)" color="light" round icon-end full>{{sub_category2}}\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n\n    <ion-card-header>\n      <ion-item>\n        <ion-label floating>Enter new category name</ion-label>\n        <ion-input type="text" [(ngModel)]="category_name"></ion-input>\n      </ion-item>\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-row *ngIf="is_category_image">\n    <div class="container">\n      <img class="post_image" src="{{image}}" />\n      <ion-row class="btn" align-items-center>\n        <ion-col col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="heart"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col offset-7 col-2>\n          <button class="dp_button" margin ion-button icon-only clear>\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-row>\n  <image-selector [(image)]="image" [(isTagPicked)]="isTagPicked" [(mediaId)]="mediaId" [(media_source)]="media_source"\n  [(media_tag)]="media_tag" (mediaTagChange)="onMediaTagChange($event)" (mediaSourceChange)="onMediaSourceChange($event)"\n  (imageChange)="onMediaChange($event)"></image-selector>\n\n  <button ion-button color="light" (click)="addCategory()" round full>Add Category\n    </button>\n\n  <ion-label *ngIf="is_error" class="error_text">\n    {{error_text}}\n  </ion-label>\n  <button ion-button color="light" (click)="done()" round full>Done\n  </button>\n  <!-- <input type="file" (change)="onFileChanged($event)"> -->\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebaseDataProvider__ = __webpack_require__(359);
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
    function FirebaseService(toastCtrl, dataProvider, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.dataProvider = dataProvider;
        this.alertCtrl = alertCtrl;
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
    FirebaseService.prototype.getInfo = function () {
        this.dataProvider.getPath("files2/1543066535346.txt").subscribe(function (data) { return console.log(data); });
    };
    FirebaseService.prototype.addFile = function () {
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
    FirebaseService.prototype.uploadInformation = function (text) {
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
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__firebaseDataProvider__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(398);
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagnamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_context__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagnamePage = /** @class */ (function () {
    function TagnamePage(alertCtrl, toastCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.keyword = this.navParams.get("keyword");
        console.log(this.keyword);
        this.initializeItems();
        this.getTags();
    }
    TagnamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TagnamePage');
    };
    TagnamePage.prototype.initializeItems = function () {
        this.items = [];
    };
    TagnamePage.prototype.longPressed = function (item) {
        this.presentPrompt(item);
        console.log('Long press card ' + item);
    };
    TagnamePage.prototype.updateTag = function (new_tag, id) {
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAGNAME_API + "/" + id;
        return this.http.put(link, new_tag, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders());
    };
    TagnamePage.prototype.presentPrompt = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Done',
                    handler: function (data) {
                        if (data.TagName != item.tag || data.TagMediaUrl != item.mediaUrl || data.MediaSource != item.imageCredits) {
                            var new_tag = {
                                "id": item.id,
                                "mediaUrl": data.TagMediaUrl,
                                "tag": data.TagName,
                                "imageCredits": data.MediaSource
                            };
                            _this.updateTag(new_tag, item.id).subscribe(function (d) {
                                _this.getTags();
                            }, function (error) {
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
    };
    TagnamePage.prototype.getTags = function () {
        var _this = this;
        var link = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].TAG_FIND_API + this.keyword;
        this.http.get(link, __WEBPACK_IMPORTED_MODULE_2__providers_server_util_serverUtil__["a" /* ServerUtil */].getHeaders())
            .subscribe(function (d) {
            _this.data.response = d["_body"];
            console.log(_this.data.response);
            var data_array = JSON.stringify(d.json());
            var tags = JSON.parse(data_array);
            _this.items = tags.data;
            _this.items_init = tags.data;
        }, function (error) {
            console.log("Oooops!");
        });
    };
    TagnamePage.prototype.log = function (item) {
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Tag", item);
        this.navCtrl.pop();
    };
    TagnamePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.items = this.items_init;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    TagnamePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    TagnamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tagname',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/tagname/tagname.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col col-10>\n        <ion-searchbar [(ngModel)]="keyword" (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-col>\n    <ion-col col-2>\n        <button ion-button icon-only (click)="getTags()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col (press)="longPressed(item)" (click)="log(item)" *ngFor="let item of items" col-6>\n   \n          <ion-card no-padding >\n             <ion-card-content  no-padding>\n                 <ion-row align-items-stretch>\n                     <ion-col align-self-stretch>\n                        <img  src={{item.mediaUrl}} style="width:100%;height:100px"/>\n                     </ion-col>\n                    \n                   </ion-row>\n                   <ion-row align-items-stretch>\n                      <ion-col align-self-stretch>\n                          {{ item.tag }}\n                       </ion-col>\n                   </ion-row>\n             </ion-card-content>\n           </ion-card>\n     </ion-col> \n  </ion-row>\n  \n  <!-- <ion-list>\n      <ion-row>\n    <ion-item (click)="log(item)" *ngFor="let item of items">\n      \n             \n    \n    \n    </ion-item>\n  </ion-row>\n  </ion-list> -->\n  <ion-row>\n      <button ion-button (click)="back()" color="light" round full>Back\n        \n      </button>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/tagname/tagname.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TagnamePage);
    return TagnamePage;
}());

//# sourceMappingURL=tagname.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(538);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_basic_detail_basic_detail__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_blog_add_blog__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_post_add_post__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_chat_main_chat_main__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_list_chat_list__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_comment_comment__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_interest_interest__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matchup_matchup__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_notification__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_view_blog_view_blog__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_view_post_view_post__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_matchup_play_matchup_play__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_deeplinks__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_server_util_serverUtil__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_category_category__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_emoji__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_text_util_text_util__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_fcm__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_facebook__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_google_plus__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_storage_util_storage_util__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_sqlite__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_session_util_session_util__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_image_picker__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angularfire2__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularfire2_database__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2_storage__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_firebaseDataProvider__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_crop__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_ImageUtil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_firebase_service__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_post_client_api_post_client_api__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_common_http__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_tagname_client_api_tagname_client_api__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_add_post_tagname_tagname__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ionic_long_press__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_image_selector_image_selector__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_in_app_browser__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_quick_setting_modal_quick_setting_modal__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_favorite_category_favorite_category__ = __webpack_require__(334);
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
                __WEBPACK_IMPORTED_MODULE_26__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_add_post_tagname_tagname__["a" /* TagnamePage */],
                __WEBPACK_IMPORTED_MODULE_52__components_image_selector_image_selector__["a" /* ImageSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pages_quick_setting_modal_quick_setting_modal__["a" /* QuickSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_favorite_category_favorite_category__["a" /* FavoriteCategoryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_51_ionic_long_press__["a" /* LongPressModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_48__angular_common_http__["a" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_27__pages_category_subcategory_subcategory__["a" /* SubcategoryPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_add_post_tagname_tagname__["a" /* TagnamePage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_quick_setting_modal_quick_setting_modal__["a" /* QuickSettingModalPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_favorite_category_favorite_category__["a" /* FavoriteCategoryPage */]
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
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                // { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_47__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_tagname_client_api_tagname_client_api__["a" /* TagnameClientApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
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
        // headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ServerUtil.prototype.getSubCategory = function (parent_id) {
    };
    ServerUtil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ServerUtil);
    return ServerUtil;
}());

//# sourceMappingURL=serverUtil.js.map

/***/ }),

/***/ 55:
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

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_interest_interest__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(338);
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
        this.title = "Quizator";
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/'\n<ion-menu [content]="content">\n  <ion-header style="background: black">\n    <ion-toolbar >\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_util_storage_util__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_session_util_session_util__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_util_serverUtil__ = __webpack_require__(54);
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

/***/ 588:
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

/***/ 589:
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    BASE_URL: "http://localhost:8080/",
    POST_API: "post",
    FAV_API: "favorite",
    CATEGORY_API: "category",
    PARENT_CATEGORY_PARAMS: "?type=main&parent=0",
    TAG_FIND_API: "media/find?media_keyword=",
    TAGNAME_API: "media"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_context__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_post_client_api_post_client_api__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__ = __webpack_require__(203);
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
    function AddPostPage(alertCtrl, postClient, storage, toastCtrl, imageUtil, platform, navCtrl, textUtil) {
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
        this.category = "Select Category";
        this.isImage = false;
        this.isquiz = true;
        this.isImageUploaded = false;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.errors = '';
    }
    AddPostPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    AddPostPage.prototype.draft = function () {
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
    };
    AddPostPage.prototype.validateFields = function () {
        this.errors = '';
        if (this.question == null || this.question.length < 10) {
            this.errors += 'Question field - minimum 10 characters required \r\n ';
            this.is_error = true;
        }
        if (this.search_tag == null || this.search_tag.length < 10) {
            this.errors += 'Search Tag field - minimum 10 characters required \r\n ';
            this.is_error = true;
        }
        if (this.categoryId == null || this.categoryId == 0) {
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
    };
    AddPostPage.prototype.post = function () {
        var _this = this;
        if (this.validateFields()) {
            this.postClient.post(this.isTagPicked, this.isImageUploaded, this.mediaId, this.question, this.search_tag, this.image, this.media_tag, this.media_source, this.post_type, this.categoryId, this.correct_option, this.items, this.description).subscribe(function (d) {
                console.log(_this.isTagPicked);
                console.log(_this.isImageUploaded);
                if (!_this.isTagPicked || _this.isImageUploaded) {
                    _this.data.response = d["_body"];
                    var data_array = JSON.stringify(d.json());
                    var data_parsed = JSON.parse(data_array);
                    var data_ = data_parsed.data;
                    var media_id = data_.media_id;
                    var opts = _this.postClient.getOptions(_this.correct_option, _this.items);
                    console.log(opts);
                    var post = _this.postClient.createPost(_this.question, _this.search_tag, _this.description, _this.postClient.getPostType(_this.post_type), _this.categoryId, 1, opts, media_id);
                    console.log(post);
                    _this.postClient.addPost(post, _this.mediaId, _this.categoryId).subscribe(function (data) {
                        _this.data.response = data["_body"];
                        console.log(_this.data.response);
                        _this.removeImage(false);
                    }, function (error) {
                        console.log("Oooops!");
                        _this.removeImage(false);
                    });
                }
                _this.data.response = d["_body"];
                console.log(_this.data.response);
                _this.removeImage(false);
            }, function (error) {
                switch (error.status) {
                    case 409:
                        _this.errors += 'Duplicate TagName \r\n ';
                        break;
                    default:
                        _this.errors += 'Something Went Wrong \r\n ';
                        break;
                }
                _this.removeImage(false);
            });
        }
        else {
            this.is_error = false;
        }
    };
    AddPostPage.prototype.chooseCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */]);
    };
    AddPostPage.prototype.addOption = function () {
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
    };
    AddPostPage.prototype.trackByFn = function (index, item) {
        return index;
    };
    AddPostPage.prototype.onEnter = function (index) {
        this.addOption();
    };
    AddPostPage.prototype.optionChange = function (it, index) {
        var elem = document.getElementById("option" + index);
        console.log(elem.value + " " + index);
    };
    AddPostPage.prototype.updateOption = function (it, index) {
        console.log(it + " " + index);
        var itemIndex = this.items.findIndex(function (item) { return item.id == it.id; });
        this.items[index] = it;
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
    };
    AddPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPostPage');
    };
    AddPostPage.prototype.ionViewDidEnter = function () {
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
        if (__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].is_sub1_selected) {
            console.log(__WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.id + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].main_option2.category + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id + " " + __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category);
            this.categoryId = __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.id;
            this.category = __WEBPACK_IMPORTED_MODULE_8__category_subcategory_subcategory__["a" /* SubcategoryPage */].sub_option1.category;
        }
    };
    AddPostPage.prototype.removeImage = function (type) {
        this.isImage = false;
        this.image = null;
        if (type) {
            if (!this.isTagPicked && this.isImageUploaded)
                this.imageUtil.removeImage();
        }
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("photoURL", null);
        __WEBPACK_IMPORTED_MODULE_5__providers_context__["a" /* Context */].set("Tag", null);
        this.isImageUploaded = false;
        this.search_tag = null;
        this.media_tag = null;
        this.media_source = null;
        this.question = null;
        this.isTagPicked = false;
        this.isImageURL = false;
        this.inputComponent.removeImage(false);
    };
    AddPostPage.prototype.onMediaTagChange = function (media_tag) {
        this.media_tag = media_tag;
    };
    AddPostPage.prototype.onMediaSourceChange = function (media_source) {
        this.media_source = media_source;
    };
    AddPostPage.prototype.onMediaChange = function (image) {
        this.image = image;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__["a" /* ImageSelectorComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__components_image_selector_image_selector__["a" /* ImageSelectorComponent */])
    ], AddPostPage.prototype, "inputComponent", void 0);
    AddPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-post',template:/*ion-inline-start:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/'<ion-content class="page-add-post">\n  <image-selector [(image)]="image" [(isTagPicked)]="isTagPicked" [(mediaId)]="mediaId" [(media_source)]="media_source" [(media_tag)]="media_tag" (mediaTagChange)="onMediaTagChange($event)" (mediaSourceChange)="onMediaSourceChange($event)" (imageChange)="onMediaChange($event)"></image-selector>\n  \n  <div id="post_detail">\n    <ion-row radio-group [(ngModel)]="post_type">\n\n      <ion-col>\n        <ion-item>\n          <ion-label>Quiz\n          </ion-label>\n          <ion-radio value="quiz" (click)="isquiz=true; post_type=\'quiz\';">\n          </ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Poll<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="poll" (click)="isquiz=false; post_type=\'poll\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Fact<ion-icon name="poll"></ion-icon>\n          </ion-label>\n          <ion-radio value="fact" (click)="isquiz=false; post_type=\'fact\';"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div id="container">\n    <ion-list>\n\n      <ion-item class="rounded" id="question">\n        <ion-textarea rows="1" id="messageInputBox1" maxlength="500" placeholder="Add Question" (input)="change(1)"\n          [(ngModel)]="question" required></ion-textarea>\n      </ion-item>\n      <div *ngIf="post_type!=\'fact\'">\n\n\n        <div *ngFor="let item of items ; let i = index trackBy:trackByFn">\n          <ion-row>\n            <ion-col col-10>\n              <ion-item>\n                  <input type="text" id="option{{i}}" [(ngModel)]="items[i]"/>\n                <!-- <ion-textarea rows="1" id="option{{i}}" value={{item}} (input)="optionChange(this,i)" required></ion-textarea> -->\n              </ion-item>\n            </ion-col>\n           \n            <ion-col col-2>\n              <button ion-button icon-only (click)="deleteOption(item)">\n                <ion-icon name="close"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-item class="rounded" id="option">\n          <ion-textarea rows="1" maxlength="50" id="messageInputBox" placeholder="Add Option" [(ngModel)]="option" (keyup.enter)="addOption()"\n            required></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <button ion-button icon-start full (click)="addOption()">\n            <ion-icon name="md-add"></ion-icon>\n            Add Option\n          </button>\n        </ion-item>\n\n        <ion-row *ngIf="items.length>1&&isquiz" justify-content-center>\n          <ion-col>\n            <ion-select [(ngModel)]="correct_option" multiple="false" placeholder="Choose correct option" style=" max-width: 100% !important;">\n              <ion-option *ngFor="let item of items" value="{{item}}" selected="{{item}}">{{item}}</ion-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n\n        <ion-item class="rounded" id="question">\n          <ion-textarea rows="1" maxlength="500" id="messageInputBox2" placeholder="Add Description" (input)="change(2)"\n            [(ngModel)]="description" required></ion-textarea>\n        </ion-item>\n        \n      </div>\n      <ion-item class="rounded" id="search_tag">\n          <ion-textarea rows="1" maxlength="50" id="messageInputBox3" placeholder="Add Search Tag" (input)="change(3)"\n            [(ngModel)]="search_tag" required></ion-textarea>\n        </ion-item>\n    </ion-list>\n\n\n    <div>\n      {{errors}}\n    </div>\n\n    <ion-row>\n      <button (click)="chooseCategory()" ion-button color="light" full>{{category}}</button>\n    </ion-row>\n    <ion-row justify-content-center>\n      <ion-col>\n        <button ion-button color="dark" round full (click)="cancel()">Cancel</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="dark" round full (click)="submit()">Draft</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="dark" round full (click)="post()">Post</button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/lavpal/My Workspace/quizator-client/src/pages/add-post/add-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_post_client_api_post_client_api__["a" /* PostClientApiProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_ImageUtil__["a" /* ImageUtil */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_text_util_text_util__["a" /* TextUtilProvider */]])
    ], AddPostPage);
    return AddPostPage;
}());

//# sourceMappingURL=add-post.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 711:
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

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 713:
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

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagnameClientApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
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


var TagnameClientApiProvider = /** @class */ (function () {
    function TagnameClientApiProvider(http) {
        this.http = http;
        this.data = {};
        console.log('Hello TagnameClientApiProvider Provider');
    }
    TagnameClientApiProvider.prototype.getTags = function (keyword) {
    };
    TagnameClientApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TagnameClientApiProvider);
    return TagnameClientApiProvider;
}());

//# sourceMappingURL=tagname-client-api.js.map

/***/ })

},[406]);
//# sourceMappingURL=main.js.map