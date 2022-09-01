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

        // Get the quote through api quotes.rest initially
        useEffect(()=>{
            const getQuote = async () => {
                let url = '';
                let response = await fetch(apiUrl);
                console.log(response);
                let jsonResponse = await response.json();
                console.log(jsonResponse);
                let kelvin = jsonResponse.main.temp;
                // Celsius is 273 degrees less than Kelvin
                let  celsius = kelvin - 273;
    
                // Calculating Fahrenheit temperature to the nearest integer
                let fahrenheit = Math.floor(celsius * (9/5) + 32);
                let details = jsonResponse.weather[0].description;
    
                dispatch(setWeather(
                    {
                        degree: fahrenheit,
                        details: details,
                        img: 'https://cdn-icons-png.flaticon.com/512/169/169367.png'
                    }
                ))
            }
    
            getWeather();
        }, [])

    return (
        <div className='quote'>
            <p className='quote-message' >{quoteMessage}</p>
            <p className='quote-author' >-{quoteAuthor}</p>
        </div>
        
    )
}