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
    //degree: '44.7',
    //details: 'CLEAR SKY',
    //img: 'https://cdn-icons-png.flaticon.com/512/169/169367.png'
}
const apiKey = 'f4ebc400d68eafae371f75c7d66fc38f';
export const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-73&appid=${apiKey}`;
console.log(apiUrl);

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
        },
        setWeather: (state, action) => {
            return action.payload;
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
Thunks
===============================
*/



/*
Exports
===============================
*/
export const { getWeather, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;