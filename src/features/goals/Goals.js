/*
Goals.js Feature

Imports
===============================
*/
import React, { useState } from 'react';
import { Goal } from './Goal.js';
import './Goals.css';


/*
Component
===============================
*/
export const Goals = () => {
    const [goals, setGoals] = useState([<Goal />, <Goal />, <Goal />, <Goal />]);

    return (
        <div className='goals'>
            {goals.map(goal => goal)}
        </div>
    )
}