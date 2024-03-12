import axios from 'axios';
import {GET_RUN_MOCKY_IO_V3_HOLDINGS, HoldingList} from '../types';

class NetworkRequestHandler {
  async networkFetchHoldingsList(): Promise<HoldingList> {
    try {
      const value = await axios.get(GET_RUN_MOCKY_IO_V3_HOLDINGS);
      if (!value) {
        return [];
      }
      const response = value as
        | {
            data?: {
              userHolding?: HoldingList;
            };
          }
        | undefined;
      if (!response) {
        return [];
      }
      return response?.data?.userHolding ?? [];
    } catch (error) {
      console.log(
        'Error occured in NetworkRequestHandler::networkFetchHoldingsList',
        error,
      );
      return [];
    }
  }
}

export default NetworkRequestHandler;
