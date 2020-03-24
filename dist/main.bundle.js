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

module.exports = "<h3>\n  WPS\n  <small class=\"text-muted\">User List</small>\n</h3>\n\n<table class=\"table table-hover\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Examinee Name</th>\n      <th scope=\"col\">Examinee Id</th>\n      <th scope=\"col\">Age</th>\n      <th scope=\"col\">Test Name</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of userList\">\n      <th scope=\"row\">{{user.id}}</th>\n      <td>{{user.examineeName}}</td>\n      <td>{{user.examineeId}}</td>\n      <td>{{user.age}}</td>\n      <td>{{user.testName}}</td>\n      <td><i class=\"fa fa-download\" aria-hidden=\"true\" (click)=\"getCognitiveTestResult(user)\"></i></td>\n    </tr>\n\n  </tbody>\n</table>"

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
    function AppComponent(_apiService) {
        this._apiService = _apiService;
        this.userList = [];
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCognitiveTestUsers();
        this.userList = [
            {
                'id': 33,
                'examineeName': 'Uday-111',
                'examineeId': 'Uday-111',
                'testName': 'CognitiveTestPOC',
                'age': 4
            },
            {
                'id': 34,
                'examineeName': '222',
                'examineeId': '222',
                'testName': 'CognitiveTestPOC',
                'age': 3
            },
            {
                'id': 35,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 36,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 37,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 38,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 39,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 40,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 41,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 42,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 43,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 44,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 45,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 46,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 47,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 48,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 49,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 50,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 51,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 52,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 53,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 54,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 55,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 56,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 57,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 58,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 59,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 60,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 61,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 62,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 63,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 64,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 65,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 66,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 67,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 68,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 69,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 70,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 71,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 72,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 73,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 74,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 75,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 76,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 77,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 78,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 79,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 80,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 81,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 82,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 83,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 84,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 85,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 86,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 87,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 88,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 89,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 90,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 91,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 92,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 93,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 94,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 95,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 96,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 97,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 98,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 99,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 100,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 101,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            },
            {
                'id': 102,
                'examineeName': 'alok111',
                'examineeId': 'alok111',
                'testName': 'CognitiveTestPOC',
                'age': 6
            }
        ];
    };
    AppComponent.prototype.getCognitiveTestUsers = function () {
        this._apiService.getCognitiveTestUsers()
            .subscribe(function (data) {
            var resp = data['body'];
            console.log(resp);
            if (resp && resp.data && resp.data.denormDatabases) {
            }
        }, function (error) {
            console.log('error::', error);
        });
    };
    AppComponent.prototype.getCognitiveTestResult = function (user) {
        console.log('user::', user);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_backend_api_service__ = __webpack_require__("./src/app/services/backend-api.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_backend_api_service__["a" /* BackendApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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
        this.baseUrl = 'http://13.235.99.192:8081';
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
    BackendApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
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