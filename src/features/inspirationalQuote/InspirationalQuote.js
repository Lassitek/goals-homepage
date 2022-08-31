/*
InspirationalQuote.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import './InspirationalQuote.css';


/*
Component
===============================
*/
export const InspirationalQuote = () => {
    const [quoteMessage, setQuoteMessage] = useState('Meaning is something you build into your life. You build it out of your own past, out of your affections and loyalties, out of the experience of humankind as it is passed on to you... You are the only one who can put them together into that unique pattern that will be your life.');
    const [quoteAuthor, setQuoteAuthor] = useState('John Gardner');

    return (
        <div className='quote'>
            <p className='quote-message' >{quoteMessage}</p>
            <p className='quote-author' >{quoteAuthor}</p>
        </div>
        
    )
}