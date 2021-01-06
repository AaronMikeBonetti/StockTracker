import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { TickerSearchComponent } from './components/ticker-search/ticker-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    TickerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
