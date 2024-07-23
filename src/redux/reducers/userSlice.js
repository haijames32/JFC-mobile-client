import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {
   user: [],
   isLoading: false,
   isError: false
}


const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder

   }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default userSlice.reducer