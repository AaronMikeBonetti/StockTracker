import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ticker } from '../../interfaces/ticker.model';
import * as tickerData from '../../../assets/tickers/tickers.json';

@Component({
  selector: 'app-ticker-search',
  templateUrl: './ticker-search.component.html',
  styleUrls: ['./ticker-search.component.scss'],
})
export class TickerSearchComponent implements OnInit {
  @Output() searchValueOutput = new EventEmitter();

  tickersParsed: [Ticker];
  tickerSearchArray: Array<Ticker>;
  searchValue: string;
  textFieldInput: string;

  constructor() {}

  ngOnInit(): void {
    this.textFieldInput = '';
  }

  onKey(e: any): void {
    this.searchValue = e.target.value.toLowerCase();
    this.tickersParsed = JSON.parse(
      JSON.stringify(tickerData).toLowerCase()
    ).default;
    this.tickerSearchArray = [];

    if (
      (e.which <= 90 && e.which >= 48) ||
      (e.which >= 96 && e.which <= 105) ||
      e.which === 8
    ) {
      this.tickersParsed.map((ticker: Ticker) => {
        if (
          ticker.symbol.indexOf(this.searchValue) !== -1 &&
          ticker.symbol.charAt(0) === this.searchValue.charAt(0)
        ) {
          this.tickerSearchArray.push(ticker);
        }
      });
    }
    this.tickerSearchArray = this.tickerSearchArray.splice(0, 10);
  }

  getStock(ticker): void {
    this.tickerSearchArray = [];
    this.searchValueOutput.emit(ticker);
  }
}
