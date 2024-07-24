import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {

}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {},
})

export default orderSlice.reducer