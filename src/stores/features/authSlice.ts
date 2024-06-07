import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAccount {
  id: number;
  role: string;
  familyName: string;
  givenName: string;
  email: string;
  photo: string;
}

interface IAuthState {
  entity: IAccount | null;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState == null) {
      return { entity: null } as IAuthState;
    }
    return JSON.parse(serializedState) as IAuthState;
  } catch (err) {
    return { entity: null } as IAuthState;
  }
}

const initialState: IAuthState = loadState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    assignAuthInfo: (state, action: PayloadAction<IAccount>) => {
      state.entity = action.payload;
      saveState(state);
    },
    removeAuthInfo: (state) => {
      state.entity = null;
      saveState(state);
    },
  }
})

const saveState = (state: IAuthState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('auth', serializedState);
  } catch (err) {

  }
};

export const {
  assignAuthInfo,
  removeAuthInfo,
} = authSlice.actions;

export default authSlice.reducer;