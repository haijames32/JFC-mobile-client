import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
   user: [],
   isLoading: false,
   isError: false
}


const userSlice = createSlice({
   name: 'user',
   initialState: {
      value: 0
   },
   reducers: {
      increment: (state) => {
         state.value += 1
      },
      decrement: (state) => {
         state.value -= 1
      },
   },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = userSlice.actions
export default userSlice.reducer