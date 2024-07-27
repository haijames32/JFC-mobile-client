import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { helper } from '../../utils'
import axios from 'axios'

const rootUrl = process.env.LOCALHOST

const getListOrder = createAsyncThunk('orderSlice/getListOrder', async (id) => {//Input userId
   const url = `${rootUrl}/user/order/${id}`
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
   isLoading: false,
   isError: false
}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder

   }
})

export default orderSlice.reducer