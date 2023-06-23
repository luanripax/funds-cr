import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  logged: boolean;
}

const initialState: AuthState = {
  logged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogged: (state) => {
      state.logged = true;
    },
  },
});

export const { setUserLogged } = authSlice.actions;
export default authSlice.reducer;
