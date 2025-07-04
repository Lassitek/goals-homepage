/*
GoalsForm.js Component

Imports
===============================
*/
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGoal, selectGoals } from '../../features/goals/GoalsSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './GoalsForm.css';


/*
Component
===============================
*/
export const GoalsForm = () => {
    const [goalName, setGoalName] = useState('');
    const dispatch = useDispatch();
    const goals = useSelector(selectGoals);
    
    const isMaxGoals = goals.length >= 10;
    
    const handleChange = (e) => {
        if (!isMaxGoals) {
            setGoalName(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedName = goalName.trim();
        
        if (trimmedName === '') {
            toast.error("Goals cannot be empty");
            return;
        }
        
        if (trimmedName.length < 3) {
            toast.error("Goals must be at least 3 characters");
            return;
        }
        
        if (isMaxGoals + 1) {
            toast.info("You have reached the maximum number of goals");
        }
        
        // If all validations pass, add the goal
        let newGoal = {
            id: Math.random() * 1000000,
            name: trimmedName,
            isComplete: false
        };
        dispatch(addGoal(newGoal));
        setGoalName('');
    };

    return (
        <form className='goals-form' onSubmit={handleSubmit} aria-label="goal form">
            <ToastContainer autoClose={5000} position="top-center" />
            <h1>What's on your mind today?</h1>
            <input 
                type='text' 
                onChange={handleChange} 
                value={goalName} 
                disabled={isMaxGoals}
            />
        </form>
    );
};