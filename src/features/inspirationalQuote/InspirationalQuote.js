/*
InspirationalQuote.js Feature

Imports
===============================
*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuote, setQuote, apiUrl } from './InspirationalQuoteSlice.js';
import './InspirationalQuote.css';


/*
Component
===============================
*/
export const InspirationalQuote = () => {
    const {quoteMessage, quoteAuthor} = useSelector(selectQuote);
    const dispatch = useDispatch();

        // Get the quote through api quotes.rest initially
        useEffect(()=>{
            const getQuote = async () => {
                let response = await fetch(apiUrl);
                console.log(response);
                let jsonResponse = await response.json();
                console.log(jsonResponse);
                let quoteMessage = jsonResponse.contents.quotes[0].quote;
                let quoteAuthor = jsonResponse.contents.quotes[0].author;
                dispatch(setQuote(
                    {
                        quoteMessage: quoteMessage,
                        quoteAuthor: quoteAuthor
                    }
                ))
            }
    
            getQuote();
        }, [])

    return (
        <div className='quote'>
            <p className='quote-message' >{quoteMessage}</p>
            <p className='quote-author' >-{quoteAuthor}</p>
        </div>
        
    )
}