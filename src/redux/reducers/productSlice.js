import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { helper } from '../../utils'

const rootUrl = process.env.LOCALHOST

export const getListCategory = createAsyncThunk('productSlice/getListCategory', async () => {
   const url = `${rootUrl}/api/category`
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

export const getListProductByCate = createAsyncThunk('productSlice/getListProductByCate', async (id) => {//Input categoryId
   const url = `${rootUrl}/api/productByCategory/${id}`
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
   listCategory: [],
   listProduct: [],
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
         // getListCategory
         .addCase(getListCategory.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getListCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listCategory = action.payload
            }
         })
         .addCase(getListCategory.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
         // getListProductByCate
         .addCase(getListProductByCate.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getListProductByCate.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listProduct = action.payload
            }
         })
         .addCase(getListProductByCate.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
         // productDetails
         .addCase(productDetails.pending, (state) => {
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
         .addCase(productDetails.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

export default productSlice.reducer