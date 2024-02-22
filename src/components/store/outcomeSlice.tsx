import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const OutcomeSlice = createSlice({
  name: "outcomeBalance",
  initialState: 0,
  reducers: {
    outcomeBalance: (state: any, action: PayloadAction) => {
      const amount = Number(action.payload);
      const newBalance = state + amount;
      console.log(newBalance);
      return newBalance;
    },
  },
});

export const { outcomeBalance } = OutcomeSlice.actions;

export default OutcomeSlice.reducer;
