import { Component } from '@angular/core';
import { StockmarketService } from '../../shared/stockmarket.service';

@Component({
  selector: 'trending',
  templateUrl: 'app/markets/trending/trending.component.html',
})

export class TrendingComponent {

  trending: Array<any>;
  viewed: Array<any>;

  constructor(private service: StockmarketService) {
    this.getTrendingStocks();
  }

  getTrendingStocks() {
    this.service.getStockTrending().subscribe(r => this.populatestocks(r), err => console.log("getStocksOnMove: ", err));
  }

  populatestocks(data: any) {
    let stocks = data.d.sotm.UpStocks;
    let max = stocks.length - 1;
    let monitor = new Array<number>();

    this.trending = new Array<any>();
    this.viewed = new Array<any>();

    for (let i = 0; i < 100; i++) {
      if (!monitor.includes(i)) {
        this.trending.push(stocks[Math.floor((Math.random() * max) + 1)]);
        monitor.push(i);
        if (this.trending.length >= 5) {
          break;
        }
      }
    }

    for (let i = 0; i < 100; i++) {
      if (!monitor.includes(i)) {
        this.viewed.push(stocks[Math.floor((Math.random() * max) + 1)]);
        monitor.push(i);
        if (this.viewed.length >= 5) {
          break;
        }
      }
    }
  }
}