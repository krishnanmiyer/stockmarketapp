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
var stockmarket_service_1 = require('../shared/stockmarket.service');
var login_service_1 = require('../shared/login.service');
var router_1 = require('@angular/router');
var MarketsComponent = (function () {
    function MarketsComponent(service, loginService, router) {
        this.service = service;
        this.loginService = loginService;
        this.router = router;
        if (!loginService.userLoggedIn) {
            this.router.navigate(['login/markets']);
        }
        //this.getMarketData("0DJIA");
    }
    MarketsComponent.prototype.getMarketData = function (symbol) {
    };
    MarketsComponent.prototype.populatestocks = function (data) {
    };
    MarketsComponent = __decorate([
        core_1.Component({
            selector: 'markets',
            templateUrl: 'app/markets/markets.component.html',
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService, login_service_1.LoginService, router_1.Router])
    ], MarketsComponent);
    return MarketsComponent;
}());
exports.MarketsComponent = MarketsComponent;
//# sourceMappingURL=markets.component.js.map