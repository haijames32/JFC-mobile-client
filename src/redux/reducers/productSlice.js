import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { helper } from '../../utils'

const rootUrl = process.env.LOCALHOST

export const productDetails = createAsyncThunk('productSlice/productDetails', async (id) => {
   const url = `${rootUrl}/api/product/${id}`
   try {
      const res = await axios.get(url)
      if (res.status == 200) {
         return res.data.data
      } else {
         helper.showMsgError(res.data.message)
         return false
      }
   } catch (error) {
      helper.showMsgError(error.message)
      console.log('Error: ', error)
      return false
   }
})

const initialState = {
   product: {
      id: '',
      name: '',
      price: 0,
      image: '',
      description: '',
      category: {}
   },
   isLoading: false,
   isError: false
}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(productDetails.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(productDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.product = action.payload
            }
         })
         .addCase(productDetails.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

export default productSlice.reducer