webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-download{\n    cursor: pointer;\n    color: #1D9D73;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h3>\n  <img title=\"\" alt=\"WPS\" src=\"https://content.wpspublish.com/images/thumbs/0008753.png\" class=\"img-responsive img-width\" style=\"margin-top: 15px;\"> -->\n  <!-- <small class=\"text-muted\">User List</small> -->\n<!-- </h3> -->\n<!-- <table class=\"table table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Examinee Name</th>\n      <th scope=\"col\">Examinee Id</th>\n      <th scope=\"col\">Age</th>\n      <th scope=\"col\">Test Name</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of userList\">\n      <th scope=\"row\">{{user.id}}</th>\n      <td>{{user.examineeName}}</td>\n      <td>{{user.examineeId}}</td>\n      <td>{{user.age}}</td>\n      <td>{{user.testName}}</td>\n      <td><i class=\"fa fa-download\" aria-hidden=\"true\" (click)=\"getCognitiveTestResult(user)\"></i></td>\n    </tr>\n\n  </tbody>\n</table> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__ = __webpack_require__("./src/app/services/backend-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    // public userList: any[] = [];
    // title = 'app';
    function AppComponent(_apiService) {
        this._apiService = _apiService;
    }
    AppComponent.prototype.ngOnInit = function () {
        //   this.getCognitiveTestUsers();
        //   this.userList = [
        //     {
        //       'id': 33,
        //       'examineeName': 'Uday-111',
        //       'examineeId': 'Uday-111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 4
        //     },
        //     {
        //       'id': 34,
        //       'examineeName': '222',
        //       'examineeId': '222',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 3
        //     },
        //     {
        //       'id': 35,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 36,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 37,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 38,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 39,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 40,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 41,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 42,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 43,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 44,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 45,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 46,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 47,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 48,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 49,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 50,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 51,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 52,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 53,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 54,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 55,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 56,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 57,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 58,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 59,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 60,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 61,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 62,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 63,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 64,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 65,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 66,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 67,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 68,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 69,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 70,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 71,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 72,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 73,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 74,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 75,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 76,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 77,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 78,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 79,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 80,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 81,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 82,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 83,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 84,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 85,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 86,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 87,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 88,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 89,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 90,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 91,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 92,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 93,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 94,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 95,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 96,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 97,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 98,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 99,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 100,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 101,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     },
        //     {
        //       'id': 102,
        //       'examineeName': 'alok111',
        //       'examineeId': 'alok111',
        //       'testName': 'CognitiveTestPOC',
        //       'age': 6
        //     }
        //   ];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__["a" /* BackendApiService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_backend_api_service__ = __webpack_require__("./src/app/services/backend-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__ = __webpack_require__("./src/app/listing/listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'listing', component: __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__["a" /* ListingComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__["a" /* ListingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_backend_api_service__["a" /* BackendApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/***/ (function(module, exports) {

module.exports = ".fa-download{\n  cursor: pointer;\n  color: #00898F;\n}\n\n.searchInput{\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n  width: 400px;\n  height: 40px;\n  outline-color: #009596;\n  padding: 0 15px;\n  margin-bottom: 15px;\n}\n\n.logo{\n  border-bottom: 2px solid #1D9D73;\n    padding: 1em 0;\n}\n\n.logout:focus{\n  outline: 0;\n}\n\n.logoutT{\n  font-family: benton-regular,sans-serif;\n  font-size: 18px;\n  color: #4b5259;\n  line-height: 1.65;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.userImg {\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  background: gainsboro;\n  text-align: center;\n  font-size: 3em;\n  color: #fff;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.fa-user:before{\n    position: relative;\n    top: 8px;\n}\n\n.arrowIcon {\n  font-size: 10px;\n  cursor: pointer;\n}\n\n.titleT{\n  cursor: pointer;\n}\n\n.spinnerLoad {\n  /* position: fixed;\n  top: 0;\n  left: 0;\n  background: #8080806b;\n  width: 100%;\n  height: 100%; */\n}\n\n.spinnerLoad .spinner-grow {\n  /* position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #343a40; */\n}\n\n.listingAll tbody.shadow td, tbody.shadow th {\n  width:100px;\n  word-break: break-all;\n}\n"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"spinnerLoad\" *ngIf=\"spinnerLoad\">\n  <div class=\"spinner-grow\"></div>\n</div> -->\n<div class=\"container\">\n<div class=\" col-12 p-0 listingAll\">\n<div class=\"logo col-12\">\n  <img title=\"\" alt=\"WPS\" src=\"https://content.wpspublish.com/images/thumbs/0008753.png\" class=\"img-responsive img-width\">\n  <!-- <small class=\"text-muted\">User List</small> -->\n  <div class=\"logout float-right\" routerLink=\"\">\n    <span class=\"logoutT\">Log Out</span>\n    <i class=\"fa fa-user userImg\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n\n<div class=\"listSearch col-12 p-0 my-2\">\n    <h2 class=\"text-center my-3 mt-0\">Cognitive Test Users</h2>\n    <input type=\"text\" name=\"search\" class=\"searchInput\" placeholder=\"Examinee Name...\" #sL (keyup)=\"searchList(sL.value)\">\n</div>\n\n <table class=\"table table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">\n        <span class=\"titleT\" (click)=\"reverse()\">Examinee Name</span>\n         <i class=\"fa fa-arrow-up arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescExam(1)\"></i>\n         <i class=\"fa fa-arrow-down arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescExam(0)\"></i>\n        </th>\n      <th scope=\"col\">\n        <span class=\"titleT\" (click)=\"reverse()\">Examinee Id</span>\n        <i class=\"fa fa-arrow-up arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescExam(1)\"></i>\n        <i class=\"fa fa-arrow-down arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescExam(0)\"></i>\n      </th>\n      <th scope=\"col\">\n        <span class=\"titleT\" (click)=\"reverse()\">Age</span>\n        <i class=\"fa fa-arrow-up arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescAge(1)\"></i>\n        <i class=\"fa fa-arrow-down arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescAge(0)\"></i>\n      </th>\n      <th scope=\"col\">\n        <span class=\"titleT\" (click)=\"reverse()\">Test Name</span>\n        <i class=\"fa fa-arrow-up arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescTest(1)\"></i>\n        <i class=\"fa fa-arrow-down arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescTest(0)\"></i>\n      </th>\n      <th scope=\"col\">\n        <span  class=\"titleT\" (click)=\"reverse()\">Date</span>\n        <i class=\"fa fa-arrow-up arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescDate(1)\"></i>\n        <i class=\"fa fa-arrow-down arrowIcon\" aria-hidden=\"true\" (click)=\"ascdescDate(0)\"></i>\n      </th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody class=\"shadow\" [hidden]=\"spinnerLoad\">\n    <tr *ngFor=\"let user of userList\">\n      <th scope=\"row\">{{user.id}}</th>\n      <td>{{user.examineeName}}</td>\n      <td>{{user.examineeId}}</td>\n      <td>{{user.age}}</td>\n      <td>{{user.testName}}</td>\n      <td>{{user.date}}</td>\n      <td>\n        <i class=\"fa fa-download\" aria-hidden=\"true\" (click)=\"getCognitiveTestResult(user)\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"download test results!\"></i>\n      </td>\n    </tr>\n    <tr *ngIf=\"userList&& userList.length == 0\">\n      <td class=\"text-center\" colspan=\"7\">No data found</td>\n    </tr>\n  </tbody>\n  <tbody class=\"shadow\" *ngIf=\"spinnerLoad\">\n    <tr>\n      <td class=\"spinnerLoad text-center\" colspan=\"7\">\n        <div class=\"spinner-border text-dark\"></div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__ = __webpack_require__("./src/app/services/backend-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingComponent = /** @class */ (function () {
    function ListingComponent(_apiService, _route, toastr) {
        this._apiService = _apiService;
        this._route = _route;
        this.toastr = toastr;
        this.userList = [];
        this.userListCopy = [];
        this.spinnerLoad = false;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var lock = localStorage.getItem("Login");
        if (lock) {
            this.getCognitiveTestUsers();
        }
        else {
            this._route.navigate(['']);
        }
    };
    ListingComponent.prototype.searchList = function (data) {
        if (data && data.length > 0) {
            this.userList = this.userListCopy.filter(function (x) {
                return x.examineeName.toLowerCase().indexOf(data.toLowerCase()) >= 0;
            });
        }
        else {
            this.userList = this.userListCopy;
        }
    };
    ListingComponent.prototype.reverse = function () {
        this.userList.reverse();
    };
    ListingComponent.prototype.ascdescExam = function (val) {
        if (val == 1) {
            this.userList.sort(function (a, b) { return a.examineeName.localeCompare(b.examineeName); });
        }
        else {
            this.userList.sort(function (a, b) { return b.examineeName.localeCompare(a.examineeName); });
        }
    };
    ListingComponent.prototype.ascdescAge = function (val) {
        if (val == 1) {
            this.userList.sort(function (a, b) { return a.age.toString().localeCompare(b.age.toString()); });
        }
        else {
            this.userList.sort(function (a, b) { return b.age.toString().localeCompare(a.age.toString()); });
        }
    };
    ListingComponent.prototype.ascdescTest = function (val) {
        if (val == 1) {
            this.userList.sort(function (a, b) { return a.testName.localeCompare(b.testName); });
        }
        else {
            this.userList.sort(function (a, b) { return b.testName.localeCompare(a.testName); });
        }
    };
    ListingComponent.prototype.ascdescDate = function (val) {
        if (val == 1) {
            this.userList.sort(function (a, b) { return a.date.localeCompare(b.date); });
        }
        else {
            this.userList.sort(function (a, b) { return b.date.localeCompare(a.date); });
        }
    };
    ListingComponent.prototype.getCognitiveTestUsers = function () {
        var _this = this;
        this.spinnerLoad = true;
        this._apiService.getCognitiveTestUsers()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.spinnerLoad = false;
            }, 1000);
            var resp = data['body'];
            // console.log(resp);
            if (resp && resp.Users && resp.Users.length > 0) {
                _this.userList = _this.userList.concat(resp.Users);
                _this.userListCopy = _this.userListCopy.concat(resp.Users);
            }
        }, function (error) {
            _this.spinnerLoad = false;
            // console.log('error::', error);
            _this.toastr.error('no data');
        });
    };
    ListingComponent.prototype.getCognitiveTestResult = function (user) {
        var _this = this;
        console.log('user::', user);
        var list = {
            "examineeId": user.examineeId,
            "testName": user.testName
        };
        this._apiService.getCognitiveTestResult(list)
            .subscribe(function (data) {
            if (data && data['body']) {
                var resp = data['body'];
                var a = document.createElement('a');
                a.href = 'data:attachment/csv;charset=utf-8,' + encodeURI(resp);
                a.download = 'CognitiveTestReport.csv';
                a.click();
            }
            else if (data['body'] == '') {
                _this.toastr.error('no data!');
            }
            else {
                console.log('no data', data);
            }
        }, function (error) {
            console.log('error::', error.error.text);
            _this.toastr.error('no data!');
        });
    };
    ListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listing',
            template: __webpack_require__("./src/app/listing/listing.component.html"),
            styles: [__webpack_require__("./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__["a" /* BackendApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".loginT {\n  max-width: 600px;\n  margin: 5em auto;\n  -webkit-box-shadow: 0 1px 10px 0 rgba(0,0,0,.05);\n  box-shadow: 0 1px 10px 0 rgba(0,0,0,.05);\n  border-radius: 3px;\n  height: 100%;\n  background-color: #fff;\n}\n.loginT h2{\n  background-color: #009596;\n    border-radius: 3px 3px 0 0;\n    padding: 20px 30px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    margin: 0;\n}\n.forms{\n  padding: 50px 65px;\n}\n.forms .labels{\n  font-family: benton-regular,sans-serif;\n  font-size: 16px;\n  color: #4b5259;\n  line-height: 1.65;\n  margin-bottom: 5px;\n}\n.forms .inputs{\n  background-color: #fff;\n    border: 1px solid #e5e5e5;\n    border-radius: 3px;\n    width: 100%;\n    height: 50px;\n    outline-color: #009596;\n    padding: 0 15px;\n    margin-bottom: 15px;\n}\n.btnSubmit{\n  color: #fff;\n    font-size: 16px;\n    text-transform: uppercase;\n    border-radius: 3px;\n    background-color: #009596;\n    border: none;\n    -webkit-transition: all .25s ease;\n    transition: all .25s ease;\n    height: 50px;\n    width: 100%;\n    margin-top: 14px;\n    font-family: benton-medium,sans-serif;\n    cursor: pointer;\n}\n.btnSubmit:hover{\n  color: #fff;\n  background-color: #006263;\n}\n.btn:disabled {\n  cursor: not-allowed;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logoLogin shadow col-12 p-2\">\n  <img title=\"\" alt=\"WPS\" width='110px' src=\"https://content.wpspublish.com/images/thumbs/0008753.png\" class=\"img-responsive img-width\">\n</div>\n<div class=\"loginT\">\n  <!-- <img title=\"\" alt=\"WPS\" src=\"https://content.wpspublish.com/images/thumbs/0008753.png\" class=\"img-responsive img-width\"> -->\n  <h2>Login</h2>\n  <div class=\"col-12 forms\">\n    <label class=\"labels\">UserName:</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"userName\" class=\"inputs\">\n    <label class=\"labels\">Password:</label>\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"inputs\">\n    <h5 class=\"text-danger text-center\" *ngIf=\"errMsg\">{{errMsg}}</h5>\n    <button type=\"submit\" class=\"btn btnSubmit\" [disabled]='!(userName && password)' (click)=\"login()\">Submit</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, toastr) {
        this._route = _route;
        this.toastr = toastr;
        this.list = {
            userName: 'Moback',
            password: 'Moback123'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.login = function () {
        this.errMsg = false;
        if (this.userName !== this.list.userName) {
            // this.errMsg = 'incorrect userName!';
            this.toastr.error('incorrect userName!');
        }
        else if (this.password !== this.list.password) {
            // this.errMsg = 'incorrect password';
            this.toastr.error('incorrect password!');
        }
        else {
            this._route.navigate(['./listing']);
            localStorage.setItem("Login", 'true');
            this.toastr.success('Login Successfully!');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/backend-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackendApiService = /** @class */ (function () {
    function BackendApiService(http) {
        this.http = http;
        this.baseUrl = 'https://cors-anywhere.herokuapp.com/http://13.235.99.192:8081';
    }
    BackendApiService.prototype.getCognitiveTestUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'application-key': '0847eb02-7fd8-4e69-bda0-db7e3a454b1b' });
        var options = {
            headers: headers,
        };
        var url = this.baseUrl + '/getCognitiveTestUsers';
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('GET', url, '', options);
        return this.http.request(req);
    };
    BackendApiService.prototype.getCognitiveTestResult = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'application-key': '0847eb02-7fd8-4e69-bda0-db7e3a454b1b' });
        var options = {
            headers: headers,
            responseType: 'text'
        };
        var url = this.baseUrl + '/getCognitiveTestResult';
        var req = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpRequest */]('POST', url, data, options);
        return this.http.request(req);
    };
    BackendApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BackendApiService);
    return BackendApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map