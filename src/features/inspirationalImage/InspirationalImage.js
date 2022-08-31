/*
InspirationalImage.js Feature

Imports
===============================
*/
import React from 'react';
import './InspirationalImage.css';


/*
Component
===============================
*/
export const InspirationalImage = () => {
    const imgUrl = 'https://images.pexels.com/photos/6051049/pexels-photo-6051049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

    return (
        <div className='inspirational-image' style={{backgroundImage:`url(${imgUrl})`}}>
        </div> 
    );
}