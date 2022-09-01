/*
Goal.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markComplete, unmarkComplete, removeGoal } from './GoalsSlice.js';
import './Goal.css';


/*
Component
===============================
*/
export const Goal = ({id, name, isComplete}) => {
    const dispatch = useDispatch();

    const handleClickComplete = (e) => {
        dispatch(markComplete(id));
    }

    const handleClickRedo = (e) => {
        dispatch(unmarkComplete(id));
    }

    const handleClickRemove = (e) => {
        dispatch(removeGoal(id));
    }

    return (
        <div className='goal' data-complete={isComplete} key={id} >
            <span className='goal-controls'>
                <span className='goal-control goal-remove' onClick={handleClickRemove} >Remove</span>
                { isComplete ? 
                    <span className='goal-control goal-redo' onClick={handleClickRedo}>Redo</span> 
                  : 
                    <span className='goal-control goal-done' onClick={handleClickComplete} >Done</span>
                }
            </span>
            <span className='goal-name'>{name}</span>
        </div>
    )
}