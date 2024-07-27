import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { helper } from '../../utils'
import axios from 'axios'

const rootUrl = process.env.LOCALHOST

export const getListOrder = createAsyncThunk('orderSlice/getListOrder', async (id) => {//Input userId
   const url = `${rootUrl}/api/user/order/${id}`
   try {
      const res = await axios.get(url)
      if (res.status == 200) {
         return res.data.data
      } else {
         helper.showMsgError(error.message)
         return false
      }
   } catch (error) {
      helper.showMsgError(error.message)
      console.log('Error: ', error)
      return false
   }
})

export const getOrderDetails = createAsyncThunk('orderSlice/getOrderDetails', async (id) => {//Input orderId
   const url = `${rootUrl}/api/user/order/details/${id}`
   try {
      const res = await axios.get(url)
      if (res.status == 200) {
         return res.data.data
      } else {
         helper.showMsgError(error.message)
         return false
      }
   } catch (error) {
      helper.showMsgError(error.message)
      console.log('Error: ', error)
      return false
   }
})

const initialState = {
   listOrder: [],
   itemOfOrder: [],
   isLoading: false,
   isError: false
}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         // getListOrder
         .addCase(getListOrder.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getListOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listOrder = action.payload
            }
         })
         .addCase(getListOrder.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
         // getOrderDetails
         .addCase(getOrderDetails.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getOrderDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.itemOfOrder = action.payload
            }
         })
         .addCase(getOrderDetails.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

export default orderSlice.reducer