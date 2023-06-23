import { configureStore } from "@reduxjs/toolkit";
import fundsSlice from "./modules/funds/funds.slice";
import authSlice from "./modules/auth/auth.slice";

const store = configureStore({
  reducer: { funds: fundsSlice, auth: authSlice },
});

export default store;
