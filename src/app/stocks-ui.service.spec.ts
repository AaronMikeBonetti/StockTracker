import { TestBed } from '@angular/core/testing';

import { StocksUiService } from './stocks-ui.service';

describe('StocksUiService', () => {
  let service: StocksUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
