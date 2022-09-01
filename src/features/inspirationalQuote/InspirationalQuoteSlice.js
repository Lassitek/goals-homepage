/*
InspirationalQuotesSlice.js Slice

Imports
===============================
*/
import { createSlice } from '@reduxjs/toolkit';


/*
Variables
===============================
*/
const initialState = {
    quoteMessage: 'Meaning is something you build into your life. You build it out of your own past, out of your affections and loyalties, out of the experience of humankind as it is passed on to you... You are the only one who can put them together into that unique pattern that will be your life.',
    quoteAuthor: 'John Gardner'
}
export const apiUrl = 'https://quotes.rest/qod?language=en';


/*
Slice
===============================
*/
export const inspirationalQuoteSlice = createSlice({
    name: 'inspirationalQuote',
    initialState,
    reducers: {
        getQuote: (state, action) => {
            return [...state, action.payload];
        }
    }
});


/*
Selectors
===============================
*/
export const selectQuote = (state) => {
    return state.inspirationalQuote;
}


/*
Exports
===============================
*/
export const { getQuote } = inspirationalQuoteSlice.actions;
export default inspirationalQuoteSlice.reducer;