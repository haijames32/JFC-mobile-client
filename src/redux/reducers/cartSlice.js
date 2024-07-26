import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { helper } from '../../utils'
import axios from 'axios'

const rootUrl = process.env.LOCALHOST


export const getListCart = createAsyncThunk('cartSlice/getListCart', async (id) => {// Input userId
   const url = `${rootUrl}/api/user/cart/${id}`
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

export const addProductToCart = createAsyncThunk('cartSlice/addProductToCart', async (body) => {
   const url = `${rootUrl}/api/user/cart`
   try {
      const res = await axios.post(url, body)
      if (res.status == 200) {
         helper.showMsgSuccess(res.data.message)
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

export const changeQuantity = createAsyncThunk('cartSlice/changeQuantity', async (id, body) => {// Input cartId, quantity
   const url = `${rootUrl}/api/user/cart/changeQuantity/${id}`
   try {
      const res = await axios.patch(url, body)
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

export const deleteProductInCart = createAsyncThunk('cartSlice/deleteProductInCart', async (id) => {//Input cartId
   const url = `${rootUrl}/api/user/cart/delete/${id}`
   try {
      const res = await axios.patch(url, body)
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
   cart: [],
   isLoading: false,
   isError: false,
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getListCart.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getListCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.cart = action.payload
            }
         })
         .addCase(getListCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(addProductToCart.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(addProductToCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.cart.unshift(action.payload)
            }
         })
         .addCase(addProductToCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(changeQuantity.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(changeQuantity.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               const index = state.cart.findIndex(cart => cart._id == action.payload._id)
               state.cart[index] = action.payload
            }
         })
         .addCase(changeQuantity.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(deleteProductInCart.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(deleteProductInCart.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.cart.filter(cart => cart._id != action.payload._id)
            }
         })
         .addCase(deleteProductInCart.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
})


// export const { increment, decrement } = userSlice.actions
export default cartSlice.reducer