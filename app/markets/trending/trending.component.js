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
var TrendingComponent = (function () {
    function TrendingComponent(service) {
        this.service = service;
        this.getTrendingStocks();
    }
    TrendingComponent.prototype.getTrendingStocks = function () {
        var _this = this;
        this.service.getStockTrending().subscribe(function (r) { return _this.populatestocks(r); }, function (err) { return console.log("getStocksOnMove: ", err); });
    };
    TrendingComponent.prototype.populatestocks = function (data) {
        var stocks = data.d.sotm.UpStocks;
        var max = stocks.length - 1;
        var monitor = new Array();
        this.trending = new Array();
        this.viewed = new Array();
        for (var i = 0; i < 100; i++) {
            if (!monitor.includes(i)) {
                this.trending.push(stocks[Math.floor((Math.random() * max) + 1)]);
                monitor.push(i);
                if (this.trending.length >= 5) {
                    break;
                }
            }
        }
        for (var i = 0; i < 100; i++) {
            if (!monitor.includes(i)) {
                this.viewed.push(stocks[Math.floor((Math.random() * max) + 1)]);
                monitor.push(i);
                if (this.viewed.length >= 5) {
                    break;
                }
            }
        }
    };
    TrendingComponent = __decorate([
        core_1.Component({
            selector: 'trending',
            templateUrl: 'app/markets/trending/trending.component.html',
        }), 
        __metadata('design:paramtypes', [stockmarket_service_1.StockmarketService])
    ], TrendingComponent);
    return TrendingComponent;
}());
exports.TrendingComponent = TrendingComponent;
//# sourceMappingURL=trending.component.js.map