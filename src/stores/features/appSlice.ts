import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isShowUnloginHiddenContainer: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsShowUnloginHiddenContainer: (state, action: PayloadAction<boolean>) => {
      state.isShowUnloginHiddenContainer = action.payload
    },
  },
});

export const { setIsShowUnloginHiddenContainer } = appSlice.actions;

export default appSlice.reducer;