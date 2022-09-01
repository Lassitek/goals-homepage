/*
InspirationalRightArrow.js Feature

Imports
===============================
*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { nextImage } from './InspirationalImagesSlice.js';
import './InspirationalImageRightArrow.css';


/*
Component
===============================
*/
export const InspirationalImageRightArrow = () => {
    const dispatch = useDispatch();

    function onClickHandler(e) {
        dispatch(nextImage());
    }
    
    return (
        <aside className='inspirational-image-right-arrow'>
            <button onClick={onClickHandler} >&#x3e;</button>
        </aside>
    )
}