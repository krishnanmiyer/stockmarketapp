"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-cookie/core');
var LoginService = (function () {
    function LoginService(cookieService) {
        this.cookieService = cookieService;
        this.userLoggedIn = false;
        this.cookieKey = "stockmarketuser";
        this.user = this.getCookie();
        if (this.user != null || this.user != undefined) {
            this.userLoggedIn = true;
        }
    }
    //call this function when login status changes
    LoginService.prototype.changeLoginStatus = function (status, data) {
        this.userLoggedIn = status;
        if (status) {
            this.userData = data;
            this.setCookie();
        }
        else {
            this.removeCookie();
        }
    };
    LoginService.prototype.getCookie = function () {
        return this.cookieService.get(this.cookieKey);
    };
    LoginService.prototype.removeCookie = function () {
        this.cookieService.remove(this.cookieKey);
    };
    LoginService.prototype.setCookie = function () {
        console.log("setting -->", this.userData);
        var date = new Date();
        var expiry = new Date(date.setTime(date.getTime() + 20 * 86400000));
        this.cookieService.put(this.cookieKey, this.userData, { expires: expiry });
        this.user = this.getCookie();
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_2.CookieService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map