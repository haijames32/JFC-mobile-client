import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/index'
import axios from "axios";
import { ToastAndroid } from 'react-native';

const rootUrl = 'http://192.168.32.105:8080';

export const getUserData = createAsyncThunk('userSlice/getUserData', async () => {
   let url = `${rootUrl}/api/users`
   try {
      const res = await axios.get(url)
      if (res.status === 200) {
         console.log("GET thành công:", res.data.data.length);
         return res.data.data;
      }
   } catch (error) {
      console.log("Lỗi: ", error);
   }
})

export const addUserData = createAsyncThunk('userSlice/addUserData', async (body) => {
   let url = `${rootUrl}/api/users`
   try {
      const res = await axios.post(url, body, {
         headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
         }
      })
      if (res.status === 201) {
         console.log("ADD thành công: ", res.data.data);
         return res.data.data
      }
   } catch (error) {
      console.log("Lỗi addUser: ", error);
   }
})


export const updateUser = createAsyncThunk('userSlice/updateUser', async (data) => {
   let url = `${rootUrl}/api/users/${data.id}`
   try {
      const res = await axios.put(url, data.body, {
         headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
         }
      })
      if (res.status === 200) {
         console.log("UPDATE thành công: ", res.data.data);
         return res.data.data
      }
   } catch (error) {
      console.log("Lỗi update: ", error);
   }
})

export const deleteUser = createAsyncThunk('userSlice/deleteUser', async (id) => {
   let url = `${rootUrl}/api/users/${id}`
   try {
      const res = await axios.delete(url)
      if (res.status === 200) {
         console.log("DELETE thành công");
         return res.data.data
      }
   } catch (error) {
      console.log("Lỗi delete: ", error);
   }
})


const initialState = {
   user: [],
   isLoading: false,
   isError: false
}


export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(getUserData.pending, state => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(getUserData.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
            state.isError = false
         })
         .addCase(getUserData.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(addUserData.pending, (state, action) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(addUserData.fulfilled, (state, action) => {
            state.isLoading = false
            state.user.push(action.payload)
            ToastAndroid.show('Create Success!', ToastAndroid.SHORT)
         })
         .addCase(addUserData.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(updateUser.pending, (state, action) => {
            state.isLoading = true
         })
         .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            const userIndex = state.user.findIndex(user => user._id === action.payload._id);
            if (userIndex !== -1) {
               state.user[userIndex] = action.payload;
            }
            ToastAndroid.show('Update Success!', ToastAndroid.SHORT)
         })
         .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(deleteUser.pending, (state, action) => {
            state.isLoading = false
            state.isError = false
         })
         .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.user = state.user.filter(user => user._id !== action.payload._id)
            ToastAndroid.show('Delete Success!', ToastAndroid.SHORT)
         })
         .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
         })
   }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default userSlice.reducer