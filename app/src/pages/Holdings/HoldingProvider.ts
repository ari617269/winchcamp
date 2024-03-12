import {HoldingList} from '../../types';

interface HoldingProvider {
  loadData(): Promise<void>;
  processProfitAndLoss(value: HoldingList): void;
}

export default HoldingProvider;
