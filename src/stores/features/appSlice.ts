import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activedMobileNav: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActivedMobileNav: (state, action: PayloadAction<boolean>) => {
      state.activedMobileNav = action.payload
    },
  },
});

export const { setActivedMobileNav } = appSlice.actions;

export default appSlice.reducer;