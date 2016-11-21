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
//ng modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
//services
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
//app modules
var app_routing_module_1 = require('./app-routing.module');
var home_module_1 = require('./home/home.module');
var quote_module_1 = require('./quote/quote.module');
var markets_module_1 = require('./markets/markets.module');
var registration_module_1 = require('./user/registration/registration.module');
var login_module_1 = require('./user/login/login.module');
//app components
var app_component_1 = require('./app.component');
var login_service_1 = require('./shared/login.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                home_module_1.HomeModule,
                quote_module_1.QuoteModule,
                markets_module_1.MarketsModule,
                registration_module_1.RegistrationModule,
                login_module_1.LoginModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: common_1.APP_BASE_HREF, useValue: '/' }, cookies_service_1.CookieService, login_service_1.LoginService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map