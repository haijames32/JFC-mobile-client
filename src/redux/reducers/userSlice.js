import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import { helper } from '../../utils';

const rootUrl = process.env.LOCALHOST


export const getProfileAction = createAsyncThunk('userSlice/getProfileAction', async (id) => {
   const url = `${rootUrl}/user/profile/${id}`
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

export const updateProfileAction = createAsyncThunk('userSlice/updateProfileAction', async (id, body) => {
   const url = `${rootUrl}/user/editProfile/${id}`
   try {
      const res = await axios.put(url, body)
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

export const getListAddress = createAsyncThunk('userSlice/getListAddress', async (id) => {
   const url = `${rootUrl}/user/address/${id}`
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

export const postAddress = createAsyncThunk('userSlice/postAddress', async (body) => {
   const url = `${rootUrl}/user/address`
   try {
      const res = await axios.post(url, body)
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

export const setAddressDefault = createAsyncThunk('userSlice/setAddressDefault', async (id, addressId) => {
   const url = `${rootUrl}/user/setAddressDefault/${id}`
   try {
      const res = await axios.patch(url, addressId)
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

export const deleteAddress = createAsyncThunk('userSlice/deleteAddress', async (id) => {
   const url = `${rootUrl}/user/deleteAddress/${id}`
   try {
      const res = await axios.delete(url)
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
   user: {
      id: '',
      name: '',
      username: '',
      phoneNumber: 0,
      email: '',
      dateOfBirth: '',
      gender: '',
      addressDefault: ''
   },
   listAddress: [],
   isLoading: false,
   isError: false
}


const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getProfileAction.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getProfileAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.user.name = action.payload.name
               state.user.username = action.payload.username
               state.user.phoneNumber = action.payload.phoneNumber
               state.user.email = action.payload.email
               state.user.dateOfBirth = action.payload.dateOfBirth
               state.user.gender = action.payload.gender
               state.user.addressDefault = action.payload.addressDefault
            }
         })
         .addCase(getProfileAction.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(updateProfileAction.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(updateProfileAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.user.name = action.payload.name
               state.user.username = action.payload.username
               state.user.phoneNumber = action.payload.phoneNumber
               state.user.email = action.payload.email
               state.user.dateOfBirth = action.payload.dateOfBirth
               state.user.gender = action.payload.gender
            }
         })
         .addCase(updateProfileAction.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(getListAddress.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getListAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listAddress = action.payload
            }
         })
         .addCase(getListAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(postAddress.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(postAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listAddress.unshift(action.payload)
            }
         })
         .addCase(postAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(setAddressDefault.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(setAddressDefault.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.user.addressDefault = action.payload
            }
         })
         .addCase(setAddressDefault.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(deleteAddress.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(deleteAddress.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.listAddress.filter(address => address._id !== action.payload._id)
            }
         })
         .addCase(deleteAddress.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

// export const { increment, decrement } = userSlice.actions
export default userSlice.reducer