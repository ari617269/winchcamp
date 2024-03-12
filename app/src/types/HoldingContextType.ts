import HoldingList from './HoldingList';
import PNLState from './PNLState';
import updateHoldingState from './updateHoldingState';
import updatePNLState from './updatePNLState';

interface HoldingContextType {
  holdingList: HoldingList;
  pNLState: PNLState;
  setHoldingList: updateHoldingState;
  setPNLState: updatePNLState;
}

export default HoldingContextType;
