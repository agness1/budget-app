import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const incomeSlice = createSlice({
  name: "incomeBalance",
  initialState: 0,
  reducers: {
    incomeBalance: (state: any, action: PayloadAction) => {
      const amount = Number(action.payload);
      const newBalance = state + amount;
      console.log(newBalance);
      return newBalance;
    },
  },
});

export const { incomeBalance } = incomeSlice.actions;

export default incomeSlice.reducer;
