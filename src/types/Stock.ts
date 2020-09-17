export type StockFunction =
  | "TIME_SERIES_INTRADAY"
  | "TIME_SERIES_DAILY"
  | "TIME_SERIES_WEEKLY"
  | "TIME_SERIES_MONTHLY";

export interface StockFilter {
  symbol: string;
  function: StockFunction;
  interval?: "1min" | "5min" | "15min" | "30min" | "60min";
}

export interface StockFunctionOption {
  label: string;
  function: StockFunction;
}

export interface StockTick {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface StockTicks {
  [key: string]: StockTick;
}
