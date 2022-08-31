/*
GoalsContainer.js Feature

Imports
===============================
*/
import React from 'react';
import { GoalsForm } from '../goalsForm/GoalsForm.js';
import { Goals } from '../../features/goals/Goals.js';
import './GoalsContainer.css';


/*
Component
===============================
*/
export const GoalsContainer = () => {
    return (
        <div className="goals-container">
            <GoalsForm />
            <Goals />
        </div>
    )
}