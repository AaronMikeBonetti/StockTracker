import { StocksUiService } from './../stocks-ui.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticker } from '../interfaces/ticker.model';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})

export class StocksComponent implements OnInit {

  // getTickers$: Observable<[Tickers]> = this.uiService.getStocks$.asObservable();

  constructor(
    private uiService: StocksUiService
  ) { }

  ngOnInit(): void {
  }

}
