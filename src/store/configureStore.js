import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

import productsReducer from "./reducers/products";

const reducer = combineReducers({
  products: productsReducer
})

const store = configureStore({
  reducer,
  devTools: true
})

export default store;