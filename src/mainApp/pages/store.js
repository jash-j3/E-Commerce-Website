import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    Add : (state, action) => {
      state.products.push(action.payload);
    },
  },
})
export default configureStore({
  reducer: {cart: counterSlice.reducer},
})

export const { Add} = counterSlice.actions;