/*
Weather.js Slice

Imports
===============================
*/
import { createSlice } from '@reduxjs/toolkit';


/*
Variables
===============================
*/
const initialState = {
    degree: '44.7 &deg;',
    details: 'CLEAR SKY',
    img: 'https://cdn-icons-png.flaticon.com/512/169/169367.png'
}


/*
Slice
===============================
*/
export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state, action) => {
            return state;
        }
    }
});


/*
Selectors
===============================
*/
export const selectWeather = (state) => {
    return state.weather;
}


/*
Exports
===============================
*/
export const { getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;