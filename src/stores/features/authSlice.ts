import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api";

interface ICredential { }

export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (credential: ICredential) => {
    const response = await authApi.LoginWithGoogle(credential);
    return response;
  },
);

const initialState = {
  entity: {
    // account: null,
    account: {
      id: 1,
      role: "MEMBER",
      familyName: "Ng",
      givenName: "Thanh Cong",
      email: "nxgthanhcongcommunity@gmail.com",
      photo:
        "https://lh3.googleusercontent.com/a/ACg8ocI54tMFPrecA2UHM6loKvO7as1VP_mS5xkr1jMkgMVbe0fROb0=s96-c",
    },
  },
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // state.entity.account = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      const responseData = action.payload;

      const transformData = {
        account: {
          id: 1,
          role: "MEMBER",
          familyName: "Ng",
          givenName: "Thanh Cong",
          email: "nxgthanhcongcommunity@gmail.com",
          photo:
            "https://lh3.googleusercontent.com/a/ACg8ocI54tMFPrecA2UHM6loKvO7as1VP_mS5xkr1jMkgMVbe0fROb0=s96-c",
        },
        ...responseData,
      };

      console.log(transformData);

      state.entity = transformData;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
