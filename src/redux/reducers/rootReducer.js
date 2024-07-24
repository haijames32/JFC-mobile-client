import { combineReducers } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice"

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   order: orderReducer,
   product: productReducer
})

export default rootReducer