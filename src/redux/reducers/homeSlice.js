import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { helper } from '../../utils'

const rootUrl = process.env.LOCALHOST


export const getListCategory = createAsyncThunk('homeSlice/getListCategory', async (id) => {
   const url = `${rootUrl}/api/category/${id}`
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

export const getListProductByCate = createAsyncThunk('homeSlice/getListProductByCate', async (id) => {
   const url = `${rootUrl}/api/category/${id}`
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
   isLoading: false,
   isError: false
}

const homeSlice = createSlice({
   name: 'home',
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

export default homeSlice.reducer