import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: {}
})

export default productSlice.reducer