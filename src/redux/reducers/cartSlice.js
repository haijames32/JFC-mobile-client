import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {},
   extraReducers: {}
})

export default cartSlice.reducer