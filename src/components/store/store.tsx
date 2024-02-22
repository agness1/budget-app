import transactionReducer from './transactionSlice'
import balanceReducer from './balanceSlice'
import goalReducer from './goalSlice';
import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import outcomeReducer from './outcomeSlice';
import incomeReducer from './incomeSlice';
import {thunk} from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  transaction: transactionReducer,
  balance: balanceReducer,
  goal: goalReducer,
  incomeBalance: incomeReducer,
  outcomeBalance: outcomeReducer
 
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
 // middleware: [thunk as unknown as Middleware],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

  