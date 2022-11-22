import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/userSlice';
import { productsApi } from "./producstsApi";
import productsReducer from "./productsSlice";

export default configureStore({
 reducer: {
  user: userReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
 },
});