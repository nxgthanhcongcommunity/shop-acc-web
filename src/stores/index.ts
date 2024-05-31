import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import appReducer from "./features/appSlice";
import masterReducer from "./features/masterSlice";
import cartReducer from "./features/cartSlice";
import { masterDataApi } from "./services";

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    master: masterReducer,
    cart: cartReducer,
    [masterDataApi.reducerPath]: masterDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(masterDataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);