/*
Goals.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import { Goal } from './Goal.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoals } from './GoalsSlice.js';
import './Goals.css';


/*
Component
===============================
*/
export const Goals = () => {
    const goals = useSelector(selectGoals);

    return (
        <div className='goals'>
            {goals.map(goal => <Goal id={goal.id} name={goal.name} isComplete={goal.isComplete} />)}
        </div>
    )
}