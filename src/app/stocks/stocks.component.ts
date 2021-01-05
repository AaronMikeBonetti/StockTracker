import { StocksUiService } from './../stocks-ui.service';
import { Component, OnInit } from '@angular/core';
import { Ticker } from '../interfaces/ticker.model';
import * as ticker from '../../assets/tickers/tickers.json';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})

export class StocksComponent implements OnInit {
  tickerString: string;
  tickerParsed: [Ticker];

  constructor(
    private uiService: StocksUiService
  ) { }

  ngOnInit(): void {
    this.tickerString = JSON.stringify(ticker).toLowerCase()
    this.tickerParsed = JSON.parse(this.tickerString).default
  // use css to capitalize the name see scss
    this.tickerParsed.map(ticker=>{
      console.log(ticker.symbol.toLocaleUpperCase(), ticker.name)
    })

  }

  onKey(e){
    // document.querySelector(selector).addEventListener('keypress', function() {
    //   if (e.which <= 90 && e.which >= 48 || e.which >= 96 && e.which <= 105) {
    //     alert('keycode ' + e.which + '  triggered this event');
    //     //do whatever
      // }
    // });
  }

}
