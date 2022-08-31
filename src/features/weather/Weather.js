/*
Weather.js Feature

Imports
===============================
*/
import React from 'react';
import './Weather.css';


/*
Component
===============================
*/
export const Weather = () => {
    return (
        <div class='weather'>
            <img src='https://via.placeholder.com/60' />
            <div>
                <div>44.7&deg;</div>
                <div>CLEAR SKY</div>
            </div>
        </div>
    );
}