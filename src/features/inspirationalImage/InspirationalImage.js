/*
InspirationalImage.js Feature

Imports
===============================
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { selectInspirationalImages, selectCurrentImage } from './InspirationalImagesSlice.js';
import './InspirationalImage.css';


/*
Component
===============================
*/
export const InspirationalImage = () => {
    const inspirationalImages = useSelector(selectInspirationalImages);
    const currentImg = useSelector(selectCurrentImage);
    const currentImgSrc = currentImg.src;

    return (
        <div className='inspirational-image' style={{backgroundImage:`url(${currentImgSrc})`}}>
        </div> 
    );
}