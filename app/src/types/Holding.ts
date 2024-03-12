interface Holding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
  currentValue?: number;
  investmentValue?: number;
  profitAndLoss?: number;
}

export default Holding;
