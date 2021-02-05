import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ticker } from './interfaces/ticker.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StocksUiService {


  private stocksSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  stocks$: Observable<any> = this.stocksSubject.asObservable();
  getStocks$: BehaviorSubject<any> = new BehaviorSubject<[any]>(null);

  constructor(private httpClient: HttpClient) { }

  stockHttpGet(ticker: Ticker): Observable<any> {
    const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=2e3ca4da346f92ef2cdef12b48350107`;
    return this.httpClient.get<any>(url);
  }
}
