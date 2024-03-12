import HoldingProvider from './HoldingProvider';
import HoldingViewModel from './HoldingViewModel';
import {AsyncStorageHandler, NetworkRequestHandler} from '../../Handler';
import {HoldingList, PNLState} from '../../types';

class HoldingProviderImpl implements HoldingProvider {
  private viewModel: HoldingViewModel;
  constructor(viewModel: HoldingViewModel) {
    this.viewModel = viewModel;
    this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      const asyncStorageValue =
        await new AsyncStorageHandler().fetchHoldingsList();
      const networkFetchValue =
        await new NetworkRequestHandler().networkFetchHoldingsList();
      if (networkFetchValue?.length > 0) {
        this.viewModel.updateHoldingList(networkFetchValue);
        new AsyncStorageHandler().updayteHoldingsList(networkFetchValue);
        this.processProfitAndLoss(networkFetchValue);
      } else {
        this.viewModel.updateHoldingList(asyncStorageValue);
        this.processProfitAndLoss(asyncStorageValue);
      }
    } catch (error) {
      console.log('Error occured inside HoldingProviderImpl: loadData', error);
    }
  }

  processProfitAndLoss(finalValue: HoldingList): void {
    try {
      let outputValue: HoldingList = [];
      let currentValueTotal = 0;
      let totalInvestment = 0;
      let todayProfitAndLoss = 0;
      let totalProfitAndLoss = 0;
      for (let i = 0; i < finalValue.length; i++) {
        const {quantity, ltp, close, avgPrice} = finalValue[i];
        const currentValue = ltp * quantity;
        todayProfitAndLoss += (close - ltp) * quantity;
        currentValueTotal += currentValue;
        const investmentValue = avgPrice * quantity;
        totalInvestment += investmentValue;
        const profitAndLoss = currentValue - investmentValue;
        totalProfitAndLoss += profitAndLoss;
        outputValue.push({
          ...finalValue[i],
          currentValue,
          investmentValue,
          profitAndLoss,
        });
      }
      let pNLState: PNLState = {
        currentValueTotal,
        totalInvestment,
        todayProfitAndLoss,
        totalProfitAndLoss,
      };
      this.viewModel.updatePNLState(pNLState);
      this.viewModel.updateHoldingList(outputValue);
      new AsyncStorageHandler().updayteHoldingsList(outputValue);
    } catch (error) {
      console.log(
        'Error occured inside HoldingProviderImpl: processProfitAndLoss',
        error,
      );
    }
  }
}

export default HoldingProviderImpl;
