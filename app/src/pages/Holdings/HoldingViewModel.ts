import {HoldingList, PNLState} from '../../types';

interface HoldingViewModel {
  updateHoldingList(holdingList: HoldingList): void;
  updatePNLState(value: PNLState): void;
}

export default HoldingViewModel;
