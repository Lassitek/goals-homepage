/*
InspirationalQuote.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote } from './InspirationalQuoteSlice.js';
import './InspirationalQuote.css';


/*
Component
===============================
*/
export const InspirationalQuote = () => {
    const {quoteMessage, quoteAuthor} = useSelector(selectQuote);

    return (
        <div className='quote'>
            <p className='quote-message' >{quoteMessage}</p>
            <p className='quote-author' >-{quoteAuthor}</p>
        </div>
        
    )
}