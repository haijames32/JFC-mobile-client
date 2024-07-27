import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { helper } from '../../utils'

const rootUrl = process.env.LOCALHOST


export const getListCategory = createAsyncThunk('homeSlice/getListCategory', async () => {
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

export const getListProductByCate = createAsyncThunk('homeSlice/getListProductByCate', async (id) => {//Input categoryId
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


const initialState = {
   listCategory: [],
   listProduct: [],
   isLoading: false,
   isError: false
}

const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         // getListCategory
         .addCase(getListCategory.pending, (state, action) => {
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
         .addCase(getListCategory.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         // getListProductByCate
         .addCase(getListProductByCate.pending, (state, action) => {
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
         .addCase(getListProductByCate.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

export default homeSlice.reducer