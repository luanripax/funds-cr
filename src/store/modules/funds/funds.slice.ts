import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FundProps } from "./funds.type";

export interface FundsState {
  funds: FundProps[];
}

const initialState: FundsState = {
  funds: [],
};

const fundSlice = createSlice({
  name: "funds",
  initialState,
  reducers: {
    addFund: (state, action: PayloadAction<FundProps[]>) => {
      state.funds.push(...state.funds, ...action.payload);
    },
  },
});

export const { addFund } = fundSlice.actions;
export default fundSlice.reducer;
