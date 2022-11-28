import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import { productsApi } from "./productsApi";
import productsReducer from "./productsSlice";
import store from '../redux/store';
import { productsFetch } from '../redux/productsSlice';

export default configureStore({
 reducer: {
  user: userReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());