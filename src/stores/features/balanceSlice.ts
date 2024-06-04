import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import balanceApi from "../../api/balanceApi";

interface IQuery { }

export const queryBalance = createAsyncThunk(
  "balance/query",
  async (query: IQuery) => {
    const response = await balanceApi.QueryBalance(query);
    return response;
  },
);

const initialState = {
  entity: null,
  loading: true,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(queryBalance.fulfilled, (state, action) => {

      state.loading = false;
      const responseData = action.payload;
      state.entity = responseData;
    });
  },
});

export default balanceSlice.reducer;
