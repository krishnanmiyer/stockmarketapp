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
var stockmarket_service_1 = require('../../shared/stockmarket.service');
var StocksOnMoveComponent = (function () {
    function StocksOnMoveComponent(service) {
        this.service = service;
        this.getStocksOnMove();
    }
    StocksOnMoveComponent.prototype.getStocksOnMove = function () {
        var _this = this;
        this.service.getStocksOnMove().subscribe(function (r) { return _this.populatestocks(r); }, function (err) { return console.log("getStocksOnMove: ", err); });
    };
    StocksOnMoveComponent.prototype.populatestocks = function (data) {
        this.upstocks = data.d.sotm.UpStocks;
        this.downstocks = data.d.sotm.DownStocks;
    };
    StocksOnMoveComponent = __decorate([
        core_1.Component({
            selector: 'stocksonmove',
            templateUrl: 'app/markets/stocksonmove/stocksonmove.component.html'
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], StocksOnMoveComponent);
    return StocksOnMoveComponent;
}());
exports.StocksOnMoveComponent = StocksOnMoveComponent;
//# sourceMappingURL=stocksonmove.component.js.map