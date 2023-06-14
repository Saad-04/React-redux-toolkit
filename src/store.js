import { configureStore } from '@reduxjs/toolkit';
import acountReducer from './slice/accountSlice'
import bonusReducer from './slice/bonusSlice'
import { incrementByReward } from './reducers/action';

export const store = configureStore({
  reducer:{
    acount:acountReducer,
    bonus:bonusReducer,
    reward:incrementByReward
  }
})