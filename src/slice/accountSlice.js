import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  amount: 1,
}
// action creater get user data from api 
export const getUserAcount = createAsyncThunk('acount/getUser', async (userId, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/account/${userId}`);
    return data.amount;
  } catch (error) {
    return error.message;
  }
});

export const accountSlice = createSlice({

  name: 'acount',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAcount.fulfilled, (state, action) => {
      state.amount = action.payload;//here we change the acount amoutn previous value to api-amoutn value  
    state.pending = false}).
    addCase(getUserAcount.pending, (state, action) => {
    state.pending = true}).
    addCase(getUserAcount.rejected, (state, action) => {
      state.error = action.payload
      state.pending = false
  })
  }
})
// Action creators are generated for each case reducer function
export const {increment,decrement,incrementByAmount} = accountSlice.actions

export default accountSlice.reducer