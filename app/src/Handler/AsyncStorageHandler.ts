import AsyncStorage from '@react-native-async-storage/async-storage';
import {HOLDING_ASYNC_STORAGE_KEY, HoldingList} from '../types';

class AsyncStorageHandler {
  async fetchHoldingsList(): Promise<HoldingList> {
    try {
      const value = await AsyncStorage.getItem(HOLDING_ASYNC_STORAGE_KEY);
      if (!value) {
        return [];
      }
      return JSON.parse(value) as unknown as HoldingList;
    } catch (error) {
      console.log(
        'Error occured in AsyncStorageHandler::fetchHoldingsList',
        error,
      );
      return [];
    }
  }

  async updayteHoldingsList(value: HoldingList): Promise<void> {
    try {
      await AsyncStorage.setItem(
        HOLDING_ASYNC_STORAGE_KEY,
        JSON.stringify(value),
      );
    } catch (error) {
      console.log(
        'Error occured in AsyncStorageHandler::updayteHoldingsList',
        error,
      );
    }
  }
}

export default AsyncStorageHandler;
