/*
Weather.js Feature

Imports
===============================
*/
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, setWeather, apiUrl } from './WeatherSlice.js';
import './Weather.css';


/*
Component
===============================
*/
export const Weather = () => {
    const weather = useSelector(selectWeather);
    const dispatch = useDispatch();

    // Get the weather through api openweathermap.org initially
    useEffect(()=>{
        const getWeather = async () => {
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
        <div className='weather'>
            <img src={weather.img} />
            <div>
                <div>{weather.degree}&deg;</div>
                <div>{weather.details}</div>
            </div>
        </div>
    );
}