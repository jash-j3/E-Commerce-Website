import { configureStore } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

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

const persistConfig = {
  key:'root',
  storage: storage,
}

export const rootReducers = combineReducers({
  cart: counterSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)


export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const { Add} = counterSlice.actions;