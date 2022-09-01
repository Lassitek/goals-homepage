/*
InspirationalImage.js Feature

Imports
===============================
*/
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGoal } from '../../features/goals/GoalsSlice.js';
import './GoalsForm.css';


/*
Component
===============================
*/
export const GoalsForm = () => {
    const [goalName, setGoalName] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setGoalName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newGoal = {
            id: Math.random() * 1000000,
            name: goalName,
            isComplete: false
        }
        console.log(newGoal);
        
        dispatch(addGoal(newGoal));

        setGoalName('');
    }

    return (
        <form className='goals-form' onSubmit={handleSubmit} >
            <h1>What's on your mind today?</h1>
            <input type='text' onChange={handleChange} value={goalName} />
        </form>
    )
}