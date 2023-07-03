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
    totalPrice : 0,
  },
  reducers: {
    Add : (state, action) => {
      let found = false;
      let num = 0;
      for(let product of state.products)
      {
        if(product.id == action.payload.id)
        {
            found = true;
            break;
        }
        num++;
      }
      if(!found)
      {
        state.products.push(action.payload);
        state.totalPrice+= action.payload.productCount*action.payload.price;
      }
      else
      {
        state.totalPrice-= state.products[num].productCount*(action.payload.price);
        state.products[num].productCount = action.payload.productCount;
        state.totalPrice+= action.payload.productCount*action.payload.price;

      }
    },
    increment:(state,action) =>{
      state.totalPrice-=(state.products[action.payload].productCount*state.products[action.payload].price);
      state.products[action.payload].productCount++;
      state.totalPrice+=(state.products[action.payload].productCount*state.products[action.payload].price);

    },
    decrement: (state,action) =>{
      state.totalPrice-=(state.products[action.payload].productCount*state.products[action.payload].price);
      state.products[action.payload].productCount--;
      state.totalPrice+=(state.products[action.payload].productCount*state.products[action.payload].price);
      
      if(state.products[action.payload].productCount === 0)
      {
          state.products.splice(action.payload, 1);
      }
      
    },

    Empty: (state) => {
      state.products = [];
      state.totalPrice = 0;
    }
  },
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    details: [],
  },
  reducers: {
    Userr : (state, action) => {
      state.details.push(action.payload);
    },
    Userrr : (state, action) => {
      state.details = [];
    }
  },
})

const persistConfig = {
  key:'root',
  storage: storage,
}

export const rootReducers = combineReducers({
  cart: counterSlice.reducer,
  user: userSlice.reducer
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


export const {Userr} = userSlice.actions;
export const {Userrr} = userSlice.actions;
export const { Add,increment, decrement, Empty} = counterSlice.actions;
