/*
Goal.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import './Goal.css';


/*
Component
===============================
*/
export const Goal = () => {
    const [complete, setComplete] = useState(false);

    const handleClickComplete = (e) => {
        setComplete(true);
    }

    const handleClickRedo = (e) => {
        setComplete(false);
    }

    return (
        <div className='goal' data-complete={complete} >
            <span className='goal-controls'>
                <span className='goal-control goal-remove'>Remove</span>
                { complete ? 
                    <span className='goal-control goal-redo' onClick={handleClickRedo}>Redo</span> 
                  : 
                    <span className='goal-control goal-done' onClick={handleClickComplete} >Done</span>
                }
            </span>
            <span className='goal-name'>Water Plants</span>
        </div>
    )
}