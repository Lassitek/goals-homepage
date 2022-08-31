/*
InspirationalImage.js Feature

Imports
===============================
*/
import React, {useState} from 'react';
import './GoalsForm.css';


/*
Component
===============================
*/
export const GoalsForm = () => {
    const [goalName, setGoalName] = useState('');
    
    const handleChange = (e) => {
        setGoalName(e.target.value);
    };

    return (
        <form className='goals-form' onSubmit='' >
            <h1>What's on your mind today?</h1>
            <input type='text' onChange={handleChange} value={goalName} />
        </form>
    )
}