import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import authReducer from './features/authSlice';
import wishlistReducer from './features/wishlistSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      auth: authReducer,
      wishlist: wishlistReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
