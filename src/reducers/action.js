import { createAction, createReducer } from "@reduxjs/toolkit";
export const increment = createAction('reward/increment')
const initialState = {
    rewardPoints: 1,
  }
export const incrementByReward =createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state,action)=>{
        state.rewardPoints += action.payload
    })
}
)