import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { helper } from '../../utils'
import { setInfoUser } from './userSlice'
import { useNavigation } from '@react-navigation/native'

const rootUrl = process.env.LOCALHOST
const navigation = useNavigation()

export const loginAction = createAsyncThunk('authSlice/loginAction', async (body, { dispatch, getState }) => {//Input username & password
   const url = `${rootUrl}/api/user/login`
   try {
      const res = await axios.post(url, body)
      if (res.status == 200) {
         const data = res.data
         dispatch(setInfoUser({
            id: data.id,
            name: data.name,
            username: data.username,
            phoneNumber: data.phoneNumber,
            email: data.email,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender
         }))
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

export const registerAction = createAsyncThunk('authSlice/registerAction', async (body) => {
   const url = `${rootUrl}/api/user/register`
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

export const changePassword = createAsyncThunk('authSlice/changePassword', async (id, body) => {// Input userId
   const url = `${rootUrl}/api/user/changePassword/${id}`
   try {
      const res = await axios.patch(url, body)
      if (res.status == 200) {
         helper.showMsgSuccess(res.data.message, navigation.goBack(2))
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

export const logoutAction = createAsyncThunk('authSlice/logoutAction', async (_, { dispatch, getState }) => {
   helper.showLoading()
   dispatch(logout())
   setTimeout(() => {
      helper.hideLoading()
      navigation.reset({ index: 0, routes: 'Login' })
   }, 1000)
})


const initialState = {
   token: '',
   isLoading: false,
   isError: false
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state, action) => {
         state.token = ''
      }
   },
   extraReducers: builder => {
      builder
         // loginAction
         .addCase(loginAction.pending, (state) => {
            state.isLoading = true
            state.isError = false
         })
         .addCase(loginAction.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            if (action.payload) {
               state.token = action.payload._id
            }
         })
         .addCase(loginAction.rejected, (state) => {
            state.isLoading = false
            state.isError = true
         })
         .addCase(logoutAction.fulfilled, (state, action) => {
            state.token = '';
         })
   }
})
export const { logout } = authSlice.actions
export default authSlice.reducer