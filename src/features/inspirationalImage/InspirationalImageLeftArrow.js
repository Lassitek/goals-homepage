/*
InspirationalLeftArrow.js Feature

Imports
===============================
*/
import React from 'react';
import { useDispatch } from 'react-redux';
import { prevImage } from './InspirationalImagesSlice.js';
import './InspirationalImageLeftArrow.css';


/*
Component
===============================
*/
export const InspirationalImageLeftArrow = () => {
    const dispatch = useDispatch();

    function onClickHandler(e) {
        dispatch(prevImage());
    }
    
    return (
        <aside class='inspirational-image-left-arrow'>
            <button onClick={onClickHandler} >&#x3c;</button>
        </aside>
    )
}