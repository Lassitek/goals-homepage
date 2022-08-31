/*
Weather.js Feature

Imports
===============================
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather } from './WeatherSlice.js';
import './Weather.css';


/*
Component
===============================
*/
export const Weather = () => {
    const weather = useSelector(selectWeather);
    
    return (
        <div class='weather'>
            <img src={weather.img} />
            <div>
                <div>{weather.degree}&deg;</div>
                <div>{weather.details}</div>
            </div>
        </div>
    );
}