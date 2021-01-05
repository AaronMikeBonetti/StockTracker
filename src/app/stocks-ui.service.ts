import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticker } from './interfaces/ticker.model'

@Injectable({
  providedIn: 'root'
})
export class StocksUiService {

  // private stocks: Ticker[] = [];

  // private stocksSubject: BehaviorSubject<[Ticker]> = new BehaviorSubject<[Stocks]>(null);
  // stocks$: Observable<[Ticker]> = this.stocksSubject.asObservable();
  // getStocks$: BehaviorSubject<[Ticker]> = new BehaviorSubject<[Stocks]>(null);

  constructor() { }
}
