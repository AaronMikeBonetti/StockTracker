import { StocksUiService } from '../../stocks-ui.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ticker } from '../../interfaces/ticker.model';
import * as ticker from '../../../assets/tickers/tickers.json';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})

export class StocksComponent implements OnInit {
  tickerString: string;
  tickerParsed: [Ticker];

  searchValue;

  constructor(
    private uiService: StocksUiService
  ) { }

  ngOnInit(): void {
    
  }

  getSearchValue(e){
    this.searchValue = e
  }


}
