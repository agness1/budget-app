import { createSlice, PayloadAction, } from "@reduxjs/toolkit"

interface GoalsData {
    name: string,
    amount: string
}

const goalSlice = createSlice({
    name: "goal",
    initialState: [] as GoalsData[],
    reducers: {
        addGoal: (state, action: PayloadAction<GoalsData>) => {
            if (!Array.isArray(state)) {
                console.error('State is not an array:', state);
                return state;
              }
              return [...state, action.payload];
        }
    },
})

export const {addGoal} = goalSlice.actions
export const selectGoalsData = (state:any) => state.goal
export default goalSlice.reducer