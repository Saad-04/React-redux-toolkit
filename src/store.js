import { configureStore } from '@reduxjs/toolkit';
import acountReducer from './slice/accountSlice'
import bonusReducer from './slice/bonusSlice'
import { incrementByReward } from './reducers/action';
import { adminApi } from './api/adminSlice';

export const store = configureStore({
  reducer:{
    acount:acountReducer,
    bonus:bonusReducer,
    reward:incrementByReward,
    [adminApi.reducerPath]:adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})