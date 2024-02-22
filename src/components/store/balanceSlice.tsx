import { createSlice, PayloadAction, } from "@reduxjs/toolkit"

const balanceSlice = createSlice({
    name: "balance",
    initialState: 0,
    reducers: {
        income: (state, action: PayloadAction) => {
const amount = Number(action.payload)
const newBalance = state + amount
console.log(newBalance)
return  newBalance

        },
        outcome: (state, action: PayloadAction) => {
            const amount = Number(action.payload)
            const newBalance = state - amount
            console.log(newBalance)
            return  newBalance
        }
    }
})

export const {income, outcome} = balanceSlice.actions

export default balanceSlice.reducer