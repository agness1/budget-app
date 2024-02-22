import {  createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface TransactionData {
    receiver: string,
    type: string,
    category: string,
    amount: any,
    date: string

}

const transactionSlice = createSlice({
    name: "transactions",
    initialState: [] as TransactionData[],
    reducers: {
        getTransaction: (state, action) => {
            if (!Array.isArray(state)) {
                console.error('State is not an array:', state);
                return state;
              }
              return [...state, action.payload];
        }
        
    },

})

export const { getTransaction } = transactionSlice.actions;
export const selectTransactionData = (state:any) => state.transaction
export default transactionSlice.reducer


