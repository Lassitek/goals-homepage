// GoalsForm.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import goalsReducer, { addGoal } from '../../features/goals/GoalsSlice';
import { GoalsForm } from '../../components/goalsForm/GoalsForm';

// Helper to render with Redux store
const renderWithStore = (ui, { preloadedState, store = configureStore({ reducer: { goals: goalsReducer }, preloadedState }) } = {}) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
};

describe('GoalsForm Component', () => {

    test('should not add an empty goal', () => {
        const { store } = renderWithStore(<GoalsForm />);

        const form = screen.getByRole('form', { name: /goal form/i });

        // Submit with empty input
        fireEvent.submit(form);

        const goals = store.getState().goals;
        expect(goals).toHaveLength(3); // initialState has 3
    });

    test('should not allow adding more than 10 goals', () => {
        const preloadedGoals = Array.from({ length: 10 }, (_, i) => ({
            id: String(i + 1),
            name: `Goal ${i + 1}`,
            isComplete: false
        }));

        const { store } = renderWithStore(<GoalsForm />, {
            preloadedState: { goals: preloadedGoals }
        });

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', { name: /goal form/i });

        fireEvent.change(input, { target: { value: 'Extra Goal' } });
        fireEvent.submit(form);

        const goals = store.getState().goals;
        expect(goals).toHaveLength(10); // Should not increase beyond 10
        expect(goals.find(goal => goal.name === 'Extra Goal')).toBeUndefined();
    });

});
