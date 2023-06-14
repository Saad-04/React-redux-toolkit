import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 1,
}
const incrementByAmount = createAction("acount/incrementByAmount")
export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    incrementByBonus: (state) => {
      state.points += 1
    }
  },
  extraReducers:(builder)=>{//here we add extra reducer to increase bonus points of amountbypoint reducer playload has greater than 100 value 
    builder.addCase(incrementByAmount,(state,action)=>{
      if(action.payload >=1000){
        state.points +=1
      }
      else return;
    })
  }
})

// Action creators are generated for each case reducer function
export const { incrementByBonus } = bonusSlice.actions

export default bonusSlice.reducer