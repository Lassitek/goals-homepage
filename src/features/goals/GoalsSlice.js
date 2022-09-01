/*
GoalsSlice.js Slice

Imports
===============================
*/
import { createSlice } from '@reduxjs/toolkit';


/*
Variables
===============================
*/
const initialState = [
    {
        id: '1',
        name: 'Water Plants',
        isComplete: false
    },
    {
        id: '2',
        name: 'Wash Dished',
        isComplete: false
    }
    ,
    {
        id: '3',
        name: 'Finish Project',
        isComplete: false
    }
];


/*
Slice
===============================
*/
export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            return [...state, action.payload];
        },
        removeGoal: (state, action) => {
            let id = action.payload;
            return state.filter(goal => goal.id != id);
        },
        markComplete: (state, action) => {
            let id = action.payload;
            state.map(goal => {
                if(goal.id == id){
                    goal.isComplete = true;
                }
                return goal;
            });
            return state;
        },
        unmarkComplete: (state, action) => {
            let id = action.payload;
            state.map(goal => {
                if(goal.id == id){
                    goal.isComplete = false;
                }
                return goal;
            });
            return state;
        }
    }
});


/*
Selectors
===============================
*/
export const selectGoals = (state) => {
    return state.goals;
}


/*
Exports
===============================
*/
export const { addGoal, removeGoal, markComplete, unmarkComplete } = goalsSlice.actions;
export default goalsSlice.reducer;