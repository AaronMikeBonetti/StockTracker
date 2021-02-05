import { StocksUiService } from '../../stocks-ui.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ticker } from '../../interfaces/ticker.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})

export class StocksComponent implements OnInit {

  stock: any;
  showSpinner: boolean;

  constructor(
    private uiService: StocksUiService
  ) { }

  ngOnInit(): void {}

  getStock(ticker: Ticker): any{
    this.showSpinner = true;
    this.uiService.stockHttpGet(ticker).subscribe(
      response => this.stock = response,
      error => this.handleError(error),
      () => this.finishRequest(this.stock)
    );
  }
  finishRequest(response): void {
    this.showSpinner = false;
    this.stock = response[0];
  }
  handleError(error: any): void {
    this.showSpinner = false;
    console.log(error);
  }

}
