import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
})

export default productSlice.reducer