import { configureStore } from '@reduxjs/toolkit'
import {
   cartReducer,
   orderReducer,
   productReducer,
   userReducer
} from './reducers/rootReducer'

export const store = configureStore({
   reducer: {
      user: userReducer,
      product: productReducer,
      order: orderReducer,
      cart: cartReducer
   },
})
