import { Component} from '@angular/core';
import { StockmarketService } from '../shared/stockmarket.service';
import { MarketDataInput, Req } from '../shared/stockmarket.model';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'markets',
  templateUrl: 'app/markets/markets.component.html',
})

export class MarketsComponent { 
  marketsToday: any;
  
  constructor(private service: StockmarketService, private loginService: LoginService, private router: Router ) {
    
    if (!loginService.userLoggedIn) {
      this.router.navigate(['login/markets']);
    }
    
    //this.getMarketData("0DJIA");
  }

  getMarketData(symbol: string) {

  }

  populatestocks(data: any) {

  }
}